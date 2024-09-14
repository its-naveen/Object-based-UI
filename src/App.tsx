import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import { ToastProvider } from "./hooks/toaster";
const Layout = React.lazy(() => import("./Layout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Fallback = React.lazy(() => import("./components/Fallback/Fallback"));
const UserCreation = React.lazy(() => import("./pages/UserCreation/UserCreation"));
const Setting = React.lazy(() => import("./pages/Setting/Setting"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

export default function App() {
  return (
    <ToastProvider>
      <Suspense fallback={<Fallback />}>
        <Layout>
          <Routes>
            <Route path="/" index element={<Dashboard />} />
            <Route path="/user-creation" element={<UserCreation />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </ToastProvider>
  );
}
