https://skeletonreact.com/
https://getir-locals-api.herokuapp.com/products
https://redux-toolkit.js.org/introduction/getting-started
https://redux-toolkit.js.org/api/createSlice
https://redux.js.org/tutorials/essentials/part-2-app-structure
https://github.com/typicode/json-server
https://picsum.photos/200

products: {
    data: [],
    status: "idle | loading | error | success",
    filters: {
        status: "all",
        ...
    }
},

```jsx
import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={126}
    height={226}
    viewBox="0 0 126 226"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="1" rx="12" ry="12" width="124" height="124" />
    <path d="M 17 17 h 92 v 92 H 17 z" />
    <rect x="1" y="204" rx="2" ry="2" width="124" height="22" />
    <rect x="1" y="133" rx="2" ry="2" width="54" height="13" />
    <rect x="1" y="163" rx="2" ry="2" width="108" height="13" />
    <rect x="1" y="183" rx="2" ry="2" width="39" height="13" />
  </ContentLoader>
);

export default MyLoader;
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
