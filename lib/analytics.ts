/* Google Analytics 4 event tracking helpers */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export function trackCallClick(source: string = 'unknown') {
  trackEvent('call_click', {
    event_category: 'Contact',
    event_label: source,
    value: 1,
  })
}

export function trackWhatsAppClick(source: string = 'unknown') {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: source,
    value: 1,
  })
}

export function trackSocialClick(platform: string) {
  trackEvent('social_click', {
    event_category: 'Social',
    event_label: platform,
  })
}
