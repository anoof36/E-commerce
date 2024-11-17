import React from "react";
import { List, Chat, Envelope, PersonCircle } from "react-bootstrap-icons";
import ThemeToggle from "../../../../../components/common/themeButton";

const AdminHeader = () => {
  return (
    <div className="container-fluid p-1" style={{ backgroundColor: "#3f4d67" }}>
      <div className="nav navbar navber-expand-lg navbar-light">
        <div className="d-flex container justify-content-between w-100">
          <div className="d-flex gap-3 ">
            <div className=""> VIBE</div>
            <div className="">
              <List />
            </div>
          </div>

          {/* right side of the header */}
          <div className="d-flex gap-3 align-items-center">
            <ThemeToggle />
            <Envelope />
            <Chat />
            <PersonCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
