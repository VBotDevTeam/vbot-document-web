---
outline: deep
---

# Customer Management

Customer Management API.

## Add Customer

Add Customer API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/customer/create</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------------|----------------------|

### Body

| vbot_id             | String | Customer VBotID                 | Required |
|---------------------|--------|---------------------------------|----------|
| project_code        | String | Group code                      | Required |
| customer_no         | String | Customer code                   | Required |
| customer_name       | String | Customer name                   | Required |
| customer_phones     | List   | List of phone numbers           | Required |
| customer_address    | String | Customer Address                |          |
| customer_email      | String | Customer Email                  |          |
| customer_status_code| String | Status Code                     | Required |
| customer_type_code  | String | Type Code                       | Required |
| customer_group_name | String | Group Name                      | Required |
| fields              | List   | Customer Code                   |          |
| field_key           | String | Customer Information Field Code |          |
| field_value         | String | Customer Information Value      |          |

``` JSON
{
 "vbot_id": "45681xxx",
 "project_code": "PR20210223152xxx",
 "customer_name": "VPMEDIA",
 "customer_no": "VPMEDIA01",
 "customer_address": "163 Nguyen Khang, Cau Giay, Hanoi",
 "customer_email": "canh.dsa",
 "customer_phones": ["0365296xxx", "0965713xxx"],
 "customer_status_code": "MA_TRANG_THAI_KHACH_HANG",
 "customer_type_code": "MA_LOAI_KHACH_HANG",
 "customer_group_name": "Name_nhom_customer_name",
 "files": [
 {
 "field_key": "THONG_TIN_KHAC",
"field_value": "value of other information"
}
]
}
```

### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer ID                         |
| message | String | Information                         |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_KHACH"
}
```

## Edit customer

Customer information editing API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/customer/update</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id             | String | Customer VBotID                 | Required |
|---------------------|--------|---------------------------------|----------|
| customer_no         | String | Customer ID                     | Required |
| customer_name       | String | Customer Name                   | Required |
| customer_phones     | List   | List of Phone Numbers           | Required |
| customer_address    | String | Customer Address                |          |
| customer_email      | String | Customer Email                  |          |
| customer_status_code| String | Status Code                     | Required |
| customer_type_code  | String | Type Code                       | Required |
| customer_group_name | String | Group Name                      | Required |
| fields              | List   | Customer ID                     |          |
| field_key           | String | Customer Information Field Code |          |
| field_value         | String | Customer Information Value      |          |

``` JSON
{
 "vbot_id": "45681xxx",
 "project_code": "PR20210223152xxx",
 "customer_name": "VPMEDIA",
 "customer_no": "VPMEDIA01",
 "customer_address": "163 Nguyen Khang, Cau Giay, Hanoi",
 "customer_email": "canh.dsa",
 "customer_phones": ["0365296xxx", "0965713xxx"],
 "customer_status_code": "MA_TRANG_THAI_KHACH_HANG",
 "customer_type_code": "MA_LOAI_KHACH_HANG",
 "customer_group_name": "Name_nhom_customer_name",
 "files": [
 {
 "field_key": "THONG_TIN_KHAC",
"field_value": "value of other information"
}
]
}
```

### Response

| status  | String | Status code, 1: Success, 0: Failure    |
|---------|--------|----------------------------------------|
| data    | String | Customer ID                            |
| message | String | Information                            |
| error   | Int    | Error code                             |

## Delete customer

Customer Delete API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/customer/delete</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID   | Required |
|--------------|--------|-------------------|----------|
| project_code | String | Group code        | Required |
| customer_no  | String | Customer code     | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"customer_name": "VPMEDIA",
"customer_no": " VPMEDIA01"
}
```

### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | Bool   | true                                |
| message | String | Information                         |
| error   | Int    | Error code                          |

``` JSON
{
 "status": 1,
 "error": 0,
 "message": "success",
 "data": "MA_KHACH"
}
```

## Edit Customer Code

