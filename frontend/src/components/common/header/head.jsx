import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import style from "./index.module.css";

const AppHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  console.log("toggle:", isToggle);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={style.container}>
        <div>shop</div>
        {isMobile ? (
          <div>
            <button
              onClick={() => {
                setIsToggle(isToggle ? false : true);
              }}
            >
              {isToggle ? <IoCloseOutline /> : <TiThMenu />}
            </button>
            {/* Toggle Box */}
            {isToggle ? (
              <div className={style.toggle}>
                <ul>
                  <li>
                    cart <FaCartShopping />
                  </li>
                  <li>
                    profile <CgProfile />
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className={style.right_side}>
            <ul>
              <li>
                <FaSearch />
              </li>
              <li>
                <FaCartShopping />
              </li>
              <li>
                <CgProfile />
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default AppHeader;
