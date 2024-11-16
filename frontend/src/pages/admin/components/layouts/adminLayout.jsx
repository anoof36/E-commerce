import { Outlet } from "react-router-dom";
import AdminHeader from "../commen/header"


const RouterGuard = () => {
  return (
    <>
     <AdminHeader />
      <div
        id="router-guard"
        className="mx-auto"
        style={{
          width: "100dvw",
          maxWidth: "1200px",
          minHeight: "100vh",
          color: "black",
          display: "flex",
        }}
      >
        <Outlet />
      </div>
     
    </>
  );
};

export default RouterGuard;
