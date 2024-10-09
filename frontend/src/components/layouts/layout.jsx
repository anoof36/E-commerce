import { Outlet } from "react-router-dom";

const RouterGuard = () => {
  return (
    <>
      <div
      className="mx-auto" 
        style={{
          maxWidth: "1200px",
          minHeight: "100vh",
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
