import Appbar from "./components/Appbar/Appbar";

export default function Layout({ children }: any) {
  return (
    <main>
      <Appbar />
      <div className="content">
        {/* <aside></aside> */}
        <section>
          {children}
        </section>
      </div>
    </main>
  )
}
