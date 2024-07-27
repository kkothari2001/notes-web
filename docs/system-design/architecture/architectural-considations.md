---
slug: considerations
sidebar_position: 2
---

# Architectural Considerations

In this section we look at the guidelines that should drive the architectural decisions we make. They sort of make a checklist of things we should take into consideration when designing software architectures.

## Quality Attributes

Quality Attributes (QAs) are testable factors that help quantify how well the software meets the needs of the stakeholders. These don't only mean non-functional requirements but also things present in the service-level agreement.

Examples include:

- Availability
- Reliability
- Performance
- Security
- Scalability
- Caching... etc.

One must sit down with the stakeholders and decide what the important QAs are. Our arch design decisions are what translate these QAs into the software we create. Sometimes, these requirements may conflict, like ease-of-access vs security, then it becomes important to define a clear balance of the conflicting requirements. Many times there are also real-life constraints involved like time, budget and developer skillset.

## Architectural Styles

These are sort of patterns that have often been used in system design to create software that adheres to a particular set of QAs. Similar to how we have design patterns in component-level code, architectural patterns solve problems commonly faced while designing software.

Examples include:

- Client Server
- Component-based
- Layered Architecture
- Message Bus
- MVC Arch
- N-Tier

Each architectural pattern defines some things like:

- Required subsystems and components
- Relationships between them
- Conditions/Limitations on how these systems are combined

Hence we must choose an arch pattern based on our requirements and constraints.

## Application Types

In a way, application types define exactly what we are building. Is it a mobile app? Or a web app? Or an API? This decision is also important in designing the architecture.

Common application types:

- Mobile apps: Hardware limitations
- Rich Client apps: As a stand-alone application on a device. Use the device's memory and compute resources.
- Rich Internet apps: Can be deployed to the internet, but also have enough functionality to function on their own. Needs additional security as data is being transferred over the internet.
- Web apps: Need constant internet connection.
- Service apps: Used by people as well as other programs.

## Deployment Strategy

Another important consideration. We must decide where and how we are deploying the etire software. On the cloud? On personal servers? Is it a monolithic application that requires a single deployment strategy? Or does the software have multiple individual microservices that need to deployed seperately? If deployed seperately what are the security and error handling measures we are taking into account?

## Architectural Hotspots

These are some often used points that can be used to improve your software and build a more effective architecture. Keep them in mind 🙂

- Caching
- Communication
- User Experience
- Exception Handling
- Concurrency
- Logging
- Validation
- Data Access
- Configuration Management
- Secret Management
