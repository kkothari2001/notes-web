---
slug: serverless
title: Serverless Architecture
sidebar_position: 15
---

# Serverless Architecture

Serverless is a design pattern where cloud-based services are used to host and run applications so the underlying infrastructure gets abstracted away and there is no longer a need to maintain our own hardware.

## Relevant points in Serverless Architecture

- **Cloud Functions**: Small, self-contained pieces of code that are executed in response to a trigger. Cloud functions are stateless (do not retain informations between incovations), making them easy to scale and deploy.
- **Event-driven Trigger**: Cloud functionalities like cloud functions may be wired to trigger when certain events are sent to it. Like HTTP requests, database changes or messages from a messaging broker.
- **Pay-per-use pricing**: Since cloud resources are lightweight and easy to allocated/deallocate, the pricing model for these involves only paying for the time for which the resources were used. This might be beneficial if the resources is not used often, so we don't waste constant resources and money on it.
- **Automatic Scaling**: Cloud providers often provide the feature of automatic scaling, where the resources like compute, data storage and cloud function paralellism can be scaled automatically based on detected workload. This means the usage doesn't need to be constantly monitored.
- **Easy integration**: Usually a cloud-service provider like AWS or GCP provides a lot of different services for various needs (like compute, storage, big-data clusters, autorization and authentication services, managed datawarehouses). The integration of many services within a cloud-service provider is especially easy. One can also connect across multiple cloud-service providers.

Common cloud-service providers are GCP, Azure and AWS.

## Advantages of Serverless Architecture

- **Cost Savings**: Save on costs as we only pay for what we use.
- **Scalability**: Easily scale any resources on the cloud, either automatically or using a GUI.
- **Reliability and availability**: Cloud service providers often provide this in their SLAs (service level agreements).
- **Security**: Cloud service providers already have good security measures in place and it is easy to integrate further features like autorization and authentication.

## Disadvantages of Serverless Architecture

- **Vendor Lock-in**: We might become too dependant on the existing cloud service provider that it might be difficult to switch in the future if that is required.
- **Cold start issues**: Some services like cloud functions might have high latency when they are first invoked.
- **Complexity**: Might be more complex to manage if only half the architecture is on the cloud.
- **Debugging and Monitoring**: We might face issues with debugging and monitoring our application especially because we don't control the underlying architecture.
