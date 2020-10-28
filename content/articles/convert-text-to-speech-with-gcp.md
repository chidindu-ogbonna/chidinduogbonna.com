---
title: Convert Text-To-Speech with Google Cloud Platform
description: 'Orchestrating cloud functions with cloud tasks'
image: 'https://res.cloudinary.com/cheapflix/image/upload/v1603313513/Cloud_tasks_and_cloud_functions.png'
tags:
  - Use Case
isExternal: false
published: false
createdAt: October 18,2020
featured: true
---

I thought of thie method of efficiently invoking functions - inspired by Apache Airflow, which is used for orchestrating workflows .

## What is a Cloud Function

Functions can be Event triggered or HTTP triggered (as a RESTful service). A common use of this is you have series of tasks that your functions make use of

## What is a Cloud Tasks

## Without a Cloud Tasks

Without a task queue - all functions are subscribed to that event and are triggered. That means 3 functions would be invoked at the same time. This is expensive, for an application with a lot of traffic, and also a waste for functions that perform trivial tasks.

![without_a_task_queue.png](https://res.cloudinary.com/cheapflix/image/upload/v1603316813/Without_a_task_queue.png)

## With Cloud Tasks

With a task queue - one function subscribes to that event, and then triggers other functions to perform long computational tasks, if they **_need_** to. This is resource efficient, and cost effective. Looks a bit complicated (it's not really) but it's a useful way of managing resources.

![with_a_task_queue.png](https://res.cloudinary.com/cheapflix/image/upload/v1603316813/With_a_task_queue.png)
