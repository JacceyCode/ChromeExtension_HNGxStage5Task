import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

function AppLayout() {
  return (
    <main className="m-auto max-w-[90rem] bg-background">
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
}

export default AppLayout;
