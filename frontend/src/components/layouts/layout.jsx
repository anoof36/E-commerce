import { Outlet } from "react-router-dom";
import AppHeader from "../common/header";

const RouterGuard = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "2rem",
          backgroundColor: "blue",
          color: "black",
          width: "100dvw",
          height: "auto",
          display: "flex",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default RouterGuard;
