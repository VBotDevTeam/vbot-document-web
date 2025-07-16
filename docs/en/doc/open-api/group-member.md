---
outline: deep
---

# Manage Member Groups

Group Membership Management API.

## Add Member Group

Group Membership Add API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/groupmember/create</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id          | String | Customer VBotID   | Required |
|------------------|--------|-------------------|----------|
| project_code     | String | Group ID          | Required |
| group_no         | String | Member Group ID   | Required |
| group_name       | String | Member Group Name | Required |
| group_ext_number | Int    | Branch ID         | Required |
| description      | String | Description       | Required |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Member group code                   |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 2,
"message": "success",
"data": "group_no"
}
```

## Edit group member

API to edit group member

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/groupmember/update</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id          | String | Customer VBotID | Required |
|------------------|--------|-----------------|----------|  
| project_code     | String | Group ID        | Required |
| group_no         | String | Group ID        | Required |
| group_name       | String | Group Name      | Required |
| group_ext_number | Int    | Branch code     | Required |
| description      | String | Description     | Required |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Group member code                   |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
"status": 1,
"error": 2,
"message": "success",
"data": "group_no"
}
```

## Edit group member code

API to edit group member code

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/groupmember/updateNo</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID     | Required |
|--------------|--------|---------------------|----------|
| project_code | String | Group ID            | Required |
| group_no     | String | Old member group ID | Required |
| group_no_new | String | New member group ID | Required |

``` JSON
{
"vbot_id": "sample string 1",
"project_code": "sample string 2",
"group_no": "sample string 3",
"group_no_new": "sample string 4"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Member ID                           |
| message | String | Error information                   |
| error   | Int    | Error Code                          |

``` JSON
{
"status": 1,
"error": 0,
"message": "success",
"data": "group_no"
}
```

## Edit group member branch code

API edit group member branch code

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/groupmember/updateextnumber</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id          | String | Customer VBotID          | Required |
|------------------|--------|--------------------------|----------|
| project_code     | String | Group code               | Required |
| group_no         | String | Old member group code    | Required |
| group_ext_number | Int    | Member group branch code | Required |

``` JSON
{
"vbot_id": "sample string 1",
"project_code": "sample string 2",
"group_no": "sample string 3",
"group_ext_number": 444
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
"data": "group-ext"
}
```

## Delete group member

Delete group member API

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/groupmember/delete</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Request

| vbot_id      | String | Customer VBotID     | Required |
|--------------|--------|---------------------|----------|
| project_code | String | Group ID            | Required |
| group_no     | String | Old member group ID | Required |

``` JSON
{
 "vbot_id": "sample string 1",
 "project_code": "sample string 2",
 "group_no": "sample string 3"
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
"message": "sample string 3",
"data": true
}
```

## Add member to group member

API add member to group member

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/groupmember/member/add</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID                    | Required |
|--------------|--------|------------------------------------|----------|
| project_code | String | Group ID                           | Required |
| group_no     | String | Old member group ID                | Required |
| member_no    | Array  | List of members added to the group | Required |

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

## Remove member from group member

API add member to group member

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/api/groupmember/member/delete</span>
</div>

## Parameters

### Header

| Authorization | Access token: Bearer |
|---------------|----------------------|

### Body

| vbot_id      | String | Customer VBotID                    | Required |
|--------------|--------|------------------------------------|----------|
| project_code | String | Group ID                           | Required |
| group_no     | String | Old member group code              | Required |
| member_no    | Array  | List of members added to the group | Required |

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