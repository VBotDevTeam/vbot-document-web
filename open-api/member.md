---
outline: deep
---

# Quản lý thành viên

API quản lý thành viên.

## Lấy danh sách thành viên

API lấy danh sách thành viên

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/getAll</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id      | String | VBotID khách hàng     | Bắt buộc |
|--------------|--------|-----------------------|----------|
| project_code | String | Mã nhóm               | Bắt buộc |
| page         | Int    | Số trang              | Bắt buộc |
| size         | Int    | Số lượng trên 1 trang | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "page": 1,
    "size": 10
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Danh sách thành viên                      |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "sample string 3",
    "data": [
        {
            "member_name": "sample string 1",
            "member_type": 2,
            "member_color": "sample string 3",
            "member_ext_number": 4,
            "member_no": "sample string 5",
            "member_status": 6,
            "member_money": 7.1,
            "expiration_date": "sample string 8"
        }
    ]
}
```
## Lấy số lượng thành viên

Lấy số lượng thành viên

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/countAll</span>
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

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | Int    | Số lượng thành viên                     |
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

## Thêm tài khoản SDK

API thêm tài khoản SDK

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/sdk/create</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id           | String | VBotID khách hàng     | Bắt buộc   |
|-------------------|--------|-----------------------|------------|
| project_code      | String | Mã nhóm               | Bắt buộc   |
| member_no         | String | Mã thành viên         | Bắt buộc   |
| member_name       | Int    | Tên thành viên        | Bắt buộc   |
| member_email      | Int    | Email thành viên      |            |
| member_phone      | Int    | Số điện thoại         |            |
| member_ext_number | Int    | Mã nhánh              | Bắt buộc (99) |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_name": "sample string 3",
    "member_phone": "sample string 4",
    "member_email": "sample string 5",
    "member_no": "sample string 6",
    "member_ext_number": 7
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã thành viên                             |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "member_no"
}
```

## Sửa tài khoản SDK

API sửa tài khoản SDK

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/sdk/create</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id           | String | VBotID khách hàng     | Bắt buộc   |
|-------------------|--------|-----------------------|------------|
| project_code      | String | Mã nhóm               | Bắt buộc   |
| member_no         | String | Mã thành viên         | Bắt buộc   |
| member_name       | Int    | Tên thành viên        | Bắt buộc   |
| member_email      | Int    | Email thành viên      |            |
| member_phone      | Int    | Số điện thoại         |            |
| member_ext_number | Int    | Mã nhánh              | Bắt buộc (99) |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_name": "sample string 3",
    "member_phone": "sample string 4",
    "member_email": "sample string 5",
    "member_no": "sample string 6",
    "member_ext_number": 7
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã thành viên                             |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "member_no"
}
```
## Lấy token SDK

API lấy token SDK

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/sdk/getToken</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| project_code | String | Mã nhóm       | Bắt buộc |
|--------------|--------|---------------|----------|
| member_no    | String | Mã thành viên | Bắt buộc |

``` JSON
{
    "project_code": "sample string 2",
    "member_no": "sample string 3"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Token SDK                                 |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "sample string 3",
    "data": "sample string 4"
}
```
## Thêm tài khoản thiết bị

API thêm tài khoản thiết bị

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/sip/create</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id           | String | VBotID khách hàng     | Bắt buộc   |
|-------------------|--------|-----------------------|------------|
| project_code      | String | Mã nhóm               | Bắt buộc   |
| member_no         | String | Mã thành viên         | Bắt buộc   |
| member_name       | Int    | Tên thành viên        | Bắt buộc   |
| member_username   | Int    | Tài khoản             | Bắt buộc   |
| member_password   | Int    | Mật khẩu              | Bắt buộc   |
| member_email      | Int    | Email thành viên      |            |
| member_phone      | Int    | Số điện thoại         |            |
| member_ext_number | Int    | Mã nhánh              | Bắt buộc (99) |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_name": "sample string 3",
    "member_username": "sample string 4",
    "member_password": "sample string 5",
    "member_phone": "sample string 6",
    "member_email": "sample string 7",
    "member_no": "sample string 8",
    "type_account": "sample string 9",
    "member_ext_number": 10
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã thành viên                             |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "member_no"
}
```
## Lấy thông tin đăng nhập tài khoản thiết bị

