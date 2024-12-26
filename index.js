```javascript
// pages/about.js

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
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