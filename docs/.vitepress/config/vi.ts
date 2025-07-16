export default {
  label: 'Tiếng Việt',
  lang: 'vi',
  themeConfig: {
    docFooter: {
      prev: 'Trang trước',
      next: 'Trang tiếp theo'
    },
    nav: [
      { text: 'Trang Chủ', link: '/vi/' },
      { text: 'Tài Liệu', link: '/vi/doc/open-api/introduction' },
    ],
    sidebar: [
      {
        text: 'Open API',
        collapsed: false,
        items: [
          { text: 'Giới thiệu', link: '/vi/doc/open-api/introduction' },
          { text: 'Webhooks', link: '/vi/doc/open-api/webhooks' }, 
          { text: 'Xác thực', link: '/vi/doc/open-api/authentication' },
          { text: 'Khách hàng', link: '/vi/doc/open-api/customers' },
          { text: 'Thành viên', link: '/vi/doc/open-api/member' },
          { text: 'Nhóm thành viên', link: '/vi/doc/open-api/group-member' },
          { text: 'Hotline', link: '/vi/doc/open-api/hotline' },
          { text: 'Lịch sử cuộc gọi', link: '/vi/doc/open-api/call-transaction' },
          { text: 'Gọi tự động', link: '/vi/doc/open-api/autocall' }
        ]
      },  
      {
        text: 'Web',
        collapsed: false,
        items: [
          { text: 'Web SDK', link: '/vi/doc/web/web-sdk' },
          { text: 'Web Plugin', link: '/vi/doc/web/web-phone' }
        ]
      },  
      {
        text: 'Android SDK',
        collapsed: false,
        items: [
          { text: 'Cấu hình SDK', link: '/vi/doc/android-sdk/cau-hinh-sdk' },
          { text: 'Push Notification', link: '/vi/doc/android-sdk/push-notification' },
          { text: 'Khởi tạo SDK', link: '/vi/doc/android-sdk/khoi-tao-sdk' },
          { text: 'Hướng dẫn sử dụng', link: '/vi/doc/android-sdk/huong-dan-su-dung' }
        ]
      },  
      {
        text: 'iOS SDK',
        collapsed: false,
        items: [
          { text: 'Push Notification', link: '/vi/doc/ios-sdk/push-notification' },
          { text: 'Cấu hình SDK', link: '/vi/doc/ios-sdk/cau-hinh-sdk' },
          { text: 'Hướng dẫn sử dụng', link: '/vi/doc/ios-sdk/huong-dan-su-dung' }
        ]
      }
    ],
    outlineTitle: 'Mục lục'
  }
};
