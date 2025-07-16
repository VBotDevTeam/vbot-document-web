export default {
  label: 'English',
  lang: 'en',
  themeConfig: {
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Documentation', link: '/en/doc/open-api/introduction' },
    ],
    sidebar: [
      {
        text: 'Open API',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/en/doc/open-api/introduction' },
          { text: 'Webhooks', link: '/en/doc/open-api/webhooks' }, 
          { text: 'Authentication', link: '/en/doc/open-api/authentication' },
          { text: 'Customers', link: '/en/doc/open-api/customers' },
          { text: 'Members', link: '/en/doc/open-api/member' },
          { text: 'Member Groups', link: '/en/doc/open-api/group-member' },
          { text: 'Hotline', link: '/en/doc/open-api/hotline' },
          { text: 'Call History', link: '/en/doc/open-api/call-transaction' },
          { text: 'Auto Call', link: '/en/doc/open-api/autocall' }
        ]
      },  
      {
        text: 'Web',
        collapsed: false,
        items: [
          { text: 'Web SDK', link: '/en/doc/web/web-sdk' },
          { text: 'Web Plugin', link: '/en/doc/web/web-phone' }
        ]
      },  
      {
        text: 'Android SDK',
        collapsed: false,
        items: [
          { text: 'SDK Configuration', link: '/en/doc/android-sdk/cau-hinh-sdk' },
          { text: 'Push Notification', link: '/en/doc/android-sdk/push-notification' },
          { text: 'SDK Initialization', link: '/en/doc/android-sdk/khoi-tao-sdk' },
          { text: 'User Guide', link: '/en/doc/android-sdk/huong-dan-su-dung' }
        ]
      },  
      {
        text: 'iOS SDK',
        collapsed: false,
        items: [
          { text: 'Push Notification', link: '/en/doc/ios-sdk/push-notification' },
          { text: 'SDK Configuration', link: '/en/doc/ios-sdk/cau-hinh-sdk' },
          { text: 'User Guide', link: '/en/doc/ios-sdk/huong-dan-su-dung' }
        ]
      }
    ],
    outlineTitle: 'Index'
  }
};
