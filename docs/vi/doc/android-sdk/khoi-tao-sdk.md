---
outline: deep
---

# Khởi tạo SDK

Hướng dẫn khởi tạo VBot SDK trong project Android.

## Kết nối

```KOTLIN
// Khởi tạo VBotClient
lateinit var client: VBotPhone
client = VBotPhone.setup(context)

// Connect VBotClient
client.connect(token, tokenFirebase)

```

## Ngắt kết nối

```KOTLIN
client.disconnect(
    onSuccess = {
        // disconnect successfull
    },
    onFailure = { code, message ->
        // disconnect failure
    }
)
```
