import { Outlet } from "react-router-dom";
import AppHeader from "../common/header";
import Footer from "../common/footer";

const RouterGuard = () => {
  return (
    <>
      <AppHeader />
      <div
        id="router-guard"
        className="mx-auto"
        style={{
          width: "100dvw",
          maxWidth: "1200px",
          minHeight: "100vh",
          paddingTop: "30px",
          color: "black",
          display: "flex",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RouterGuard;
