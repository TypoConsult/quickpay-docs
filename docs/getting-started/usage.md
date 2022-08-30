---
sidebar_position: 2
---

# Usage

The main entrypoint of this package is the provided `Client` instance, which can be used to perform various API
interactions.

## Import

Import the `Client` class from the autoloaded namespace:

```php
use TypoConsult\QuickPay\Client;
```

## Initialize

Create an instance of the class

```php
$client = new Client($apiKey);
```

### Arguments

| name   | type   | required | default | description                            |
|--------|--------|----------|---------|----------------------------------------|
| apiKey | string | `true`   | -       | Can be found in the Quickpay dashboard |

## Use

The client exposes a `payments` object with different functions which can then be called to interact with the Quickpay
API.

```php
$response = $client->payments->create($input);
```

The response is the raw response from Quickpay.

:::info

Consult the [features section](/docs/category/features) for more information on which functions are available and how to
use them.

:::
