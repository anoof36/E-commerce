import { Outlet } from "react-router-dom";

const RouterGuard = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "2rem",
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
