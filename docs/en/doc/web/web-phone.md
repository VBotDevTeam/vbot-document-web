---
outline: deep
---

# VBot Web Plugin

VBot Web Plugin is built using HTML, CSS, and JavaScript, including a dial pad interface, call screen, and call history list.

## Guide to Integrate VBotWebPlugin into Your Website

Add the following code right below the `<body>` tag in your HTML page:

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

### Configuration

- **top:** Distance (px) from the top edge of the page, similar to CSS `top`.
- **bottom:** Distance (px) from the bottom edge of the page, similar to CSS `bottom`.
- **right:** Distance (px) from the right edge of the page, similar to CSS `right`.
- **left:** Distance (px) from the left edge of the page, similar to CSS `left`.
- **access_token:** SDK account token. Please contact VBot support for instructions on registering an SDK account and obtaining a token.

You can customize the position of the dial pad on your web interface by adjusting the values of `top`, `bottom`, `left`, and `right`, then calling `VBotWebCall.init(setting)` to pass them into the plugin. If an undefined value is provided, `top` and `left` will take priority by default.

## Usage

- After integrating VBot Web Plugin, rebuild your project (or press `Ctrl + F5`) to reload the source code on your website.
- The Call icon will appear on the web page according to the initial position you set. Click to open the dial pad, select a hotline, and start dialing.
- If you do not have a hotline, please contact VBot support for instructions on purchasing and assigning a hotline to your SDK account.
