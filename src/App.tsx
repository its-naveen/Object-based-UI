import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import { ToastProvider } from "./hooks/toaster";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
const Layout = React.lazy(() => import("./Layout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Fallback = React.lazy(() => import("./components/Fallback/Fallback"));
const UserCreation = React.lazy(() => import("./pages/UserCreation/UserCreation"));
const Media = React.lazy(() => import("./pages/Media/Media"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

export default function App() {
  return (
    <ToastProvider>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/user-creation" element={<UserCreation />} />
            <Route path="/media" element={<Media />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ToastProvider>
  );
}
