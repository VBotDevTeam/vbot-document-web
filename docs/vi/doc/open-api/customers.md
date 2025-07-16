---
outline: deep
---

# Quản lý khách hàng

API quản lý khách hàng.

## Thêm khách hàng

API thêm khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/customer/create</span>
</div>


## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body
 
| vbot_id             | String       | VBotID khách hàng       | Bắt buộc |
|---------------------|--------------|-------------------------|----------|
| project_code        | String       | Mã nhóm                 | Bắt buộc |
| customer_no         | String       | Mã khách hàng           | Bắt buộc |
| customer_name       | String       | Tên khách hàng          | Bắt buộc |
| customer_phones     | List         | Danh sách số điện thoại | Bắt buộc |
| customer_address    | String       | Địa chỉ khách hàng      |          |
| customer_email      | String       | Email khách hàng        |          |
| customer_status_code| String       | Mã trạng thái           | Bắt buộc |
| customer_type_code  | String       | Mã loại                 | Bắt buộc |
| customer_group_name | String       | Tên nhóm                | Bắt buộc |
| fields              | List         | Mã khách hàng           |          |
| field_key           | String       | Mã trường thông tin khách |        |
| field_value         | String       | Giá trị thông tin khách |          |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "customer_name": "VPMEDIA",
    "customer_no": " VPMEDIA01",
    "customer_address": "163 Nguyễn Khang, Cầu Giấy, Hà Nội",
    "customer_email": "canh.dsa",
    "customer_phones": ["0365296xxx", "0965713xxx"],
    "customer_status_code": "MA_TRANG_THAI_KHACH_HANG",
    "customer_type_code": "MA_LOAI_KHACH_HANG",
    "customer_group_name": "Ten_nhom_khach_hang",
  "fileds": [
    {
      "field_key": "THONG_TIN_KHAC",
      "field_value": "giá trị của thông tin khác"
    }
  ]
}
``` 

### Response

| status     | String       | Mã trạng thái, 1: Thành công, 0: Thất bại |
|------------|--------------|-------------------------------------------|
| data       | String       | Mã khách hàng                             |
| message    | String       | Thông tin                                 |
| error      | Int          | Mã lỗi                                    |  

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_KHACH"
}
``` 

## Sửa khách hàng

API sửa thông tin khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/customer/update</span>
</div>


## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id             | String       | VBotID khách hàng      | Bắt buộc |
|---------------------|--------------|------------------------|----------|
| project_code        | String       | Mã nhóm                | Bắt buộc |
| customer_no         | String       | Mã khách hàng          | Bắt buộc |
| customer_name       | String       | Tên khách hàng         | Bắt buộc |
| customer_phones     | List         | Danh sách số điện thoại| Bắt buộc |
| customer_address    | String       | Địa chỉ khách hàng     |          |
| customer_email      | String       | Email khách hàng       |          |
| customer_status_code| String       | Mã trạng thái          | Bắt buộc |
| customer_type_code  | String       | Mã loại                | Bắt buộc |
| customer_group_name | String       | Tên nhóm               | Bắt buộc |
| fields              | List         | Mã khách hàng          |          |
| field_key           | String       | Mã trường thông tin khách |       |
| field_value         | String       | Giá trị thông tin khách |         |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "customer_name": "VPMEDIA",
    "customer_no": " VPMEDIA01",
    "customer_address": "163 Nguyễn Khang, Cầu Giấy, Hà Nội",
    "customer_email": "canh.dsa",
    "customer_phones": ["0365296xxx", "0965713xxx"],
    "customer_status_code": "MA_TRANG_THAI_KHACH_HANG",
    "customer_type_code": "MA_LOAI_KHACH_HANG",
    "customer_group_name": "Ten_nhom_khach_hang",
  "fileds": [
    {
      "field_key": "THONG_TIN_KHAC",
      "field_value": "giá trị của thông tin khác"
    }
  ]
}
``` 

### Response

| status     | String       | Mã trạng thái, 1: Thành công, 0: Thất bại |
|------------|--------------|-------------------------------------------|
| data       | String       | Mã khách hàng                             |
| message    | String       | Thông tin                                 |
| error      | Int          | Mã lỗi                                    |

## Xóa khách hàng

API xoá khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/customer/delete</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id        | String       | VBotID khách hàng | Bắt buộc |
|----------------|--------------|-------------------|----------|
| project_code   | String       | Mã nhóm           | Bắt buộc |
| customer_no    | String       | Mã khách hàng     | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "customer_name": "VPMEDIA",
    "customer_no": " VPMEDIA01"
}
``` 

### Response

