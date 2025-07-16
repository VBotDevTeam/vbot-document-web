---
outline: deep
---

# Call History Management

API for managing call history.

## Retrieve Call History List

API to retrieve call history list.

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/crm/historycall/getAll</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id      | String | Customer's VBotID          | Required |
|--------------|--------|----------------------------|----------|
| project_code | String | Group code                 | Required |
| phone        | String | Phone number               | Required |
| page         | Int    | Page number                | Required |
| size         | Int    | Number of records per page | Required |

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

| status          | String      | Status code, 1: Success, 0: Failure |
|-----------------|-------------|-------------------------------------|
| data            | String      | Call history list                   |
| hotline_number  | String      | Hotline                             |
| date_create     | String      | Call date and time                  |
| time_call       | String      | Call duration                       |
| type_call       | String      | CALLIN, CALLOUT, MISSCALL           |
| caller          | String      | List of callers                     |
| callee          | String      | List of recipients                  |
| postage         | String      | Call cost                           |
| source          | String      | Call source                         |
| event_data      | String      | Data type                           |
| disposition     | String      | MORE: Multiple call statuses, MISSCALL: Missed call, ANSWER: Answered, BUSY: Receiver busy, NOANSWER: No answer, CANCEL: Caller canceled, SOMEONEANSWERED: Someone else answered, LOGOUT: Logged out, INCALL: In another call, CONGESTION, CHANUNAVAIL, DONTCALL, TORTURE, INVALIDARGS, NORMAL_CLEARING: Call error |
| record_file     | String      | Call recording file                  |
| message         | String      | Error message                        |
| error           | Int         | Error code                           |

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

## Retrieve Call Count

Retrieve call count.

<div class="api-container">
  <span class="api-method">GET</span>
  <span>[URL]/api/crm/historycall/getAll</span>
</div>

## Parameters

### Header

| Authorization         | Access token: Bearer |
|-----------------------|----------------------|

### Body

| vbot_id      | String | Customer's VBotID    | Required |
|--------------|--------|----------------------|----------|
| project_code | String | Group code           | Required |
| phone        | String | Phone number         | Required |

``` JSON
{
    "vbot_id": "sample string 1",
    "project_code": "sample string 2",
    "phone": "sample string 3"
}
```
### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | Int    | Number of calls                     |
| message | String | Error message                       |
| error   | Int    | Error code                          |

``` JSON
{
    "status": 1,
    "error": 2,
    "message": "sample string 3",
    "data": 4
}
```

