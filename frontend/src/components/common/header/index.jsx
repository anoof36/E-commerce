import { useEffect, useState } from "react";
import style from "./index.module.css";

const AppHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  console.log("toggle:", isToggle)
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
          <div className={style.toggle}>
            <button onClick={() => {
              setIsToggle(isToggle ? false : true)
            }}>toggle</button>
          </div>
        ) : (
          <div className={style.right_side}>
            <div>one</div>
            <div>two</div>
            <div>three</div>
          </div>
        )}
      </header>
    </>
  );
};

export default AppHeader;
