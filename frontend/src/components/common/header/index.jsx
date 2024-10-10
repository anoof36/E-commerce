import React, { useState } from "react";
import { XLg, Search, ThreeDotsVertical } from "react-bootstrap-icons";
import Button from "../button";
import style from "./index.module.css";

const AppHeader = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

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
          <div className="col-12 h-75 d-flex justify-content-between align-items-center p-0">
            {/* DIV START, FOR LOGO */}
            <div className="col-3 d-flex justify-content-center align-items-center">
              <h1 className="m-0">VIBE</h1>
            </div>

            {/* DIV END, SEARCH AND TOGGLE BUTTON */}
            <div
              className="d-flex justify-content-between align-items-center col-7 gap-5 pe-2"
              style={{ height: "30px" }}
            >
              {/* SEARCH */}
              <form className="d-flex h-100 rounded-2 shadow">
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

              {/* TOGGLE BUTTON */}
              <div className="position-relative">
                <Button
                  onClick={togglePopup}
                  ariaExpanded={isPopupOpen}
                  ariaLabel="Toggle popup menu"
                >
                  <ThreeDotsVertical />
                </Button>

                {isPopupOpen && (
                  <div
                    className="d-flex flex-column position-absolute rounded-1"
                    style={{
                      top: 0,
                      right: 0,
                      boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px",
                      backgroundColor: "white",
                      width: "400px",
                      zIndex: 99,
                    }}
                  >
                    <div className="align-self-end">
                      <button
                        className="border-0 pe-1"
                        onClick={togglePopup}
                        aria-label="Close popup"
                      >
                        <XLg style={{ color: "black", fontSize: "0.9em" }} />
                      </button>
                    </div>
                    <div className="align-self-end mb-5">
                      <ul className="list-unstyled p-3">
                        <li>
                          <a href="#">Menu Item 1</a>
                        </li>
                        <li>
                          <a href="#">Menu Item 2</a>
                        </li>
                        <li>
                          <a href="#">Menu Item 3</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* BOTTOM DIV, FOR NAVIGATION */}
          <nav className="navbar navbar-expand p-0">
            <div className="container-fluid">
              <ul className="navbar-nav ms-auto me-5 d-flex justify-content-between col-7 col-md-6 col-lg-3">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
