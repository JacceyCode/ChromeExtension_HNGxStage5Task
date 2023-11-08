import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

function AppLayout() {
  return (
    <main className="bg-background">
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
}

export default AppLayout;
