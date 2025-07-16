---
outline: deep
---

# Hướng dẫn sử dụng

Hướng dẫn sử dụng VBot iOS SDK.

## Cấu hình dự án

### Bật Voip trong dự án Xcode

Chọn **Xcode Project → Capabilities**

Thêm **Background Modes** và **Push Notifications**

Ở **Background Modes,** Bật **Audio, AirPlay, and Picture in Picture |** **Voice over IP | Background Fetch | Remote Notifications**

Mở tệp **info.plist** và thêm key sau

```swift
<key>NSMicrophoneUsageDescription</key>
<string>Microphone access is necessary to be able to make calls.</string>
```

Lưu ý:

Khi khởi chạy dự án mà Xcode trả về lỗi

“Sandbox: rsync.samba (13105) deny(1) file-write-create”

Thực hiện chỉnh sửa sau:

Trong **Build Settings**, tìm **User Script Sandboxing**: Chọn **No**

## Sử dụng SDK

### Khởi tạo

File **AppDelegate.swift**

1. Trong hàm **application didFinishLaunchingWithOptions**, gọi hàm khởi tạo VBotPhone

```swift
let config = VBotConfig(
            iconTemplateImageData: UIImage(named: "callkit-icon")?.pngData())

VBotPhone.sharedInstance.setup(with: config)
```

Trong đó:

- **config** là cấu hình tùy chọn cho SDK

### Connect SDK

```SWIFT
VBotPhone.sharedInstance.connect(token: token) { displayName, error in
	if let error = error as NSError? {
		// login error
		return
	}
    // login successful
}
```

Trong đó:

- **token**: Token SDK của tài khoản VBot <br>
- **displayName**: Tên của tài khoản <br>
- **error**: Lỗi trả về khi đăng nhập không thành công

### Disconnect SDK

```SWIFT
VBotPhone.sharedInstance.disconnect { error in
	if let error = error as NSError? {
		// logout error
		return
	}
	 // logout error
}
```

### Lấy danh sách hotline

```SWIFT
VBotPhone.sharedInstance.getHotlines { hotlines, error in
	if error != nil {
		// get hotline error
		return
	}
	// get hotline successful
}
```

### Gọi đi

```SWIFT
VBotPhone.sharedInstance.startOutgoingCall(name: name, number: phoneNumber, hotline: hotline) { [weak self] resultAPI in
	guard let self = self else { return }
	switch resultAPI {
	case .success():
		// start call successful
    case .failure(let error):
		// start call error
		return
	}
}
```

### Gọi đến

Luồng cuộc gọi đến sẽ do SDK xử lý

### Gác máy

```SWIFT
// Tắt call
VBotPhone.sharedInstance.endCall { error in
	if let error = error as NSError? {
		return
	}
}
```

### Các hành động khác trong cuộc gọi

```SWIFT
// Bật tắt mic
VBotPhone.sharedInstance.muteCall()

// Bật tắt loa ngoài
VBotPhone.sharedInstance.onOffSpeaker()
```

## Lắng nghe các sự kiện

**Sử dụng Protocol delegate**

Đăng ký nhận sự kiện VBot:

```swift
  // Đăng ký nhận sự kiện cuộc gọi
  VBotPhone.sharedInstance.addDelegate(self)

  // Hủy đăng ký
   deinit {
       VBotPhone.sharedInstance.removeDelegate(self)
   }
```

Các delegate method bao gồm

```swift
protocol VBotPhoneDelegate {

    // Trạng thái cuộc gọi thay đổi
    func callStateChanged(state: VBotCallState)

    // Cuộc gọi đi đã bắt đầu
    func callStarted()

    // Cuộc gọi đến được chấp nhận (Khi user chọn chấp nhận cuộc gọi)
    func callAccepted()

    // Cuộc gọi kết thúc, cùng nguyên nhân
    func callEnded(reason: VBotEndCallReason)

    // Lấy quyền microphone
    func microphonePermission(status: AVAudioSession.RecordPermission)

    // Trạng thái Microphone thay đổi
    func callMuteStateDidChange(muted: Bool)


}
```

---

## Xem thêm

### VBotEndCallReason và VBotError

```
    // Timeout
    case timeOut = -1001

    // Khởi tạo không thành công
    case initiationFailed = 1001

    case initiationFailed_1 = 1002

    // Chưa cấp truyền mic
    case microphonePermissionDenied = 1003

    case invalidPhoneNumber = 1004

    // Không có dữ liệu từ máy chủ
    case noDataFromServer = 1005

    case initiationFailed_2 = 1006

    case initiationFailed_3 = 1007

    // Dữ liệu không hợp lệ
    case dataInvalid = 1008

    case initiationFailed_4 = 1009

    // Xác thực thất bại
    case authenticatedFailed = 1010

    // Đang có cuộc gọi khác
    case anotherCallInProgress = 1011

    // Cuộc gọi kết thúc
    case normal = 1012

    // Từ chối cuộc gọi
    case decline = 1013

    // Không liên lạc được
    case temporarilyUnavailable = 1014

    // Máy bận
    case busy = 1015

    // reportNewIncomingCall lỗi
    case reportNewIncomingCallFailed = 1016

    // Lỗi chưa xác định
    case unknownError = 1999
```
