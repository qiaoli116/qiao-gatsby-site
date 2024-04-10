import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@components/layout"
import { useState } from "react"
import { Alert } from "flowbite-react";

const IndexPage: React.FC<PageProps> = () => {
  const [count, setCount] = useState(0);

  // Function to handle button click and increment count
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <Layout pageTitle="Home Page">
      <Alert color="warning">This is a guide using Gatsby, Flowibte, and Tailwind CSS.</Alert>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <div className="counter">
        <button onClick={handleIncrement}>Increment</button>
        <div>Count: {count}</div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
