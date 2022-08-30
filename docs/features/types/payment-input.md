---
sidebar_position: 1
---

# PaymentInput

A class for specifying the exact fields required for creating payments.

## Example

```php
use TypoConsult\QuickPay\Types\PaymentInput;

...

$paymentInput = new PaymentInput(currency: 'dkk', orderId: '2022-08-26-foobar');
```

## Arguments

| name      | type   | required | default |
|-----------|--------|----------|---------|
| currency  | string | `false`  | 'dkk'   |
| orderId   | string | `true`   | -       |
| email     | string | `false`  | -       |
| variables | array  | `false`  | -       |
