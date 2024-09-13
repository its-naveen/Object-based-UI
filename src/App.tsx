import React, { Suspense } from "react";
import { Routes, Route } from "react-router";

const Layout = React.lazy(() => import("./Layout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Fallback = React.lazy(() => import("./components/Fallback/Fallback"));
const UserCreation = React.lazy(() => import("./pages/UserCreation/UserCreation"));
const Setting = React.lazy(() => import("./pages/Setting/Setting"));

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Layout>
        <Routes>
          <Route path="/" index element={<Dashboard />} />
          <Route path="/user-creation" element={<UserCreation />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}
