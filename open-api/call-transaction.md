---
outline: deep
--- 

# Quản lý lịch sử cuộc gọi

API quản lý lịch sử cuộc gọi.

## Lấy danh sách lịch sử cuộc gọi

API lấy danh sách lịch sử cuộc gọi

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/crm/historycall/getAll</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id      | String | VBotID khách hàng      | Bắt buộc |
|--------------|--------|------------------------|----------|
| project_code | String | Mã nhóm                | Bắt buộc |
| phone        | String | Số điện thoại          | Bắt buộc |
| page         | Int    | Số trang               | Bắt buộc |
| size         | Int    | Số lượng trên 1 trang  | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "phone": "sample string 3",
    "page": 1,
    "size": 10
}
``` 
### Response

| status         | String      | Mã trạng thái, 1: Thành công, 0: Thất bại |
|----------------|-------------|-------------------------------------------|
| data           | String      | Danh sách lịch sử cuộc gọi                |
| hotline_number | String      | Hotline                                   |
| date_create    | String      | Thời gian gọi                             |
| time_call      | String      | Thời gian cuộc gọi                        |
| type_call      | String      | CALLIN, CALLOUT, MISSCALL                 |
| caller         | String      | Danh sách người gọi                       |
| callee         | String      | Danh sách người nghe                      |
| postage        | String      | Chi phí cuộc gọi                          |
| source         | String      | Được gọi từ đâu                           |
| event_data     | String      | Kiểu dữ liệu                              |
| disposition    | String      | MORE: Nhiều trạng thái khác của cuộc gọi, MISSCALL: Cuộc gọi nhỡ, ANSWER: Nghe máy, BUSY: Người nhận bận, NOANSWER: Người nhận không trả lời, CANCEL: Người gọi hủy cuộc gọi, SOMEONEANSWERED: Đã có người khác nghe máy, LOGOUT: Đang trong trạng thái Logout, INCALL: Đang trong cuộc gọi khác, CONGESTION, CHANUNAVAIL, DONTCALL, TORTURE, INVALIDARGS, NORMAL_CLEARING: Lỗi cuộc gọi              |
| record_file    | String      | File ghi âm                               |
| message        | String      | Thông tin lỗi                             |
| error          | Int         | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "sample string 3",
    "data": [
        {
            "hotline_number": "sample string 1",
            "date_create": "10/25/2023 10:34:15",
            "caller": [
                {
                    "phone": "sample string 1",
                    "vbot_id": "sample string 2",
                    "date_create": "10/25/2023 10:34:15",
                    "disposition": "sample string 4",
                    "time_call": "sample string 5",
                    "postage": 6.1,
                    "source": "sample string 7",
                    "member_no": "sample string 8"
                }
            ],
            "callee": [
                {
                    "phone": "sample string 1",
                    "vbot_id": "sample string 2",
                    "date_create": "10/25/2023 10:34:15",
                    "disposition": "sample string 4",
                    "time_call": "sample string 5",
                    "postage": 6.1,
                    "source": "sample string 7",
                    "member_no": "sample string 8"
                }
            ],
            "time_call": "sample string 3",
            "type_call": "sample string 4",
            "disposition": "sample string 5",
            "record_file": ["sample string 1", "sample string 2"]
    }
  ]
}
```

## Lấy số lượng cuộc gọi

Lấy số lượng cuộc gọi

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/crm/historycall/getAll</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id      | String | VBotID khách hàng      | Bắt buộc |
|--------------|--------|------------------------|----------|
| project_code | String | Mã nhóm                | Bắt buộc |
| phone        | String | Số điện thoại          | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "phone": "sample string 3"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | Int    | Số lượng cuộc gọi                         |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "sample string 3",
    "data": 4
}
```