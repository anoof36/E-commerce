import React from "react";
import { List, Chat, Envelope, PersonCircle } from "react-bootstrap-icons";

const AdminHeader = () => {
  return (
    <div className="container-fluid p-1 bg-primary">
      <div className="nav navbar navber-expand-lg navbar-light">
        <div className="d-flex container justify-content-between w-100">
          <div className="d-flex gap-3 ">
            <div className=""> VIBE</div>
            <div className="">
              <List />
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="">
              <Chat />
            </div>
            <div className="">
              <Envelope />
            </div>
            <div className="">
              <PersonCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