Customer Code Edit API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/customer/updateNO</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id         | String | Customer VBotID   | Required |
|-----------------|--------|-------------------|----------|
| project_code    | String | Group ID          | Required |
| customer_no_old | String | Old Customer ID   | Required |
| customer_no_new | String | New Customer Name | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"customer_no_old": "MA_KHACH_OLD",
"customer_no_new": "MA_KHACH_NEW"
}
```

### Response
| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer ID                         |
| message | String | Information                         |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_KHACH"
}
```

## Add customer status

API add customer status

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/status/create</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body
   
| vbot_id      | String | Customer VBotID      | Required |
|--------------|--------|----------------------|----------|
| project_code | String | Group code           | Required |
| status_no    | String | Customer status code | Required |
| status_name  | String | Customer status name | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"status_name": "TRANG_THAI",
"status_no": "TRANG_THAI"
}
```

### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer status code                |
| message | String | Information                         |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_KHACH"
}
```

## Edit customer status

Customer status API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/status/update</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

|vbot_id       | String | Customer VBotID      | Required |
|--------------|--------|----------------------|----------|
| project_code | String | Group code           | Required |
| status_no    | String | Customer status code | Required |
| status_name  | String | Customer status name | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"status_name": "TRANG_THAI",
"status_no": "TRANG_THAI"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer status code                |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_KHACH"
}
```

## Edit customer status code

API to edit customer status code

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/status/updateNo</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id       | String | Customer VBotID          | Required |
|---------------|--------|--------------------------|----------|
| project_code  | String | Group code               | Required |
| status_no_old | String | Old customer status code | Required |
| status_no_new | String | New customer status name | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"status_no_old": "MA_TRANG_THAI_OLD",
"status_no_new": "MA_TRANG_THAI_NEW"
}
```

### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer status code                |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_KHACH"
}
```

## Delete customer status

Client status delete API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/status/delete</span>
</div>


## Parameters

### Header
| Authorization | Access token: Bearer |
|---------------|----------------------|
### Body

| vbot_id      | String | Customer VBotID | Required |
|--------------|--------|-----------------|----------|
| project_code | String | Group ID        | Required |
| status_no    | String | Status code     | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"status_no": "MA_TRANG_THAI"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | Bool   | true                                |
| message | String | Error Info                          |
| error   | Int    | Error Code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": true
}
```
## Add Customer Type

Add Customer Type API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/type/create</span>
</div>

## Parameters
### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID    | Required |
|--------------|--------|--------------------|----------|
| project_code | String | Group ID           | Required |
| type_no      | String | Customer Type ID   | Required |
| type_name    | String | Customer type name | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"type_name": "TYPE_NAME",
"type_no": "TYPE_MA"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer type code                  |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_KIEU"
}
```
## Edit customer type

API edit customer type

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/type/update</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID | Required |
|--------------|--------|-----------------|----------|
| project_code | String | Group code      | Required |
| type_no      | String | Customer code   | Required |
| type_name    | String | Customer Name   | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"type_name": "KIEU_TEN",
"type_no": "KIEU_MA"
}
``` 
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Type code                           |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_KIEU"
}
```
## Edit customer type code

API edit customer type code

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/token</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID            | Required |
|--------------|--------|----------------------------|----------|
| project_code | String | Group code                 | Required |
| type_no_old  | String | Old customer type code     | Required |
| type_no_new  | String | New customer type name     | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"type_no_old": "MA_KIEU_OLD",
"type_no_new": "MA_KIEU_NEW"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Type code                           |
| message | String | Error Info                          |
| error   | Int    | Error Code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_KIEU"
}
```
## Delete Customer Type

