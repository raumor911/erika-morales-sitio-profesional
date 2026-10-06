export interface PageClassification {
  page_type: string;
  semantic_intent: string;
}

const STATIC_ASSET_EXTENSIONS = new Set([
  'js', 'css', 'png', 'jpg', 'jpeg', 'webp', 'svg', 'gif', 'ico',
  'woff', 'woff2', 'ttf', 'eot', 'map', 'mp4', 'webm', 'ogg', 'json'
]);

/**
 * Checks if a given request path points to a static media/code asset.
 * Excludes semantically relevant resources like /robots.txt, /sitemap.xml, /llms.txt.
 */
export function isStaticAsset(pathname: string): boolean {
  const cleanPath = pathname.split('?')[0].toLowerCase();

  // Allow essential semantic crawler resources
  if (
    cleanPath === '/robots.txt' ||
    cleanPath === '/sitemap.xml' ||
    cleanPath === '/llms.txt'
  ) {
    return false;
  }

  // Check Vite internal or assets folder
  if (
    cleanPath.startsWith('/@') ||
    cleanPath.startsWith('/assets/') ||
    cleanPath.startsWith('/media/') ||
    cleanPath.startsWith('/node_modules/')
  ) {
    return true;
  }

  // Check file extension
  const lastDot = cleanPath.lastIndexOf('.');
  if (lastDot !== -1 && lastDot > cleanPath.lastIndexOf('/')) {
    const ext = cleanPath.slice(lastDot + 1);
    if (STATIC_ASSET_EXTENSIONS.has(ext)) {
      return true;
    }
  }

  return false;
}

/**
 * Normalizes pathname by removing duplicate slashes, queries, and trailing slash
 * (preserving root '/').
 */
export function normalizePathname(rawPath: string): string {
  if (!rawPath) return '/';
  const clean = rawPath.split('?')[0].trim();
  if (clean === '' || clean === '/') return '/';
  const withLeadingSlash = clean.startsWith('/') ? clean : `/${clean}`;
  // Normalize trailing slash to match canonical format
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

/**
 * Classifies a request path according to RAUVIA's semantic page map.
 */
export function classifyPath(rawPath: string): PageClassification {
  const normalized = normalizePathname(rawPath);
  const clean = rawPath.split('?')[0].trim();

  if (normalized === '/') {
    return {
      page_type: 'professional_profile',
      semantic_intent: 'professional_identity',
    };
  }

  if (normalized === '/como-puedo-ayudarte/') {
    return {
      page_type: 'professional_relevance',
      semantic_intent: 'problem_fit',
    };
  }

  if (normalized === '/perspectiva/') {
    return {
      page_type: 'professional_perspective',
      semantic_intent: 'professional_criterion',
    };
  }

  if (clean === '/robots.txt') {
    return {
      page_type: 'system_robots',
      semantic_intent: 'crawler_directives',
    };
  }

  if (clean === '/sitemap.xml') {
    return {
      page_type: 'system_sitemap',
      semantic_intent: 'indexing_manifest',
    };
  }

  if (clean === '/llms.txt') {
    return {
      page_type: 'system_llm_dossier',
      semantic_intent: 'llm_grounding',
    };
  }

  return {
    page_type: 'other_page',
    semantic_intent: 'general_navigation',
  };
}
