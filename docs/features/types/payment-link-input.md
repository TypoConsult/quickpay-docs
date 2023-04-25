---
sidebar_position: 2
---

# PaymentLinkInput

A class for specifying the exact fields required for creating a payment link.

This type extends the [PaymentInput class](/docs/features/types/payment-input) as
the [createLink function](/docs/features/services/payments#createlink) will create a new payment AND a payment link.

## Example

```php
use TypoConsult\Quickpay\Types\PaymentLinkInput;

...

$paymentLinkInput = new PaymentLinkInput(amount: 2000);
```

## Arguments

| name        | type    | required | default | description                                                                                         |
|-------------|---------|----------|---------|-----------------------------------------------------------------------------------------------------|
| amount      | number  | `false`  | 0       | Should be provided as whole number representing the lowest possible unit eg. "øre" for DKK currency |
| autoCapture | boolean | `false`  | `false` |                                                                                                     |
| callbackUrl | string  | `false`  | -       |                                                                                                     |
| cancelUrl   | string  | `false`  | -       |                                                                                                     |
| language    | string  | `false`  | 'da'    |                                                                                                     |
| successUrl  | string  | `false`  | -       |                                                                                                     |





