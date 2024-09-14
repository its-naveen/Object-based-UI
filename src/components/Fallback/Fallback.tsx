import React from "react";
const Icons = React.lazy(() => import("../../icons"));

export default function Fallback() {
  return (
    <section role="fallback">
      <Icons iconKey="loader" type="dark" />
    </section>
  );
}