API Delete Customer Type

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/type/delete</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID    | Required |
|--------------|--------|--------------------|----------|
| project_code | String | Group Code         | Required |
| type_no      | String | Customer Type Code | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"status_no": "MA_KIEU"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | Bool   | true                                |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": true
}
```

## Add customer group

Add customer group API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/token</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id           | String | Customer VBotID   | Required |
|-------------------|--------|-------------------|----------|
| project_code      | String | Group ID          | Required |
| group_no          | String | Customer Group ID | Required |
| group_name        | String | Group Name        | Required |
| group_description | String | Description       |          |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer group code                 |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_NHOM"
}
```
## Edit Customer Group

API Edit Customer Group

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/group/update</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id           | String | Customer VBotID   | Required |
|-------------------|--------|-------------------|----------|
| project_code      | String | Group ID          | Required |
| group_no          | String | Customer Group ID | Required |
| group_name        | String | Group Name        | Required |
| group_description | String | Description       |          |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer group code                 |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_NHOM"
}
```
## Edit customer group code

API to edit customer group code

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/group/updateNo</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id           | String | Customer VBotID   | Required |
|-------------------|--------|-------------------|----------|
| project_code      | String | Group code        | Required |
| customer_no_old   | String | Old customer code | Required |
| customer_name_new | String | New customer name | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152XXX",
"group_no_old": "MA_NHOM_KHACH_HANG_OLD",
"group_no_new": "MA_NHOM_KHACH_HANG_NEW"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|:--------|:-------|:------------------------------------|
| data    | String | Customer ID                         |
| message | String | Information                         |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_NHOM"
}
```
## Delete customer group

API delete customer group

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/group/delete</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID   | Required |
|--------------|--------|-------------------|----------|
| project_code | String | Group ID          | Required |
| group_no     | String | Customer Group ID | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"status_no": "MA_NHOM_KHACH_HANG"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | Bool   | true                                |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": true
}
```
## Add Customer Field

API Add Customer Field

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/field/create</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id           | String | Customer VBotID | Required |
|-------------------|--------|-----------------|----------|
| project_code      | String | Group ID        | Required |
| field_no          | String | Field ID        | Required |
| field_name        | String | Field Name      | Required |
| field_type        | List   | Field Type      | Required |
| field_description | String | Description     |          |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152XXX",
"field_name": "CUSTOMER_INFORMATION_NAME",
"field_no": "CUSTOMER_INFORMATION_MA",
"field_type": "CUSTOMER_INFORMATION_KINDLE",
"field_description": ""
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer information field code     |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "KHACH_HANG_INFORMATION"
}
```

## Edit customer information field

API edit customer information field

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/field/update</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id           | String | Customer VBotID        | Required |
|-------------------|--------|------------------------|----------|
| project_code      | String | Group code             | Required |
| field_no          | String | Information field code | Required |
| field_name        | String | Field name             | Required |
| field_type        | List   | Field type             | Required |
| field_description | String | Description            |          |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152XXX",
"field_name": "CUSTOMER_INFORMATION_NAME",
"field_no": "CUSTOMER_INFORMATION_MA",
"field_type": "CUSTOMER_INFORMATION_KIND",
"field_description": ""
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer information field code     |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "MA_THONG_TIN_KHACH_HANG"
}
```
## Edit customer information field code

API edit customer information field code

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/field/updateNo</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID | Required |
|--------------|--------|-----------------|----------|
| project_code | String | Group code      | Required |
| field_no_old | String | Old field code  | Required |
| field_no_new | String | New field code  | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152XXX",
"field_name": "KHACH_HANG_INFORMATION_NAME",
"field_no_old": "KHACH_HANG_INFORMATION_OLD",
"field_no_new": "KHACH_HANG_INFORMATION_NEW"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Customer information code           |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "KHACH_HANG_INFORMATION"
}
```
## Delete customer information field

API delete customer information field

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/crm/field/delete</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID        | Required |
|--------------|--------|------------------------|----------|
| project_code | String | Group code             | Required |
| field_no     | String | Information field code | Required |

``` JSON
{
"vbot_id": "45681xxx",
"project_code": "PR20210223152xxx",
"field_no": "MA_TRUO_THONG_TIN"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | Bool   | true                                |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": true
}
```