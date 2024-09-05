import CustomizedAccordions from "../../components/Sidebar/Sidebar";

export default function Layout({ children }: any) {
  return (
    <main>
      <nav>

      </nav>
      <div className="content">
        <aside>
          <CustomizedAccordions />
        </aside>
        <section>
          {children}
        </section>
      </div>
    </main>
  )
}
