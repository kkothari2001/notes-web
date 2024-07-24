---
sidebar_position: 1
slug: csr-vs-ssr
---

# Then vs Now: CSR vs SSR

When rendering a single-page application (SPA), how it has always worked is that the HTML file sent over the network has been mostly empty. Along with it there was usually a large javascript file (bundle) sent.

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script src="/index.js"></script>
  </body>
</html>
```

Once both the HTML and JS have been downloaded and parsed, React starts rendering the DOM nodes inside the empty `div` with the id "root". All while this happens the user is staring at a blank screen.

As the app grows, every few kbs you add to the bundle increases the time before which the user sees something tangible on the screen.

:::important
Always remember, one of the most taxing work done on the browser is the rendering and manipulation of the DOM. If we can avoid that, it almost always leads to a boost in performance. This is the reason React uses a virtual DOM to track changes required before actually changing the real DOM.
:::

SSR aims to avoid exactly this. If we are able to directly send some html (with CSS obviously) to the browser:

- Not only is the work of rendering all the new DOM nodes no longer needed (which saves a lot of time)
- But also the user no longer has to look at a blank screen while the JS is downloaded and parsed.

One of the ways in which SSR can work:

![SSR Flow](./assets/ssr-flow.png)

Here the HTML (and hence DOM nodes) will already be present. But then when the attached JS bundle is downloaded and parsed, the code assumes control of the nodes. This process of adding interactivity and event handlers to HTML is called `hydration`.

:::note
There are other ways of conducting SSR too, one of them is to create the HTML files when the project is built in the first place. This is called Static Site Generation (SSG) and that is what makes this website possible!
:::