API lấy thông tin đăng nhập tài khoản thiết bị

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/sip/info</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id      | String | VBotID khách hàng     | Bắt buộc |
|--------------|--------|-----------------------|----------|
| project_code | String | Mã nhóm               | Bắt buộc |
| member_no    | String | Mã thành viên         | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_no": "sample string 3"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Thông tin đăng nhập                       |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "sample string 3",
    "data": {
        "username": "sample string 1",
        "domain": "sample string 2",
        "port": "sample string 3"
    }
}
```
## Sửa tài khoản thiết bị

API sửa tài khoản thiết bị

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/sip/update</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id           | String | VBotID khách hàng     | Bắt buộc   |
|-------------------|--------|-----------------------|------------|
| project_code      | String | Mã nhóm               | Bắt buộc   |
| member_no         | String | Mã thành viên         | Bắt buộc   |
| member_name       | Int    | Tên thành viên        | Bắt buộc   |
| member_email      | Int    | Email thành viên      |            |
| member_phone      | Int    | Số điện thoại         |            |
| member_ext_number | Int    | Mã nhánh              | Bắt buộc (99) |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_name": "sample string 3",
    "member_phone": "sample string 6",
    "member_email": "sample string 7",
    "member_no": "sample string 8",
    "type_account": "sample string 9",
    "member_ext_number": 10
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã thành viên                             |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "member_no"
}
```
## Sửa mật khẩu tài khoản thiết bị

API sửa mật khẩu tài khoản thiết bị

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/sip/updatePassword</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id             | String | VBotID khách hàng     | Bắt buộc |
|---------------------|--------|------------------------|----------|
| project_code        | String | Mã nhóm               | Bắt buộc |
| member_no           | String | Mã thành viên          | Bắt buộc |
| member_password_old | String | Mật khẩu cũ           | Bắt buộc |
| member_password_new | String | Mật khẩu mới          | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_no": "sample string 3",
    "member_password_old": "sample string 4",
    "member_password_new": "sample string 5"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã thành viên                             |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "member_no"
}
```
## Sửa mã thành viên

API sửa mã thành viên

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/updateNo</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id       | String | VBotID khách hàng     | Bắt buộc |
|---------------|--------|-----------------------|----------|
| project_code  | String | Mã nhóm               | Bắt buộc |
| member_no     | String | Mã thành viên cũ      | Bắt buộc |
| member_no_new | String | Mã thành viên mới     | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_no": "sample string 3",
    "member_no_new": "sample string 4"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã thành viênn                            |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "member_no"
}
```
## Sửa nhánh thành viên

API sửa nhánh thành viên

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/updateExtNumber</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id               | String | VBotID khách hàng     | Bắt buộc |
|-----------------------|--------|-----------------------|----------|
| project_code          | String | Mã nhóm               | Bắt buộc |
| member_no             | String | Mã thành viên         | Bắt buộc |
| simember_ext_numberze | String | Nhánh thành viên      | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_no": "sample string 3",
    "member_ext_number": 123
}
``` 
### Response
``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "member_no"
}
```

## Thêm tiền cho thành viên

API thêm cho tiền thành viên

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/addMoney</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id      | String | VBotID khách hàng                  | Bắt buộc |
|--------------|--------|------------------------------------|----------|
| project_code | String | Mã nhóm                            | Bắt buộc |
| member_no    | String | Mã thành viên                      | Bắt buộc |
| money        | Double | Số tiền, thêm "-" nếu là trừ tiền  | Bắt buộc |

``` JSON    
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_no": "sample string 3",
    "money": 12.3
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã thành viên                             |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
  "status": 1,
  "error": 0,
  "message": "success",
  "data": "sample string 3"
}
```

## Xóa thành viên

API xóa thành viên

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/member/delete</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id      | String | VBotID khách hàng     | Bắt buộc |
|--------------|--------|-----------------------|----------|
| project_code | String | Mã nhóm               | Bắt buộc |
| member_no    | String | Mã thành viên         | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_no": "sample string 3"}
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