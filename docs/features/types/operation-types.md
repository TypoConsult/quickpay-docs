---
sidebar_position: 3
---

# OperationTypes

A [backed enum](https://www.php.net/manual/en/language.enumerations.backed.php) containing the available operation types
from a Quickpay callback.

## Values

| name      | value       |
|-----------|-------------|
| AUTHORIZE | 'authorize' |
| CAPTURE   | 'capture'   |

## Usage

To get the request operation type in enum format, use the following code below to add your custom logic.

:::note

The direct value can also be used and compared with the enum value, but it is not recommended as it is less strict.

:::

```php
$data = $request->getAttribute('quickpay');
$operationType = OperationTypes::from($data['operationType']);

if ($operationType === OperationTypes::CAPTURE && $data['accepted']) {
    // do something on accepted capture operation
}
```
