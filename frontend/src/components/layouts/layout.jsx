import { Outlet } from "react-router-dom";

const RouterGuard = () => {
  return (
    <div
      style={{
        backgroundColor: "#AFC8AD",
        color: "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Outlet />
    </div>
  );
};

export default RouterGuard;
