import React from "react";

const Appbar = React.lazy(() => import("./components/Appbar/Appbar"))
const Sidebar = React.lazy(() => import("./components/Sidebar/Sidebar"));

export default function Layout({ children }: any) {
  return (
    <main className="layout">
      <nav className="appbar">
        <Appbar />
      </nav>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <section className="main-section">
        {children}
      </section>
    </main>
  );
}
