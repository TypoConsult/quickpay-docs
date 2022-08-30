---
sidebar_position: 3
---

# Callback

The package provides a `CallbackHandler` class which is a [PSR-15 Middleware](https://www.php-fig.org/psr/psr-15/). This
middleware needs to be added to your project's middleware stack **BEFORE** your custom logic.

It will automatically detect requests coming from Quickpay and enrich the request with some key information for you to
use in your custom logic.

:::tip

If you are working in a development environment with access limitations make sure to allow requests from this
IP range: **193.162.142.208/28** to allow callback requests from Quickpay.

**.htaccess example**

```text
# QuickPay Callback IPs
Require ip 193.162.142.208/28
```

:::

## Usage

Add the `TypoConsult\QuickPay\CallbackHandler` class to your middleware stack.

### TYPO3 example

:::caution

If another extension is already using this, make sure that the `CallbackHandler` is only added to the middleware stack
once.

:::

```php
<?php

return [
    'frontend' => [
        'quickpay/process-callback' => [
            'target' => \TypoConsult\QuickPay\CallbackHandler::class,
            'after' => [
                'typo3/cms-frontend/prepare-tsfe-rendering',
            ]
        ]
    ]
];
```

## Data

The request will then be enriched witha new attribute `quickpay` with parsed data when it reaches your custom logic.

It can be fetched with the following function:

```php
$request->getAttribute('quickpay');
```

In this quickpay attribute you will receive the following data:

| name          | type                                                   | description                                |
|---------------|--------------------------------------------------------|--------------------------------------------|
| accepted      | boolean                                                |                                            |
| operationType | [OperationTypes](/docs/features/types/operation-types) |                                            |
| state         | string                                                 | initial, pending, new, rejected, processed |
| statusCode    | [StatusCodes](/docs/features/types/status-codes)       |                                            |
| testMode      | boolean                                                |                                            |
| type          | string                                                 | eg. 'Payment'                              |
