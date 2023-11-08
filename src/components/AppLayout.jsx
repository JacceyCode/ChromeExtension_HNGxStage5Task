import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="bg-background">
      <Outlet />
    </main>
  );
}

export default AppLayout;