| status     | String       | Mã trạng thái, 1: Thành công, 0: Thất bại |
|------------|--------------|-------------------------------------------|
| data       | Bool         | true                                      |
| message    | String       | Thông tin                                 |
| error      | Int          | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_KHACH"
}   
``` 

## Sửa mã khách hàng

API sửa mã khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/customer/updateNO</span>
</div>


## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id         | String       | VBotID khách hàng  | Bắt buộc |
|-----------------|--------------|--------------------|----------|
| project_code    | String       | Mã nhóm            | Bắt buộc |
| customer_no_old | String       | Mã khách hàng cũ   | Bắt buộc |
| customer_no_new | String       | Tên khách hàng mới | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "customer_no_old": "MA_KHACH_OLD",
    "customer_no_new": "MA_KHACH_NEW"
}
``` 

### Response
| status     | String       | Mã trạng thái, 1: Thành công, 0: Thất bại |                                  
|------------|--------------|-------------------------------------------|
| data       | String       | Mã khách hàng                             |
| message    | String       | Thông tin                                 |
| error      | Int          | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_KHACH"
}
``` 

## Thêm trạng thái khách hàng

API thêm trạng thái khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/status/create</span>
</div>


## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id            | String              | VBotID khách hàng                    | Bắt buộc |
|--------------------|---------------------|--------------------------------------|----------|
| project_code       | String              | Mã nhóm                              | Bắt buộc |
| status_no          | String              | Mã trạng thái khách hàng             | Bắt buộc |
| status_name        | String              | Tên trạng thái khách hàng            | Bắt buộc |


``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "status_name": "TEN_TRANG_THAI",
    "status_no": "MA_TRANG_THAI"
}
``` 

### Response

| status             | String              | Mã trạng thái, 1: Thành công, 0: Thất bại |
|--------------------|---------------------|-------------------------------------------|
| data               | String              | Mã trạng thái khách hàng                  |
| message            | String              | Thông tin                                 |
| error              | Int                 | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_KHACH"
}
``` 

## Sửa trạng thái khách hàng

API sửa trạng thái khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/status/update</span>
</div>


## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

|vbot_id       | String | VBotID khách hàng             | Bắt buộc |
|--------------|--------|-------------------------------|----------|
| project_code | String | Mã nhóm                       | Bắt buộc |
| status_no    | String | Mã trạng thái khách hàng      | Bắt buộc |
| status_name  | String | Tên trạng thái khách hàng     | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "status_name": "TEN_TRANG_THAI",
    "status_no": "MA_TRANG_THAI"
}
``` 
### Response

| status     | String | Mã trạng thái, 1: Thành công, 0: Thất bại     |
|------------|--------|-----------------------------------------------|
| data       | String | Mã trạng thái khách hàng                      |
| message    | String | Thông tin lỗi                                 |
| error      | Int    | Mã lỗi                                        |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_KHACH"
}
``` 

## Sửa mã trạng thái khách hàng

API sửa mã trạng thái khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/status/updateNo</span>
</div>


## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id       | String |	VBotID khách hàng              | Bắt buộc |
|---------------|--------|---------------------------------|----------|
| project_code  | String | Mã nhóm                         | Bắt buộc |
| status_no_old | String | Mã trạng thái khách hàng cũ     | Bắt buộc |
| status_no_new | String | Tên trạng thái khách hàng mới   | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "status_no_old": "MA_TRANG_THAI_OLD",
    "status_no_new": "MA_TRANG_THAI_NEW"
}
``` 

### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại     |
|---------|--------|-----------------------------------------------|
| data    | String | Mã trạng thái khách hàng                      |
| message | String | Thông tin lỗi                                 |
| error   | Int    | Mã lỗi                                        |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_KHACH"
}
``` 

## Xóa trạng thái khách hàng

API xóa trạng thái khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/status/delete</span>
</div>


## Parameters

### Header
| Authorization         | Access token: Bearer |
|-----------------------|----------------------|
### Body

| vbot_id       | String | VBotID khách hàng                 | Bắt buộc |
|---------------|--------|-----------------------------------|----------|
| project_code  | String | Mã nhóm                           | Bắt buộc |
| status_no     | String | Mã trạng thái                     | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "status_no": "MA_TRANG_THAI"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại    |
|---------|--------|----------------------------------------------|
| data    | Bool   | true                                         |
| message | String | Thông tin lỗi                                |
| error   | Int    | Mã lỗi                                       |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": true
}
```
## Thêm kiểu khách hàng

API thêm kiểu khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/type/create</span>
</div>


