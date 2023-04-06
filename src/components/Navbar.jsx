import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const Icon = darkMode ? (
    <MdDarkMode style={{ color: "white" }} />
  ) : (
    <MdOutlineDarkMode />
  );

  useEffect(()=>{
    if (darkMode === false){
        document.body.classList.add('light-mode')
        
    } else{
        document.body.classList.remove('light-mode')
    }
  },[darkMode]);

  return (
    <div className="d-flex justify-content-between px-3 py-4 bg-light-blue">
      <p className="text-color-white m-0">Where in the world?</p>
      <div
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="d-flex align-items-center gap-2"
      >
        {Icon}
        <p className="text-color-white m-0">Dark Mode</p>
        <p className="text-color-white m-0 lightt">Light Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
