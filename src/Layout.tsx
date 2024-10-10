import React from "react";
import { Outlet } from "react-router";

const Appbar = React.lazy(() => import("./components/Appbar/Appbar"))
const Sidebar = React.lazy(() => import("./components/Sidebar/Sidebar"));

export default function Layout() {
  return (
    <main className="layout">
      <nav className="appbar">
        <Appbar />
      </nav>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <section className="main-section">
        <Outlet />
      </section>
    </main>
  );
}
