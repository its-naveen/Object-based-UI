import React from "react";

const Layout = React.lazy(() => import("./Layout"));

export default function App() {
  return (
    <Layout>
      <h1>Context</h1>
    </Layout>
  );
}
