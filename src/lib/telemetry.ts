/**
 * RAUVIA Client-Side Web Telemetry v0.1
 * Anonymous, non-intrusive event emitter for human interactions.
 * Never collects PII, form inputs, or keystrokes.
 */

const VISITOR_STORAGE_KEY = 'rauvia_visitor_id';
const SESSION_STORAGE_KEY = 'rauvia_session_id';
const UTM_STORAGE_KEY = 'rauvia_session_utms';

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function generateUuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Fallback UUID v4 generator
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getOrCreateVisitorId(): string {
  if (typeof window === 'undefined') return generateUuid();
  try {
    let id = localStorage.getItem(VISITOR_STORAGE_KEY);
    if (!id || !UUID_REGEX.test(id)) {
      id = generateUuid();
      localStorage.setItem(VISITOR_STORAGE_KEY, id);
    }
    return id;
  } catch {
    return generateUuid();
  }
}

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return generateUuid();
  try {
    let id = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!id || !UUID_REGEX.test(id)) {
      id = generateUuid();
      sessionStorage.setItem(SESSION_STORAGE_KEY, id);
    }
    return id;
  } catch {
    return generateUuid();
  }
}

interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

function getSessionUtms(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const cached = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }

    const searchParams = new URLSearchParams(window.location.search);
    const utms: UtmParams = {};
    const source = searchParams.get('utm_source');
    const medium = searchParams.get('utm_medium');
    const campaign = searchParams.get('utm_campaign');

    if (source) utms.utm_source = source.slice(0, 64);
    if (medium) utms.utm_medium = medium.slice(0, 64);
    if (campaign) utms.utm_campaign = campaign.slice(0, 64);

    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms));
    return utms;
  } catch {
    return {};
  }
}

function getDeviceType(): string {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

interface EmitEventOptions {
  event: string;
  path?: string;
  properties?: Record<string, any>;
}

/**
 * Dispatches an event to /api/telemetry via sendBeacon or keepalive fetch.
 * Completely silent on failure.
 */
function emitEvent(options: EmitEventOptions): void {
  if (typeof window === 'undefined') return;

  try {
    const visitorId = getOrCreateVisitorId();
    const sessionId = getOrCreateSessionId();
    const utms = getSessionUtms();
    const pathname = options.path || window.location.pathname || '/';

    const payload = {
      event: options.event,
      visitor_id: visitorId,
      session_id: sessionId,
      path: pathname,
      referrer: document.referrer ? document.referrer.slice(0, 255) : undefined,
      device_type: getDeviceType(),
      properties: options.properties || {},
      ...utms,
    };

    const jsonString = JSON.stringify(payload);

    // Prefer navigator.sendBeacon for non-blocking transmission
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([jsonString], { type: 'application/json' });
      const sent = navigator.sendBeacon('/api/telemetry', blob);
      if (sent) return;
    }

    // Fallback to fetch with keepalive
    fetch('/api/telemetry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString,
      keepalive: true,
    }).catch(() => {
      // Fail silently; telemetry must never disrupt user experience
    });
  } catch {
    // Fail silently
  }
}

// Tracked sections per page load to avoid firing repeatedly on scroll
const trackedSectionsInCurrentView = new Set<string>();

/**
 * Emits a page_view event. Clears section view cache for the new page.
 */
export function trackPageView(path?: string, properties?: Record<string, any>): void {
  trackedSectionsInCurrentView.clear();
  emitEvent({
    event: 'page_view',
    path,
    properties,
  });
}

/**
 * Emits a section_view event once per page visit.
 */
export function trackSectionView(sectionName: string, path?: string): void {
  const key = `${path || window.location.pathname}::${sectionName}`;
  if (trackedSectionsInCurrentView.has(key)) {
    return;
  }
  trackedSectionsInCurrentView.add(key);

  emitEvent({
    event: 'section_view',
    path,
    properties: {
      section: sectionName,
    },
  });
}

/**
 * Emits a CTA click event (LinkedIn, WhatsApp, Email, Contact, vCard).
 */
export function trackCtaClick(
  ctaType:
    | 'linkedin_click'
    | 'whatsapp_click'
    | 'email_click'
    | 'contact_click'
    | 'vcard_download',
  location: string,
  properties?: Record<string, any>
): void {
  emitEvent({
    event: ctaType,
    properties: {
      location,
      ...(properties || {}),
    },
  });
}

/**
 * Emits a form_start event when a user begins interacting with the contact form.
 */
let formStartedInSession = false;
export function trackFormStart(formId = 'contact-form'): void {
  if (formStartedInSession) return;
  formStartedInSession = true;

  emitEvent({
    event: 'form_start',
    properties: { form_id: formId },
  });
}

/**
 * Emits a form_submit event upon form submission.
 */
export function trackFormSubmit(formId = 'contact-form'): void {
  emitEvent({
    event: 'form_submit',
    properties: { form_id: formId },
  });
}
