export const GA_TRACKING_ID = 'G-9RLLFDFCEB'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Specific conversion events for Taskible sales funnel
export const trackCalculatorUsage = () => {
  event({
    action: 'calculator_interaction',
    category: 'engagement',
    label: 'savings_calculator_used',
    value: 100
  })
}

export const trackCalendlyClick = () => {
  event({
    action: 'calendly_clicked',
    category: 'conversion',
    label: 'consultation_booking_attempt',
    value: 500
  })
}

export const trackConsultationBooked = () => {
  event({
    action: 'consultation_booked',
    category: 'conversion',
    label: 'lead_generated',
    value: 2000
  })
}

export const trackPhoneCall = () => {
  event({
    action: 'phone_call_started',
    category: 'conversion',
    label: 'direct_contact',
    value: 1000
  })
}

export const trackEmailClick = () => {
  event({
    action: 'email_clicked',
    category: 'engagement',
    label: 'email_contact',
    value: 200
  })
}