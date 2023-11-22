import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  return (
    <main className="bg-background">
      <ScrollToTop />
      <Outlet />
    </main>
  );
}

export default AppLayout;
