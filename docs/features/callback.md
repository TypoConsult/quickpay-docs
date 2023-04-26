---
sidebar_position: 3
---

# Callback

The package provides a `CallbackMiddleware` class which is a [PSR-15 Middleware](https://www.php-fig.org/psr/psr-15/). This
middleware needs to be added to your project's middleware stack **BEFORE** your custom logic.

It will automatically validate requests coming from Quickpay and enrich the request with some key information for you to
use in your custom logic.

:::tip

If you are working in a development environment with access limitations make sure to allow requests from this
IP range: **193.162.142.208/28** to allow callback requests from Quickpay.

**.htaccess example**

```text
# Quickpay Callback IPs
Require ip 193.162.142.208/28
```

:::

## Usage

Add the `TypoConsult\Quickpay\Middleware\CallbackMiddleware` class to your middleware stack.

### TC API example

:::caution

If added to endpoints that are not hit by Quickpay with the Quickpay checksum header, it'll cause every request to fail with a 400 HTTP status code.

:::

```php
<?php

declare(strict_types=1);

namespace TYPOCONSULT\TcBase\Api;

use TypoConsult\Quickpay\Middleware\CallbackMiddleware;
use TYPOCONSULT\TcApi\Api\Routing\Route;
use TYPOCONSULT\TcApi\Api\Routing\RouteDefinitionsInterface;
use TYPOCONSULT\TcApi\Exception\InvalidMiddlewareArgumentException;
use TYPOCONSULT\TcApi\Exception\RouteAlreadyDefinedException;
use TYPOCONSULT\TcBase\Api\Handlers\QuickPayCallbackHandler;

class RouteDefinitions implements RouteDefinitionsInterface
{
    /**
     * @throws InvalidMiddlewareArgumentException
     * @throws RouteAlreadyDefinedException
     */
    public function __invoke(): void
    {
        Route::post('/quickpay/callback', new QuickPayCallbackHandler(), [new CallbackMiddleware(QUICKPAY_PRIVATE_KEY)]);
    }
}

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
