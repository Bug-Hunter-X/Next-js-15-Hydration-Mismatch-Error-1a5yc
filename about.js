```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error if the data is not fetched on the client side or the component is not optimized for server-side rendering.
  const data = fetchData(); // This would fetch data from an API or some other external source.

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p> {/* This will render the fetched data */}
    </div>
  );
}

function fetchData() {
  // Simulate fetching data from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'This is some data from an API' });
    }, 500);
  });
}
```