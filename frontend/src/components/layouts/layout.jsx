import { Outlet } from "react-router-dom";

const RouterGuard = () => {
  return (
    <>
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
    </>
  );
};

export default RouterGuard;
