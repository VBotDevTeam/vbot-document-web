# Hotline Management

API for hotline management.

## Get Hotline List

API to retrieve the list of hotlines.

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/hotline/getAll</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Request

| vbot_id      | String | Customer's VBotID    | Required |
|--------------|--------|----------------------|----------|
| project_code | String | Group code           | Required |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2"
}
```
### Response

| status          | String | Status code, 1: Success, 0: Failure |
|-----------------|--------|-------------------------------------|
| data            | String | Member group code                   |
| hotline_name    | String | Hotline name                        |
| hotline_number  | String | Hotline number                      |
| message         | String | Error information                   |
| error           | Int    | Error code                          |

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

## Add Hotline for Member

API to add a hotline for a member.

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/hotline/member/add</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id        | String | Customer's VBotID    | Required |
|----------------|--------|----------------------|----------|
| project_code   | String | Group code           | Required |
| member_no      | String | Member ID            | Required |
| hotline_number | String | Hotline number       | Required |
| allow_call     | Bool   | Allow calling        | Required |
| start_time     | String | Start time           | Required |
| end_time       | String | End time             | Required |

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

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | Bool   | true                                |
| message | String | Error information                   |
| error   | Int    | Error code                          |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "success",
    "data": true
}
```

## Remove Hotline from Member

API to remove a hotline from a member.

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/hotline/member/delete</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id        | String | Customer's VBotID    | Required |
|----------------|--------|----------------------|----------|
| project_code   | String | Group code           | Required |
| member_no      | String | Member ID            | Required |
| hotline_number | String | Hotline number       | Required |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "member_no": "sample string 3",
    "hotline_number": "sample string 4"
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

