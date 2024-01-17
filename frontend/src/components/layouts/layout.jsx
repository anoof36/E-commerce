import { Outlet } from "react-router-dom";

const RouterGuard = () => {
  return (
    <div
      style={{
        backgroundColor: "#AFC8AD",
        color: "black",
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        padding: "1rem 1rem",
      }}
    >
      <Outlet />
    </div>
  );
};

export default RouterGuard;
