import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavItemCollapse = ({
  title,
  children,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (activeNavName !== name) {
      setIsChecked(false);
    }
  }, [activeNavName, name]);

  return (
    <div className="d-collapse d-collapse-arrow bg-base-200 min-h-0 rounded-none py-2">
      <input
        type="checkbox"
        className="min-h-0 py-0 hidden"
        checked={name === activeNavName}
        onChange={() => {
          setActiveNavName(name);
          setIsChecked(!isChecked);
        }}
      />
      <div
        className={`d-collapse-title cursor-pointer font-medium min-h-0 py-0 pl-0 flex items-center gap-x-2 text-lg ${isChecked 
          ? "font-bold text-primary"
          : "font-semibold text-[#A5A5A5]"
          }`}

          onClick={()=>{
            setActiveNavName(name);      setIsChecked(!isChecked);
          }}
      >
        {icon}
        {title}
        {!isChecked ? (
          <FaArrowUp className="text-[#A5A5A5]"  onClick={()=>{
               setActiveNavName(name);   setIsChecked(!isChecked);
          }}/>
        ): (
          <FaArrowDown className="text-primary"  />
        )}
        
        
      </div>
      <div className="d-collapse-content">
        {isChecked && 
        <div className="mt-2 flex flex-col gap-y-2">
        {children}
      </div>}
      </div>
    </div>
  );
};

export default NavItemCollapse;