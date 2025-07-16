---
outline: deep
---

# VBot Web Plugin

VBot Web Plugin được xây dựng theo ngôn ngữ HTML CSS và Javascript, bao gồm giao diện bàn phím quay số, màn hình cuộc gọi và danh sách lịch sử cuộc gọi.

## Hướng dẫn tích hợp VBotWebPlugin vào trang Web

Thêm đoạn code sau ngay phía dưới thẻ trong trang Html của bạn:

```HTML
<script type="module">
    import {VBotWebCall} from "https://plugin.vbot.vn/v1.0/vbot-web-plugin.js";
    var setting = {

        // top: 0,
        // left: 0,
        right:0,
        bottom:0,
        access_token: ‘YOUR ACCESS TOKEN’
    };

    VBotWebCall.init(setting);

</script>
```

Cấu hình

- **top:** Khoảng cách (px) tới lề trên của page, tương tự top của CSS
- **bottom:** Khoảng cách (px) tới lề dưới của page, tương tự bottom của CSS
- **right:** Khoảng cách (px) tới lề phải của page, tương tự right của CSS
- **left:** Khoảng cách (px) tới lề trái của page, tương tự left của CSS
- **access_token:** Token của tài khoản SDK, vui liên hệ hỗ trợ VBot để được hướng dẫn đăng ký tài khoản SDK và lấy token

Có thể tùy chỉnh vị trí bàn phím số trên giao diện web của bạn bằng cách chỉnh giá trị các tham số top, bottom, left, right sau đó gọi hàm VBotWebCall.init(setting) để truyền vào plugin. Nếu giá trị nhập vào không xác định thì mặc định sẽ ưu tiên chỉ số top và left.

## Sử dụng

- Sau khi tích hợp VBot Web Plugin, bạn Build lại (hoặc bấm tổ hợp phím Ctrl + F5) để tải lại Source cho trang Web của bạn.
- Biểu tượng Call sẽ xuất hiện trên trang web tùy theo vị trí bạn đã thiết lập ban đầu, bấm để mở bàn phím, chọn hotline và bắt đầu quay số.
- Nếu bạn chưa có hotline, vui lòng liên hệ với bộ phận hỗ trợ VBot để được hướng dẫn mua và phân quyền hotline cho tài khoản SDK.
