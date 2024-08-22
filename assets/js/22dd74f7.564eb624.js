"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[1567],{5226:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome to my notes!","href":"/","docId":"intro","unlisted":false},{"type":"category","label":"Career","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Stop being a junior","href":"/career/stop-being-a-junior","docId":"career/stop-being-a-junior","unlisted":false}],"href":"/career"},{"type":"category","label":"Server Side Rendering","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Then vs Now: CSR vs SSR","href":"/ssr/csr-vs-ssr","docId":"ssr/then-vs-now","unlisted":false},{"type":"category","label":"Next.js","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Intro to Next.js","href":"/ssr/next/intro-to-next","docId":"ssr/next/next-intro","unlisted":false}],"href":"/ssr/next"}],"href":"/ssr"},{"type":"category","label":"System Design","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/system-design/getting-started","docId":"system-design/getting-started","unlisted":false},{"type":"category","label":"Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture and SDLC","href":"/system-design/architecture/sdlc","docId":"system-design/architecture/sdlc","unlisted":false},{"type":"link","label":"Architectural Considerations","href":"/system-design/architecture/considerations","docId":"system-design/architecture/architectural-considerations","unlisted":false},{"type":"link","label":"Architectural Patterns","href":"/system-design/architecture/patterns","docId":"system-design/architecture/architectural-patterns","unlisted":false},{"type":"link","label":"Layered Architecture","href":"/system-design/architecture/layered","docId":"system-design/architecture/layered","unlisted":false},{"type":"link","label":"N-Tier Architecture","href":"/system-design/architecture/n-tier","docId":"system-design/architecture/n-tier","unlisted":false},{"type":"link","label":"MVC Architecture","href":"/system-design/architecture/mvc","docId":"system-design/architecture/mvc","unlisted":false},{"type":"link","label":"MVVM Architecture","href":"/system-design/architecture/mvvm","docId":"system-design/architecture/mvvm","unlisted":false},{"type":"link","label":"Client-Server Architecture","href":"/system-design/architecture/client-server","docId":"system-design/architecture/client-server","unlisted":false},{"type":"link","label":"Peer to Peer Architecture","href":"/system-design/architecture/p2p","docId":"system-design/architecture/p2p","unlisted":false},{"type":"link","label":"Broker Architecture","href":"/system-design/architecture/broker","docId":"system-design/architecture/broker","unlisted":false},{"type":"link","label":"Pipe and Filter Architecture","href":"/system-design/architecture/pipe-and-filter","docId":"system-design/architecture/pipe-and-filter","unlisted":false},{"type":"link","label":"Event Driven Architecture","href":"/system-design/architecture/event-driven","docId":"system-design/architecture/event-driven","unlisted":false},{"type":"link","label":"Publisher Subscriber Architecture","href":"/system-design/architecture/pub-sub","docId":"system-design/architecture/pub-sub","unlisted":false},{"type":"link","label":"Hexagonal Architecture","href":"/system-design/architecture/hexagonal","docId":"system-design/architecture/hexagonal","unlisted":false},{"type":"link","label":"Serverless Architecture","href":"/system-design/architecture/serverless","docId":"system-design/architecture/serverless","unlisted":false},{"type":"link","label":"Monolithic Architecture","href":"/system-design/architecture/monolitic","docId":"system-design/architecture/monolithic","unlisted":false},{"type":"link","label":"Microservices Architecture","href":"/system-design/architecture/microservices","docId":"system-design/architecture/microservices","unlisted":false},{"type":"link","label":"Migrating Monolithic To Microservices","href":"/system-design/architecture/migrating-monolithic-to-microservices","docId":"system-design/architecture/migrating-monolithic-to-microservices","unlisted":false},{"type":"link","label":"Microfrontends","href":"/system-design/architecture/microfrontends","docId":"system-design/architecture/microfrontends","unlisted":false}],"href":"/system-design/architecture"}],"href":"/system-design"}]},"docs":{"career/stop-being-a-junior":{"id":"career/stop-being-a-junior","title":"Stop being a junior","description":"Notes on a blog about why you shouldn\'t be a junior","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Welcome to my notes!","description":"This is my attempt to make my notes available to myself and other people over the internet.","sidebar":"tutorialSidebar"},"ssr/next/next-intro":{"id":"ssr/next/next-intro","title":"Intro to Next.js","description":"History of Next.js","sidebar":"tutorialSidebar"},"ssr/then-vs-now":{"id":"ssr/then-vs-now","title":"Then vs Now: CSR vs SSR","description":"When rendering a single-page application (SPA), how it has always worked is that the HTML file sent over the network has been mostly empty. Along with it there was usually a large javascript file (bundle) sent.","sidebar":"tutorialSidebar"},"system-design/architecture/architectural-considerations":{"id":"system-design/architecture/architectural-considerations","title":"Architectural Considerations","description":"In this section we look at the guidelines that should drive the architectural decisions we make. They sort of make a checklist of things we should take into consideration when designing software architectures.","sidebar":"tutorialSidebar"},"system-design/architecture/architectural-patterns":{"id":"system-design/architecture/architectural-patterns","title":"Architectural Patterns","description":"Types of architectural structures","sidebar":"tutorialSidebar"},"system-design/architecture/broker":{"id":"system-design/architecture/broker","title":"Broker Architecture","description":"A large software architecture with many running parts often is divided into sections offering a specific service. Now, how would the consumer of a service figure out the location of the service provider in order to communicate with them? You could write their locations in the code itself, but every time you the service provider, you will have to update the code of each and every consumer which is a headache!","sidebar":"tutorialSidebar"},"system-design/architecture/client-server":{"id":"system-design/architecture/client-server","title":"Client-Server Architecture","description":"Client-Server Architecture is a 2-layered (and usually 2-tiered) architecture. The clients either requests data from the server or uses a service that the server provides. A single server can have many clients connected to it.","sidebar":"tutorialSidebar"},"system-design/architecture/event-driven":{"id":"system-design/architecture/event-driven","title":"Event Driven Architecture","description":"In event driven architecture, components of the system by sending and receiving events rather than calling each other\'s functions or API. This is an asynchronous method of communication.","sidebar":"tutorialSidebar"},"system-design/architecture/hexagonal":{"id":"system-design/architecture/hexagonal","title":"Hexagonal Architecture","description":"Hexagonal Architecture also known as ports and adapters architecture, in which the core functionality (business logic) of the application is seperated from the external dependancies of the system (like databases, other services and external APIs). This is to provide a clear seperation of the business logic from the components that connect the application to the abstract world. For example, let\'s take a stock market analysis application, here the business logic can be (should be) seperated out from the thin client UI. This allows the functionality to be tested seperately than the UI and this decoupling allows both codebases to grow independently as long as they agree on a single API.","sidebar":"tutorialSidebar"},"system-design/architecture/layered":{"id":"system-design/architecture/layered","title":"Layered Architecture","description":"The system is built as a set of layers or abstractions over each other. Typically, a module on a certain layer can only access the abstractions offered by layer(s) below it. Each layer provides a consistent set of services and API which needs to be documented correctly.","sidebar":"tutorialSidebar"},"system-design/architecture/microfrontends":{"id":"system-design/architecture/microfrontends","title":"Microfrontends","description":"The microfrontend architecture involves the breaking down of the frontend of a website/application into smaller, independent components, or \\"micro-frontends\\". It is similar to microservices but it is applied to the frontend of the application rather than the backend.","sidebar":"tutorialSidebar"},"system-design/architecture/microservices":{"id":"system-design/architecture/microservices","title":"Microservices Architecture","description":"Microservices Architecture involves the splitting up of the software system into multiple smaller sized components that can be developed and deployed seperately. The aim of the microservices architecture is to improve the scalability, flexibility and maintainability of a system by splitting up into individual testable components.","sidebar":"tutorialSidebar"},"system-design/architecture/migrating-monolithic-to-microservices":{"id":"system-design/architecture/migrating-monolithic-to-microservices","title":"Migrating Monolithic To Microservices","description":"Migrating monolithic applications to a microservices architecture needs careful planning and execution. One needs to break down a large, complex application into smaller independent components which can be deployed and executed independently.","sidebar":"tutorialSidebar"},"system-design/architecture/monolithic":{"id":"system-design/architecture/monolithic","title":"Monolithic Architecture","description":"The architecture of a software system with all of its componenets very tightly connected and interdependant is referred to as monolithic architecture. This includes the UI, business logic and data storage. It was the most commonly used architecture for the most amount of time, until microservices came along.","sidebar":"tutorialSidebar"},"system-design/architecture/mvc":{"id":"system-design/architecture/mvc","title":"MVC Architecture","description":"An architecture pattern where the application is divided into 3 parts.","sidebar":"tutorialSidebar"},"system-design/architecture/mvvm":{"id":"system-design/architecture/mvvm","title":"MVVM Architecture","description":"Somewhat similar to MVC arch, but now the Model is completely abstracted away from the View through the ViewModel. The functionality of the 3 parts now is:","sidebar":"tutorialSidebar"},"system-design/architecture/n-tier":{"id":"system-design/architecture/n-tier","title":"N-Tier Architecture","description":"N-Tier or multitier architecture rely on the application being split up into multiple phases/tiers. Tiers refer to physical partitions and are often used in conjunction with multilayered application where each tier deploys a particular layer, although this might not be the case.","sidebar":"tutorialSidebar"},"system-design/architecture/p2p":{"id":"system-design/architecture/p2p","title":"Peer to Peer Architecture","description":"Unlike client-server architecture, in P2P architecture there is no centralized authority that makes decisions and distributes workloads. Nodes in the system can act as both client and server. All workload is distributed (mostly) equally in the system. Each node both contributes to the resources of the system and also consumes the resources of other nodes, with the exception of edge nodes which only consume resources in the system.","sidebar":"tutorialSidebar"},"system-design/architecture/pipe-and-filter":{"id":"system-design/architecture/pipe-and-filter","title":"Pipe and Filter Architecture","description":"Sometimes it can be advantageous to think of a system as a series of transformations on data one after the other. Each transformation can be understood as a standalone and reusable component. These transformations can be combined in whatever order is required. The pipe and filter architecture is a simple architecture useful for representing data pipelines where each filter performs a specific transformation on its input data and passes along the output to the next filter through a pipe.","sidebar":"tutorialSidebar"},"system-design/architecture/pub-sub":{"id":"system-design/architecture/pub-sub","title":"Publisher Subscriber Architecture","description":"This is a slight variation over the event-driven architecture. Here, instead of having events specifically sent to a particular target, the information is related to multiple components who have \\"subscribed\\" to that information. There are 3 important terms related to this architecture.","sidebar":"tutorialSidebar"},"system-design/architecture/sdlc":{"id":"system-design/architecture/sdlc","title":"Architecture and SDLC","description":"Architecture speaks about how the various major parts of the software are divided amongst each other and subsequently interconnected.","sidebar":"tutorialSidebar"},"system-design/architecture/serverless":{"id":"system-design/architecture/serverless","title":"Serverless Architecture","description":"Serverless is a design pattern where cloud-based services are used to host and run applications so the underlying infrastructure gets abstracted away and there is no longer a need to maintain our own hardware.","sidebar":"tutorialSidebar"},"system-design/getting-started":{"id":"system-design/getting-started","title":"Getting Started","description":"Software design is the process of planning the structure and the make-up of the various parts of the software, such that it correctly and efficiently meets its requirements. It is one of the most important parts of the Software Development Lifecycle (SDLC), and it provides a high-level overview of the software to be created.","sidebar":"tutorialSidebar"}}}}')}}]);