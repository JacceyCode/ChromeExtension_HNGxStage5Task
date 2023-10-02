import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <main className="bg-background">
      <Outlet />
      <Footer />
    </main>
  );
}

export default AppLayout;
