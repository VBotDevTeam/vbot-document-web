# Quản lý hotline

API quản lý hotline.

## Lấy danh sách hotline

API lấy danh sách hotline

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/hotline/getAll</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id      | String | VBotID khách hàng     | Bắt buộc |
|--------------|--------|-----------------------|----------|
| project_code | String | Mã nhóm               | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2"
}
``` 
### Response

| status          | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|-----------------|--------|-------------------------------------------|
| data            | String | Mã nhóm thành viên                        |
| hotline_name    | String | Tên hotline                               |
| hotline_number  | String | Số hotline                                |
| message         | String | Thông tin lỗi                             |
| error           | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "sample string 3",
    "data": [
        {
        "hotline_name": "sample string 1",
        "hotline_number": "sample string 2"
        }
    ]
}
```

## Thêm hotline cho thành viên

API thêm hotline cho thành viên

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/hotline/member/add</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id        | String | VBotID khách hàng      | Bắt buộc |
|----------------|--------|------------------------|----------|
| project_code   | String | Mã nhóm                | Bắt buộc |
| member_no      | String | Mã thành viên          | Bắt buộc |
| hotline_number | String | Số hotline             | Bắt buộc |
| allow_call     | Bool   | Cho phép gọi           | Bắt buộc |
| start_time     | String | Thời gian bắt đầu      | Bắt buộc |
| end_time       | String | Thời gian kết thúc     | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_no": "sample string 3",
    "hotline_number": "sample string 4",
    "allow_call": true,
    "start_time": "sample string 6",
    "end_time": "sample string 7"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | Bool   | true                                      |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "success",
    "data": true
}
```

## Xóa hotline của thành viên

API xóa hotline của thành viên

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/hotline/member/delete</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id        | String | VBotID khách hàng      | Bắt buộc |
|----------------|--------|------------------------|----------|
| project_code   | String | Mã nhóm                | Bắt buộc |
| member_no      | String | Mã thành viên          | Bắt buộc |
| hotline_number | String | Số hotline             | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_no": "sample string 3",
    "hotline_number": "sample string 4"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | Bool   | true                                      |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": true
}
```