import { defineConfig } from "vitepress";
import vi from "./config/vi";
import en from "./config/en";

export default defineConfig({
  title: "VBot",
  description: "VBot tổng đài AI đa tính năng!",
  titleTemplate: "Document",
  head: [["link", { rel: "icon", type: "image/png", href: "/app-logo.png" }]],
  locales: {
    vi: {
      ...vi,
      title: "VBot Document",
    },
    en: {
      ...en,
      title: "VBot Document",
    },
  },
  themeConfig: {
    logo: "/app-logo.png",
    search: {
      provider: "local",
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search",
              },
              modal: {
                displayDetails: "Show detailed list",
                resetButtonTitle: "Reset search",
                backButtonTitle: "Close search",
                noResultsText: "No results found",
                footer: {
                  selectText: "Select",
                  selectKeyAriaLabel: "Enter",
                  navigateText: "Navigate",
                  navigateUpKeyAriaLabel: "Up arrow",
                  navigateDownKeyAriaLabel: "Down arrow",
                  closeText: "Close",
                  closeKeyAriaLabel: "Esc",
                },
              },
            },
          },
          vi: {
            translations: {
              button: {
                buttonText: "Tìm kiếm",
                buttonAriaLabel: "Tìm kiếm",
              },
              modal: {
                displayDetails: "Hiển thị danh sách chi tiết",
                resetButtonTitle: "Đặt lại tìm kiếm",
                backButtonTitle: "Đóng tìm kiếm",
                noResultsText: "Không có kết quả",
                footer: {
                  selectText: "Chọn",
                  selectKeyAriaLabel: "Nhập",
                  navigateText: "Điều hướng",
                  navigateUpKeyAriaLabel: "Mũi tên lên",
                  navigateDownKeyAriaLabel: "Mũi tên xuống",
                  closeText: "Đóng",
                  closeKeyAriaLabel: "Esc",
                },
              },
            },
          },
        },
      },
    },
  },
});
