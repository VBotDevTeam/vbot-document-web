---
outline: deep
---

# Auto Call

API for auto call.

## Provided by VBot

### Create Auto Call Campaign

API to initialize a campaign using a pre-created campaign template and execute the campaign.

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/api/campaign/create</span>
</div>

### Header

| Content-Type  | application/json      |
|---------------|-----------------------|
| Authorization | Access token: Bearer  |

### Request

| vbot_id      | String | Customer's VBotID      | Required |
|--------------|--------|------------------------|----------|
| project_code | String | Group code             | Required |
| campaignID   | String | Template campaign ID   | Required |
| name         | String | New campaign name      | Required |
| phones       | List   | Data list              | Required |
| fields       | List   | Data fields list       | Required |
| key          | Int    | Data field name        | Required |
| value        | String | Value                  | Required |

``` JSON
{
    "vbotId": "44634xxxx",
    "groupCode": "PR20230307144xxxxx",
    "campaignId": 2932,
    "name": "campaign_name_new",
    "phones": [
        {
            "fields": [
                {
                    "key": "phone",
                    "value": "0366255xxx"
                },
                {
                    "key": "name",
                    "value": "Nguyen Van x"
                }
            ]
        }
    ]
}   
```

### Key

| phone       | String      | Phone number      |
|-------------|-------------|-------------------|
| description | String      | Description       |
| numberCall  | Int         | Number of calls   |
| [FIELD]     | [String]    | Other information fields added in Campaign Field configured in the campaign script (Campaign Template) |

### Response

| status  | String | Status code, 1: Success, 0: Failure |
|---------|--------|-------------------------------------|
| data    | String | Campaign ID, returns "-1" if failed |
| msg     | String | Error message                       |
| error   | Int    | Error code                          |

```JSON
{
    "status": 1,
    "error": 2,
    "msg": "success",
    "data": 1
}
```

### Status code

| 200 | Success |
|-----|---------|
| 500 | Error   |

### Error code

| 0   | Success               |
|-----|-----------------------|
| 201 | Invalid parameter     |
| 400 | Error                 |

## Provided by Customer

The customer must provide VBot with a Webhook API using the POST method to receive call history data when generated, including the following information.

### Call History

#### Request

| status       | String      | Status code, 1: Success, 0: Failure |
|--------------|-------------|-------------------------------------|
| data         | String      | Call history list                   |
| hotline_number | String    | Hotline                             |
| date_create  | String      | Call date and time                  |
| time_call    | String      | Call duration                       |
| type_call    | String      | CALLIN, CALLOUT, MISSCALL           |
| caller       | String      | List of callers                     |
| callee       | String      | List of recipients                  |
| postage      | String      | Call cost                           |
| source       | String      | Call source                         |
| event_data   | String      | Data type                           |
| disposition  | String      | MORE: Multiple call statuses, MISSCALL: Missed call, ANSWER: Answered, BUSY: Receiver busy, NOANSWER: No answer, CANCEL: Caller canceled, SOMEONEANSWERED: Someone else answered, LOGOUT: Logged out, INCALL: In another call, CONGESTION, CHANUNAVAIL, DONTCALL, TORTURE, INVALIDARGS, NORMAL_CLEARING: Call error |
| record_file  | String      | Call recording file                 |
| message      | String      | Error message                       |
| error        | Int         | Error code                          |

### Auto Call History

#### Request

| campaign_id    | Int         | Campaign ID        |
|---------------|-------------|---------------------|
| create_at      | String      | Call time          |
| hotline        | String      | Hotline            |
| phone          | String      | Phone number       |
| name           | String      | Customer name      |
| description    | String      | Description        |
| status         | Int         | Call status        |
| time_call      | Int         | Call duration      |
| postage        | Double      | Call cost          |
| service_charge | Double      | Service charge     |
| action_log     | String      | Action log         |
| event_data     | String      | Data type          |

#### Status

| 100, -100, 104 | System error, Undefined error         |
|---------------|----------------------------------------|
| 101           | Undefined phone number                 |
| 102           | No hotline found for phone carrier     |
| 103           | Insufficient balance                   |
| 105           | VBot package expired or not registered |
| 106           | Unsupported phone carrier              |
| 200           | ANSWER                                 |
| 2             | NO_ANSWER                              |
| 3             | BUSY                                   |
| 4             | CANCEL                                 |

