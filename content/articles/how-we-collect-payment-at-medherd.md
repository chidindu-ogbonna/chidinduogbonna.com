---
title: How We Collect Payments at Medherd
description: 'A step by step guide on how we make use of the Stripe payment service (and corresponding APIs) at Medherd'
image: 'https://res.cloudinary.com/cheapflix/image/upload/v1599430399/projects-images/medherd-stripe/Medherd_Stripe_Intro_1.png'
tags:
  - Use Case
isExternal: false
published: true
createdAt: September 5,2020
featured: true
---

At [Medherd](https://medherd.com), we create a platform for medical practitioners and businesses to stay ahead of what's going on in the digital health space. Keeping them updated and providing a collaborative environment to discover and review products and most importantly share ideas.

In doing that, we aim to get paid. This post is a guide on how we handle payments at [Medherd](https://medherd.com/) using [Stripe](https://stripe.com) in a robust and secure manner, and we hope this can help you navigate the **large** Stripe documentation.

Medherd is built **Serverlessly** on Google Cloud Platform, with Cloud Functions at the heart of our architecture. All the endpoints used in our payment setup are created with Cloud Functions.

## A Plan

First, we had to decide on how our "Plans" would be structured.

A plan is seen as a "mixture" of products and prices, which are created either through the stripe dashboard or using the [Products API](https://stripe.com/docs/api/products) and [Prices API](https://stripe.com/docs/api/prices) respectively.

A product can have one price. This is the most common implementation you'll find in SAAS payment structures. This is also what we use at Medherd.
![single pricing](https://res.cloudinary.com/cheapflix/image/upload/v1599468987/projects-images/medherd-stripe/A_Plan_-_single_pricing.png)

A product can also have multiple prices. A use case for this would be a product with an annual, monthly and weekly variation.
![second type of plan](https://res.cloudinary.com/cheapflix/image/upload/v1599469001/projects-images/medherd-stripe/A_Plan_-_multiple_pricing_1.png)

### Types of Plans

![types of plan](https://res.cloudinary.com/cheapflix/image/upload/v1599468986/projects-images/medherd-stripe/Types_of_Plans.png)

Stripe allows you to create 2 types of plans.

- **Recurring Plans (Subscription)** - These are subscription based plans, used to collect payment on a weekly, monthly or annual basis depending on your billing structure

- **One-Time Plans** - These are plans that are to be paid for at once. Similar to products sold on an e-commerce platform.

## Setup a User for Billing

![on sign up](https://res.cloudinary.com/cheapflix/image/upload/v1599468986/projects-images/medherd-stripe/Sign_up.png)

This is the first and most important step. When a user creates an account on our platform, we create a customer account for the user on Stripe, making use of the [Customers API](https://stripe.com/docs/api/customers).

> Ideally, for every user on our platform, there is a customer account on Stripe.

## Recurring (subscription) Payments

![subscription payment](https://res.cloudinary.com/cheapflix/image/upload/v1599469122/projects-images/medherd-stripe/Subscription_Payment_1.png)

Using the [SetupIntents API](https://stripe.com/docs/api/setup_intents) and the [Subscriptions API](https://stripe.com/docs/api/subscriptions), we handle subscriptions in the smoothest way possible.

Using the SetupIntents API, we create an "intent" to "setup" a user for a recurring billing. After the intent has been setup, we can collect payment details using the Stripe client-side SDK, and then create the subscriptions on our platform.

## One-Time Payments

![One time payment](https://res.cloudinary.com/cheapflix/image/upload/v1599469122/projects-images/medherd-stripe/One-Time_payment_1.png)

Using the [PaymentIntents API](https://stripe.com/docs/api/payment_intents) (similar to the SetupIntents API), we create an "intent" to receive "payments", and then complete this process using the `confirmCardPayment` method directly on the client device, making use of the client-side SDK.

## Stripe Webhooks

![webhooks](https://res.cloudinary.com/cheapflix/image/upload/v1599468986/projects-images/medherd-stripe/webhooks_1.png)

[Stripe Webhooks](https://stripe.com/docs/webhooks) allow us to respond to events we care about. This is done on the Stripe dashboard.

We create an endpoint which we add to Stripe, and select the events we would like to be notified of.

Using this approach, we stay ahead of everything going on with payments and are able to respond to activities that have occurred on Stripe, such as `payment_intents.payment_failed` or `setup_intents.canceled`.

This enables us to be act accordingly to activities that have occurred in our platform, such as recording a transaction in our database, notifing the user through email or in-app or in terrible situations retry the billing process.

## More Uses

![misc](https://res.cloudinary.com/cheapflix/image/upload/v1599468986/projects-images/medherd-stripe/Misc_1.png)
We also have more uses which are not covered thoroughly in this post, but are pretty simple to implement.

This includes

- **Get Plans** - Get plans to display to a user
- **Get User Subscriptions** - Display existing subscriptions to the user.
- **Cancel User Subscription** - Cancel an existing user subscription
- **Set User Card** - Set a default card, which the user uses for future payments

## Conclusion

This guide also doubles as a personal documentation to know how we have implemented payments. Expect this to be updated as time goes on.

You can also checkout the following Stripe tutorials to see how Stripe suggests to make use of the API.

- [Setup later payments](https://stripe.com/docs/payments/save-and-reuse)
- [Collect payment](https://stripe.com/docs/billing/subscriptions/fixed-price#collect-payment)
- [Accept a payment](https://stripe.com/docs/payments/accept-a-payment)
- [Subscription lifecycle and events](https://stripe.com/docs/billing/subscriptions/overview)
- [Safely implement 3D secure to improve security](https://stripe.com/docs/payments/3d-secure)