## Parameters
### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id       | String |	VBotID khách hàng              | Bắt buộc |
|---------------|--------|---------------------------------|----------|
| project_code  | String | Mã nhóm                         | Bắt buộc |
| type_no       | String | Mã kiểu khách hàng              | Bắt buộc |
| type_name     | String | Tên kiểu khách hàng             | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "type_name": "TEN_KIEU",
    "type_no": "MA_KIEU"
}   
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại    |
|---------|--------|----------------------------------------------|
| data    | String | Mã kiểu khách hàng                           |
| message | String | Thông tin lỗi                                |
| error   | Int    | Mã lỗi                                       |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_KIEU"
}
``` 
## Sửa kiểu khách hàng

API sửa kiểu khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/type/update</span>
</div>


## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id       | String |	VBotID khách hàng                 | Bắt buộc |
|---------------|--------|------------------------------------|----------|
| project_code  | String | Mã nhóm                            | Bắt buộc |
| type_no       | String | Mã khách hàng                      | Bắt buộc |
| type_name     | String | Tên khách hàng                     | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "type_name": "TEN_KIEU",
    "type_no": "MA_KIEU"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại    |
|---------|--------|----------------------------------------------|
| data    | String | Mã kiểu                                      |
| message | String | Thông tin lỗi                                |
| error   | Int    | Mã lỗi                                       |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_KIEU"
}
``` 
## Sửa mã kiểu khách hàng

API sửa mã kiểu khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/token</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id       | String |	VBotID khách hàng              | Bắt buộc |
|---------------|--------|---------------------------------|----------|
| project_code  | String | Mã nhóm                         | Bắt buộc |
| type_no_old   | String | Mã kiểu khách hàng cũ           | Bắt buộc |
| type_no_new   | String | Tên kiểu khách hàng mới         | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "type_no_old": "MA_KIEU_OLD",
    "type_no_new": "MA_KIEU_NEW"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại    |
|---------|--------|----------------------------------------------|
| data    | String | Mã kiểu                                      |
| message | String | Thông tin lỗi                                |
| error   | Int    | Mã lỗi                                       |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_KIEU"
}
``` 
## Xóa kiểu khách hàng

API xóa kiểu khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/type/delete</span>
</div>


## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id       | String |	VBotID khách hàng                 | Bắt buộc |
|---------------|--------|------------------------------------|----------|
| project_code  | String | Mã nhóm                            | Bắt buộc |
| type_no       | String | Mã kiểu khách hàng                 | Bắt buộc |   

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "status_no": "MA_KIEU"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại    |
|---------|--------|----------------------------------------------|
| data    | Bool   | true                                         |
| message | String | Thông tin lỗi                                |
| error   | Int    | Mã lỗi                                       |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": true
}
``` 

## Thêm nhóm khách hàng

API thêm nhóm khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/token</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id           | String | VBotID khách hàng               | Bắt buộc |
|-------------------|--------|---------------------------------|----------|
| project_code      | String | Mã nhóm                           | Bắt buộc |
| group_no          | String | Mã nhóm khách hàng              | Bắt buộc |
| group_name        | String | Tên nhóm                        | Bắt buộc |
| group_description | String | Mô tả                           |          |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152XXX",
    "group_no": "MA_NHOM",
    "group_name": "TEN_NHOM",
    "group_description": ""
}
``` 
### Response

|         |        |                                              |
|---------|--------|----------------------------------------------|
| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại    |
| data    | String | Mã nhóm khách hàng                           |
| message | String | Thông tin lỗi                                |
| error   | Int    | Mã lỗi                                       |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_NHOM"
}
``` 
## Sửa nhóm khách hàng

API sửa nhóm khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/group/update</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id           | String |	VBotID khách hàng              | Bắt buộc |
|-------------------|--------|---------------------------------|----------|
| project_code      | String | Mã nhóm                         | Bắt buộc |
| group_no          | String | Mã nhóm khách hàng              | Bắt buộc |
| group_name        | String | Tên nhóm                        | Bắt buộc |
| group_description | String | Mô tả                           |          |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152XXX",
    "group_no": "MA_NHOM",
    "group_name": "TEN_NHOM",
    "group_description": ""
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại    |
|---------|--------|----------------------------------------------|
| data    | String | Mã nhóm khách hàng                           |
| message | String | Thông tin lỗi                                |
| error   | Int    | Mã lỗi                                       |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_NHOM"
}
``` 
## Sửa mã nhóm khách hàng

API sửa mã nhóm khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/group/updateNo</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id            | String       | VBotID khách hàng   | Bắt buộc |
|--------------------|--------------|---------------------|----------|
| project_code       | String       | Mã nhóm             | Bắt buộc |
| customer_no_old    | String       | Mã khách hàng cũ    | Bắt buộc |
| customer_name_new  | String       | Tên khách hàng mới  | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152XXX",
    "group_no_old": "MA_NHOM_KHACH_HANG_OLD",
    "group_no_new": "MA_NHOM_KHACH_HANG_NEW"
}
``` 
### Response

