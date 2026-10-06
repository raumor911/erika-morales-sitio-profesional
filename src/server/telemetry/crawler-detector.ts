export interface CrawlerDetectionResult {
  isCrawler: boolean;
  crawlerName: string | null;
  crawlerFamily: string | null;
}

interface CrawlerRule {
  pattern: RegExp;
  name: string;
  family: string;
}

const CRAWLER_RULES: CrawlerRule[] = [
  // OpenAI
  { pattern: /GPTBot/i, name: 'GPTBot', family: 'OpenAI' },
  { pattern: /ChatGPT-User/i, name: 'ChatGPT-User', family: 'OpenAI' },
  { pattern: /OAI-SearchBot/i, name: 'OAI-SearchBot', family: 'OpenAI' },

  // Anthropic
  { pattern: /ClaudeBot/i, name: 'ClaudeBot', family: 'Anthropic' },
  { pattern: /anthropic-ai/i, name: 'anthropic-ai', family: 'Anthropic' },
  { pattern: /Claude-Web/i, name: 'Claude-Web', family: 'Anthropic' },

  // Perplexity
  { pattern: /PerplexityBot/i, name: 'PerplexityBot', family: 'Perplexity' },

  // Google
  { pattern: /Google-Extended/i, name: 'Google-Extended', family: 'Google' },
  { pattern: /Googlebot-Image/i, name: 'Googlebot-Image', family: 'Google' },
  { pattern: /Googlebot-Mobile/i, name: 'Googlebot-Mobile', family: 'Google' },
  { pattern: /Googlebot/i, name: 'Googlebot', family: 'Google' },
  { pattern: /Mediapartners-Google/i, name: 'Mediapartners-Google', family: 'Google' },
  { pattern: /AdsBot-Google/i, name: 'AdsBot-Google', family: 'Google' },

  // Microsoft / Bing
  { pattern: /bingbot/i, name: 'bingbot', family: 'Microsoft' },
  { pattern: /BingPreview/i, name: 'BingPreview', family: 'Microsoft' },
  { pattern: /msnbot/i, name: 'msnbot', family: 'Microsoft' },

  // Meta
  { pattern: /Meta-ExternalAgent/i, name: 'Meta-ExternalAgent', family: 'Meta' },
  { pattern: /FacebookBot/i, name: 'FacebookBot', family: 'Meta' },
  { pattern: /facebookexternalhit/i, name: 'facebookexternalhit', family: 'Meta' },

  // ByteDance
  { pattern: /Bytespider/i, name: 'Bytespider', family: 'ByteDance' },

  // Cohere
  { pattern: /cohere-ai/i, name: 'cohere-ai', family: 'Cohere' },

  // Apple
  { pattern: /Applebot-Extended/i, name: 'Applebot-Extended', family: 'Apple' },
  { pattern: /Applebot/i, name: 'Applebot', family: 'Apple' },

  // DuckDuckGo
  { pattern: /DuckDuckBot/i, name: 'DuckDuckBot', family: 'DuckDuckGo' },

  // Amazon
  { pattern: /Amazonbot/i, name: 'Amazonbot', family: 'Amazon' },

  // CommonCrawl
  { pattern: /CCBot/i, name: 'CCBot', family: 'CommonCrawl' },

  // Yandex
  { pattern: /YandexBot/i, name: 'YandexBot', family: 'Yandex' },

  // Baidu
  { pattern: /Baiduspider/i, name: 'Baiduspider', family: 'Baidu' },

  // Social and previews
  { pattern: /Twitterbot/i, name: 'Twitterbot', family: 'Twitter' },
  { pattern: /LinkedInBot/i, name: 'LinkedInBot', family: 'LinkedIn' },
  { pattern: /Slackbot/i, name: 'Slackbot', family: 'Slack' },
  { pattern: /Discordbot/i, name: 'Discordbot', family: 'Discord' },
  { pattern: /TelegramBot/i, name: 'TelegramBot', family: 'Telegram' },
  { pattern: /WhatsApp/i, name: 'WhatsApp', family: 'WhatsApp' },
  { pattern: /Pinterestbot/i, name: 'Pinterestbot', family: 'Pinterest' },
];

/**
 * Detects whether an incoming User-Agent string corresponds to a known AI crawler or web bot.
 */
export function detectCrawler(userAgent: string | undefined): CrawlerDetectionResult {
  if (!userAgent || typeof userAgent !== 'string') {
    return { isCrawler: false, crawlerName: null, crawlerFamily: null };
  }

  for (const rule of CRAWLER_RULES) {
    if (rule.pattern.test(userAgent)) {
      return {
        isCrawler: true,
        crawlerName: rule.name,
        crawlerFamily: rule.family,
      };
    }
  }

  // Generic fallback if user-agent explicitly mentions bot/crawler/spider
  if (/(bot|crawler|spider|slurp|archiver)/i.test(userAgent)) {
    return {
      isCrawler: true,
      crawlerName: 'generic-crawler',
      crawlerFamily: 'Other',
    };
  }

  return { isCrawler: false, crawlerName: null, crawlerFamily: null };
}
