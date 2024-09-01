import { Outlet } from "react-router-dom";

const RouterGuard = () => {
  return (
    <div
      style={{
        
        color: "black",
        width: "100dvw",
        display: "flex",
        padding: "1rem 1rem",
      }}
    >
      <Outlet />
    </div>
  );
};

export default RouterGuard;
