import React from "react";
import { Search, ThreeDotsVertical } from "react-bootstrap-icons";
import style from "./index.module.css";

const AppHeader = () => {
  return (
    <>
      {/* GIVING WIDTH AND HEIGHT TO THE PARENT CONTAINER */}
      <header
        className={`${style.container} p-0`}
        style={{ height: "90px", width: "100vw" }}
      >
        {/* CREATING A DIV FOR TWO MAIN ROWS  */}
        <div className="row m-0 w-100 h-100 ">
          {/* TOP DIV, FOR LOGO AND SEARCH BAR */}
          <div className="navbar navbar-expand-lg col-12 h-75 d-flex justify-content-between">
            {/* DIV START, FOR LOGO */}
            <div className="col-3 d-flex justify-content-center align-items-center">
              <h1 className="m-0">VIBE</h1>
            </div>

            {/* DIV END, SEARCH AND TOGGLE BUTTON */}
            <div
              className="d-flex justify-content-between align-items-center col-7"
              style={{ height: "30px" }}
            >
              {/* SEARCH */}
              <form
                className="d-flex h-100 rounded-2 shadow"
              >
                <input
                  className="form-control border-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn p-0" type="submit">
                  <div className="mx-1">
                    <Search className="text-dark" />
                  </div>
                </button>
              </form>

              {/* TOGGLE BUTOON */}
              <button
                className="border-0 bg-transparent mx-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
               <ThreeDotsVertical />
              </button>
            </div>
          </div>

          {/* BOTTUM DIV, FOR NAVIGATION */}
          <div className="col-12 h-25 bg-danger">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
