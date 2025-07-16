---
outline: deep
---

# Gọi tự động

API gọi tự động.

## VBot cung cấp

### Tạo chiến dịch gọi tự động

API khởi tạo campaign với mẫu campaign đã tạo trước đó và thực hiện chạy campaign

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/campaign/create</span>
</div>

### Header

| Content-Type  | application/json      |
|---------------|-----------------------|
| Authorization | Access token: Bearer  |

### Request

| vbot_id      | String | VBotID khách hàng         | Bắt buộc |
|--------------|--------|---------------------------|----------|
| project_code | String | Mã nhóm                   | Bắt buộc |
| campaignID   | String | ID campaign mẫu           | Bắt buộc |
| name         | String | Tên chiến dịch mới        | Bắt buộc |
| phones       | List   | Danh sách dữ liệu         | Bắt buộc |
| fields       | List   | Danh sách trường dữ liệu  | Bắt buộc |
| key          | Int    | Tên trường dữ liệu        | Bắt buộc |
| value        | String | Giá trị                   | Bắt buộc |

``` JSON
{
    "vbotId": "44634xxxx",
    "groupCode": "PR20230307144xxxxx",
    "campaignId": 2932,
    "name": "campaign_name_new",
    "phones": [
        {
            "fields": [
                {
                    "key": "phone",
                    "value": "0366255xxx"
                },
                {
                    "key": "name",
                    "value": "Nguyễn Văn x"
                }
            ]
        }
    ]
}   
```

### Key

| phone       | String      | Số điện thoại      |
|-------------|-------------|--------------------|
| description | String      | Mô tả              |
| numberCall  | Int         | Số lần gọi         |
| [FIELD]     | [String]    | Các trường thông tin khác được thêm trong Campaign Field được cấu hình trong kịch bản campaign (Campaign Template) |

### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Id campaign, thất bại trả về "-1"         |
| msg     | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

```JSON
{
    "status": 1,
    "error": 2,
    "msg": "success",
    "data": 1
}
```

### Status code

| 200 | Thành công |
|-----|------------|
| 500 | Lỗi        |

### Error code

| 0   | Thành công            |
|-----|-----------------------|
| 201 | Tham số không hợp lệ  |
| 400 | Lỗi                   |

## Khách hàng cung cấp

Khách hàng cần cung cấp cho VBot một API Webhook với phương thức POST để đón nhận lịch sử cuộc gọi khi có phát sinh gồm các thông tin sau

### Lịch sử cuộc gọi

#### Request

| status       | String      | Mã trạng thái, 1: Thành công, 0: Thất bại |
|--------------|-------------|-------------------------------------------|
| data         | String      | Danh sách lịch sử cuộc gọi                |
| hotline_number | String    | Hotline                                   |
| date_create  | String      | Thời gian gọi                             |
| time_call    | String      | Thời gian cuộc gọi                        |
| type_call    | String      | CALLIN, CALLOUT, MISSCALL                 |
| caller       | String      | Danh sách người gọi                       |
| callee       | String      | Danh sách người nghe                      |
| postage      | String      | Chi phí cuộc gọi                          |
| source       | String      | Được gọi từ đâu                           |
| event_data   | String      | Kiểu dữ liệu                              |
| disposition  | String      | MORE: Nhiều trạng thái khác của cuộc gọi, MISSCALL: Cuộc gọi nhỡ, ANSWER: Nghe máy, BUSY: Người nhận bận, NOANSWER: Người nhận không trả lời, CANCEL: Người gọi hủy cuộc gọi, SOMEONEANSWERED: Đã có người khác nghe máy, LOGOUT: Đang trong trạng thái Logout, INCALL: Đang trong cuộc gọi khác, CONGESTION, CHANUNAVAIL, DONTCALL, TORTURE, INVALIDARGS, NORMAL_CLEARING: Lỗi cuộc gọi |
| record_file  | String      | File ghi âm                               |
| message      | String      | Thông tin lỗi                             |
| error        | Int         | Mã lỗi                                    |

### Lịch sử cuộc gọi tự động

#### Request

| campaign_id    | Int         | Id campaign         |
|----------------|-------------|---------------------|
| create_at      | String      | Thời gian gọi       |
| hotline        | String      | Hotline             |
| phone          | String      | Số điện thoại       |
| name           | String      | Tên khách           |
| description    | String      | Mô tả               |
| status         | Int         | Trạng thái cuộc gọi |
| time_call      | Int         | Thời gian cuộc gọi  |
| postage        | Double      | Chi phí cuộc gọi    |
| service_charge | Double      | Chi phí dịch vụ     |
| action_log     | String      | Nhật ký thao tác    |
| event_data     | String      | Kiểu dữ liệu        |


#### Status

| 100, -100, 104 | Lỗi hệ thống, Lỗi không xác định                           |
|---------------|-------------------------------------------------------------|
| 101           | Số điện thoại không xác định                                |
| 102           | Không tìm thấy hotline cho thuộc nhà mạng của số điện thoại |
| 103           | Tài khoản không đủ tiền                                     |
| 105           | Gói VBot hết hạn hoặc chưa đăng ký                          |
| 106           | Không hỗ trợ nhà mạng của số điện thoại                     |
| 200           | ANSWER                                                      |
| 2             | NO_ANSWER                                                   |
| 3             | BUSY                                                        |
| 4             | CANCEL                                                      |
