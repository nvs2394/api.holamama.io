module.exports = {
  FB_URL: 'https://graph.facebook.com/me?fields=id,email,name,age_range,birthday,picture.width(500).height(500),gender&access_token=',
  INVOICE_STATUS: {
    NEW: 'NEW',
    INPROCESS: 'INPROCESS',
    SHIPPING: 'SHIPPING',
    COMPLETED: 'COMPLETED'
  },
  PRODUCT_STATUS: {
    AVAILABLE: 'AVAILABLE',
    UN_AVAILABLE: 'UN_AVAILABLE'
  }
}
