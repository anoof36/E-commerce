import { useEffect, useState } from "react";
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

  console.log("header");
  return (
    <>
      <header className={style.container}>
        <div>left</div>
        {isMobile ? (
          <div>
            <button
              onClick={() => {
                setIsToggle(isToggle ? false : true);
              }}
            >
              toggle
            </button>
            {/* Toggle Box */}
            {isToggle ? (
              <div className={style.toggle}>
                <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className={style.right_side}>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default AppHeader;