| status             | String       | Mã trạng thái, 1: Thành công, 0: Thất bại | 
|:-------------------|:-------------|:------------------------------------------| 
| data               | String       | Mã thông khách hàng                       | 
| message            | String       | Thông tin                                 | 
| error              | Int          | Mã lỗi                                    | 

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_NHOM"
}
``` 
## Xóa nhóm khách hàng

API xóa nhóm khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/group/delete</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id      | String | VBotID khách hàng    | Bắt buộc |
|--------------|--------|----------------------|----------|
| project_code | String | Mã nhóm              | Bắt buộc |
| group_no     | String | Mã nhóm khách hàng   | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "status_no": "MA_NHOM_KHACH_HANG"
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
## Thêm trường thông tin khách hàng

API thêm trường thông tin khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/field/create</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id           | String | VBotID khách hàng     | Bắt buộc |
|-------------------|--------|-----------------------|----------|
| project_code      | String | Mã nhóm               | Bắt buộc |
| field_no          | String | Mã trường thông tin   | Bắt buộc |
| field_name        | String | Tên trường thông tin  | Bắt buộc |
| field_type        | List   | Kiểu trường thông tin | Bắt buộc |
| field_description | String | Mô tả                 |          |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152XXX",
    "field_name": "TEN_THONG_TIN_KHACH_HANG",
    "field_no": "MA_THONG_TIN_KHACH_HANG",
    "field_type": "KIEU_THONG_TIN_KHACH_HANG",
    "field_description": ""
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã trường thông tin khách hàng            |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_THONG_TIN_KHACH_HANG"
}
```   

## Sửa trường thông tin khách hàng

API sửa trường thông tin khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/field/update</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id           | String | VBotID khách hàng     | Bắt buộc |
|-------------------|--------|-----------------------|----------|
| project_code      | String | Mã nhóm               | Bắt buộc |
| field_no          | String | Mã trường thông tin   | Bắt buộc |
| field_name        | String | Tên trường thông tin  | Bắt buộc |
| field_type        | List   | Kiểu trường thông tin | Bắt buộc |
| field_description | String | Mô tả                 |          |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152XXX",
    "field_name": "TEN_THONG_TIN_KHACH_HANG",
    "field_no": "MA_THONG_TIN_KHACH_HANG",
    "field_type": "KIEU_THONG_TIN_KHACH_HANG",
    "field_description": ""
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã trường thông tin khách hàng            |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_THONG_TIN_KHACH_HANG"
}
```   
## Sửa mã trường thông tin khách hàng

API sửa mã trường thông tin khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/field/updateNo</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id      | String | VBotID khách hàng       | Bắt buộc |
|--------------|--------|-------------------------|----------|
| project_code | String | Mã nhóm                 | Bắt buộc |
| field_no_old | String | Mã trường thông tin cũ  | Bắt buộc |
| field_no_new | String | Mã trường thông tin mới | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152XXX",
    "field_name": "TEN_THONG_TIN_KHACH_HANG",
    "field_no_old": "MA_THONG_TIN_KHACH_HANG_OLD",
    "field_no_new": "MA_THONG_TIN_KHACH_HANG_NEW"
}
``` 
### Response

| status  | String | Mã trạng thái, 1: Thành công, 0: Thất bại |
|---------|--------|-------------------------------------------|
| data    | String | Mã thông tin khách hàng                   |
| message | String | Thông tin lỗi                             |
| error   | Int    | Mã lỗi                                    |

``` JSON
{
    "status": 1,
    "error": 0,
    "message": "success",
    "data": "MA_THONG_TIN_KHACH_HANG"
}
``` 
## Xóa trường thông tin khách hàng

API xóa trường thông tin khách hàng

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/crm/field/delete</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id      | String | VBotID khách hàng     | Bắt buộc |
|--------------|--------|-----------------------|----------|
| project_code | String | Mã nhóm               | Bắt buộc |
| field_no     | String | Mã trường thông tin   | Bắt buộc |

``` JSON
{
    "vbot_id": "45681xxx",
    "project_code": "PR20210223152xxx",
    "field_no": "MA_TRUONG_THONG_TIN"
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
