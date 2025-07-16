---
outline: deep
---

# Member Management

Member Management API.

## Get Member List

Member List API

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/getAll</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id      | String | Customer VBotID | Required |
|--------------|--------|-----------------|----------|
| project_code | String | Group Code      | Required |
| page         | Int    | Number of pages | Required |
| size         | Int    | Number per page | Required |

``` JSON
{
"vbot_id": "sample string 1",
"project_code": "sample string 2",
"page": 1,
"size": 10
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Member list                         |
| message | String | Error information                   |
| error   | Int    | Error code                          |

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
## Get the number of members

Get the number of members

<div class="api-container">
 <span class="api-method">GET</span>
 <span>[URL]/api/member/countAll</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id      | String | Customer VBotID | Required |
|--------------|--------|-----------------|----------|
| project_code | String | Group ID        | Required |

``` JSON
{
"vbot_id": "sample string 1",
"project_code": "sample string 2"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | Int    | Number of members                   |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
 "status": 1,
 "error": 2,
 "message": "sample string 3",
 "data": 4
}
```

## Add SDK Account

API Add SDK Account

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/sdk/create</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id           | String | Customer VBotID | Required      |
|-------------------|--------|-----------------|---------------|
| project_code      | String | Group ID        | Required      |
| member_no         | String | Member ID       | Required      |
| member_name       | Int    | Member Name     | Required      |
| member_email      | Int    | Member Email    |               |
| member_phone      | Int    | Phone Number    |               |
| member_ext_number | Int    | Branch ID       | Required (99) |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Member code                         |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "member_no"
}
```

## Edit SDK Account

SDK Account Edit API

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/sdk/create</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id           | String | Customer VBotID | Required |
|-------------------|--------|-----------------|----------|
| project_code      | String | Group ID        | Required |
| member_no         | String | Member ID       | Required |
| member_name       | Int    | Member Name     | Required |
| member_email      | Int    | Member email    |          |
| member_phone      | Int    | Phone number    |          |
| member_ext_number | Int    | Branch code     | Required (99) |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Member code                         |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
 "status": 1,
 "error": 0,
 "message": "success",
 "data": "member_no"
}
```
## Get the SDK token

API gets SDK token

<div class="api-container">
 <span class="api-method">GET</span>
 <span>[URL]/api/sdk/getToken</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| project_code | String | Group code      | Required |
|--------------|--------|-----------------|----------|
| member_no    | String | Membership code | Required |

``` JSON
{
 "project_code": "sample string 2",
 "member_no": "sample string 3"
}
```

### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | SDK Token                           |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "sample string 3",
"data": "sample string 4"
}
```
## Add device account

Add device account API

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/sip/create</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id           | String | Customer VBotID | Required |
|-------------------|--------|-----------------|----------|
| project_code      | String | Group ID        | Required |
| member_no         | String | Member ID       | Required |
| member_name       | Int    | Member Name     | Required |
| member_username   | Int    | Account         | Required |
| member_password   | Int    | Password        | Required |
| member_email      | Int    | Member Email    |          |
| member_phone      | Int    | Phone Number    |          |
| member_ext_number | Int    | Branch Code     | Required (99) |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Membership code                     |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "member_no"
}
```
## Get device account credentials

API to get device account credentials

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/sip/info</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id      | String | Customer VBotID | Required |
|--------------|--------|-----------------|----------|
| project_code | String | Group ID        | Required |
| member_no    | String | Member ID       | Required |

``` JSON
{
"vbot_id": "sample string 1",
"project_code": "sample string 2",
"member_no": "sample string 3"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Login information                   |
| message | String | Error information                   |
| error   | Int    | Error code                          |
 
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
## Edit device account

Edit device account API

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/sip/update</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id           | String | Customer VBotID | Required |
|-------------------|--------|-----------------|----------|
| project_code      | String | Group code      | Required |
| member_no         | String | Member code     | Required |
| member_name       | Int    | Member name     | Required |
| member_email      | Int    | Member email    |          |
| member_phone      | Int    | Phone number    |          |
| member_ext_number | Int    | Branch code     | Required (99) |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Member code                         |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "member_no"
}
```
## Update device account password

API to update device account password

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/sip/updatePassword</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id             | String | Customer VBotID | Required |
|---------------------|--------|-----------------|----------|
| project_code        | String | Group ID        | Required |
| member_no           | String | Member ID       | Required |
| member_password_old | String | Old Password    | Required |
| member_password_new | String | New Password    | Required |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Member ID                           |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "member_no"
}
```
## Edit Member ID

Member ID Edit API

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/updateNo</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id       | String | Customer VBotID | Required |
|---------------|--------|-----------------|----------|
| project_code  | String | Group code      | Required |
| member_no     | String | Old member code | Required |
| member_no_new | String | New member code | Required |

``` JSON
{
"vbot_id": "sample string 1",
"project_code": "sample string 2",
"member_no": "sample string 3",
"member_no_new": "sample string 4"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Member code                         |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "member_no"
}
```
## Edit member branch

API to edit member branch

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/updateExtNumber</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request
 
| vbot_id               | String | Customer VBotID | Required |
|-----------------------|--------|-----------------|----------|
| project_code          | String | Group code      | Required |
| member_no             | String | Member code     | Required |
| simember_ext_numberze | String | Member Branch   | Required |

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

## Add Money to Member

API Add Money to Member

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/addMoney</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id      | String | Customer VBotID             | Required |
|--------------|--------|-----------------------------|----------|
| project_code | String | Group ID                    | Required |
| member_no    | String | Member ID                   | Required |
| money        | Double | Amount, add "-" if deducted | Required |

``` JSON
{
"vbot_id": "sample string 1",
"project_code": "sample string 2",
"member_no": "sample string 3",
"money": 12.3
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Member ID                           |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "sample string 3"
}
```

## Delete Member

Delete Member API

<div class="api-container">
<span class="api-method">GET</span>
<span>[URL]/api/member/delete</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id      | String | Customer VBotID | Required |
|--------------|--------|-----------------|----------|
| project_code | String | Group ID        | Required |
| member_no    | String | Member ID       | Required |

``` JSON
{
"vbot_id": "sample string 1",
"project_code": "sample string 2",
"member_no": "sample string 3"}
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