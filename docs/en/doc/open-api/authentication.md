---
outline: deep
---

# Authentication

API used to get access token. Access token is an encrypted string containing business information, with an expiration time of 24 hours.

## Get token

Get token to access other APIs

<div class="api-container">
<span class="api-method">POST</span>
<span>[URL]/token</span>
</div>


## Parameters

### Header

| Accept       | application/json                  |
|--------------|-----------------------------------|
| Content-Type | application/x-www-form-urlencoded |

### Body


| username    | String      | Account Name         |
|-------------|-------------|----------------------|
| password    | String      | Password             |
| grant_type  | String      | Default: "password"  |

``` JSON
{
    "username": "",
    "grant_type": "password",
    "password": ""
}
``` 

### Response

| access_token  | String     | Access token access         |
|---------------|------------|-----------------------------|
| token_type    | String     | Bearer                      |
| expires_in    | Long       |Token duration in seconds    |
| refresh_token | String     |New token chain              |


``` JSON
{
    "access_token": "du7wzwDFqB3CzFRCYxK76YNziYEHN6YSWN_xUj1ahUGxxxx",
    "token_type": "bearer",
    "expires_in": 899,
    "refresh_token": "f2bd26e2-5274-4ac3-9db6-0b828027f446"
}
```

## Get new token

Get new token when token expires

<div class="api-container">
  <span class="api-method">POST</span>
  <span>[URL]/token</span>
</div>


## Parameters

### Header
| Accept        | application/json                        |
|---------------|-----------------------------------------|
| Content-Type  | application/x-www-form-urlencoded       |

### Body

| refresh_token | String      |refresh_token when getting token for the first time |
|---------------|-------------|----------------------------------------------------|
| grant_type    | String      |Default: "refresh_token"                            |

### Response

| access_token  | String     |Access token access              |
|---------------|------------|---------------------------------|
| token_type    | String     | Bearer                          |
| expires_in    | Long       | Token duration in seconds       |
| refresh_token | String     |New token chain                  |

``` JSON
{
    "access_token": "du7wzwDFqB3CzFRCYxK76YNziYEHN6YSWN_xUj1ahUGxxxx",
    "token_type": "bearer",
    "expires_in": 899,
    "refresh_token": "f2bd26e2-5274-4ac3-9db6-0b828027f446"
}
