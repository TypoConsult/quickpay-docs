---
sidebar_position: 4
---

# StatusCodes

A [backed enum](https://www.php.net/manual/en/language.enumerations.backed.php) containing the available status codes
from a Quickpay callback.

## Values

| name                         | value |
|------------------------------|-------|
| APPROVED                     | 20000 |
| WAITING_APPROVAL             | 20200 |
| SECURE_3D_REQUIRED           | 30100 |
| SCA required                 | 30101 |
| REJECTED_BY_ACQUIRER         | 40000 |
| REQUEST_DATA_ERROR           | 40001 |
| AUTHORIZATION_EXPIRED        | 40002 |
| ABORTED                      | 40003 |
| GATEWAY_ERROR                | 50000 |
| ACQUIRER_COMMUNICATION_ERROR | 50300 |

## Usage

To get the request status code in enum format, use the following code below to add your custom logic.

:::note

The direct value can also be used and compared with the enum value, but it is not recommended as it is less strict.

:::

```php
$data = $request->getAttribute('quickpay');

if ($data['statusCode'] === StatusCodes::APPROVED && $data['accepted']) {
    // do something on accepted and approved operation
}
```
