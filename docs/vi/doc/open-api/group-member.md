---
outline: deep
---

# Quản lý nhóm thành viên

API quản lý nhóm thành viên.

## Thêm nhóm thành viên

API thêm nhóm thành viên

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/groupmember/create</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id           | String | VBotID khách hàng     | Bắt buộc |
|-------------------|--------|-----------------------|----------|
| project_code      | String | Mã nhóm               | Bắt buộc |
| group_no          | String | Mã nhóm thành viên    | Bắt buộc |
| group_name        | String | Tên nhóm thành viên   | Bắt buộc |
| group_ext_number  | Int    | Mã nhánh              | Bắt buộc |
| description       | String | Mô tả                 | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "group_no": "sample string 3",
    "group_name": "sample string 4",
    "description": "sample string 5",
    "group_ext_number": 6
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã nhóm thành viên                        |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "success",
    "data": "group_no"
}
```

## Sửa nhóm thành viên

API sửa nhóm thành viên

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/groupmember/update</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id           | String | VBotID khách hàng     | Bắt buộc |
|-------------------|--------|-----------------------|----------|
| project_code      | String | Mã nhóm               | Bắt buộc |
| group_no          | String | Mã nhóm thành viên    | Bắt buộc |
| group_name        | String | Tên nhóm thành viên   | Bắt buộc |
| group_ext_number  | Int    | Mã nhánh              | Bắt buộc |
| description       | String | Mô tả                 | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "group_no": "sample string 3",
    "group_name": "sample string 4",
    "description": "sample string 5",
    "group_ext_number": 6
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã nhóm thành viên                        |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "success",
    "data": "group_no"
}
```

## Sửa mã nhóm thành viên

API sửa mã nhóm thành viên

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/groupmember/updateNo</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id       | String | VBotID khách hàng      | Bắt buộc |
|---------------|--------|------------------------|----------|
| project_code  | String | Mã nhóm                | Bắt buộc |
| group_no      | String | Mã nhóm thành viên cũ  | Bắt buộc |
| group_no_new  | String | Mã nhóm thành viên mới | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "group_no": "sample string 3",
    "group_no_new": "sample string 4"
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
    "data": "group_no"
}
```

## Sửa mã nhánh nhóm thành viên

API sửa mã nhánh nhóm thành viên

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/groupmember/updateextnumber</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id           | String | VBotID khách hàng           | Bắt buộc |
|-------------------|--------|-----------------------------|----------|
| project_code      | String | Mã nhóm                     | Bắt buộc |
| group_no          | String | Mã nhóm thành viên cũ       | Bắt buộc |
| group_ext_number  | Int    | Mã nhánh nhóm thành viên    | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "group_no": "sample string 3",
    "group_ext_number": 444
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
    "data": "group-ext"
}
```

## Xóa nhóm thành viên

API xóa nhóm thành viên

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/groupmember/delete</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request 

| vbot_id      | String | VBotID khách hàng      | Bắt buộc |
|--------------|--------|------------------------|----------|
| project_code | String | Mã nhóm                | Bắt buộc |
| group_no     | String | Mã nhóm thành viên cũ  | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "group_no": "sample string 3"
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
    "message": "sample string 3",
    "data": true
}
```

## Thêm thành viên vào nhóm thành viên

API thêm thành viên vào nhóm thành viên

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/groupmember/member/add</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id      | String | VBotID khách hàng                        | Bắt buộc |
|--------------|--------|------------------------------------------|----------|
| project_code | String | Mã nhóm                                  | Bắt buộc |
| group_no     | String | Mã nhóm thành viên cũ                    | Bắt buộc |
| member_no    | Array  | Danh sách thành viên thêm vào nhóm       | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "group_no": "sample string 3",
    "member_no": [
        "sample string 1", 
        "sample string 2"
    ]
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

## Xóa thành viên khỏi nhóm thành viên

API thêm thành viên vào nhóm thành viên

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/groupmember/member/delete</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id      | String | VBotID khách hàng                        | Bắt buộc |
|--------------|--------|------------------------------------------|----------|
| project_code | String | Mã nhóm                                  | Bắt buộc |
| group_no     | String | Mã nhóm thành viên cũ                    | Bắt buộc |
| member_no    | Array  | Danh sách thành viên thêm vào nhóm       | Bắt buộc |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "group_no": "sample string 3",
    "member_no": [
        "sample string 1", 
        "sample string 2"
    ]
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