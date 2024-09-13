import React from "react";

const Appbar = React.lazy(() => import("./components/Appbar/Appbar"))
const Sidebar = React.lazy(() => import("./components/Sidebar/Sidebar"));

export default function Layout({ children }: any) {
  return (
    <main className="layout">
      <Appbar />
      <div className="content">
        <aside className="aside">
          <Sidebar />
        </aside>
        <section className="context">
          {children}
        </section>
      </div>
    </main>
  );
}
