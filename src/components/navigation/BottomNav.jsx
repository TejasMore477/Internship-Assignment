import React, { useState } from "react";
import { navItems } from './navItems';
import NavItem from './NavItem';

const BottomNav = ({ theme }) => {
  const [active, setActive] = useState("home");
  const isLight = theme === "light";

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full flex justify-around items-center h-16 z-50 border-t transition-colors duration-200
        ${isLight ? "bg-white border-gray-200" : "bg-[#232532] border-[#232532]"}
      `}
    >
      {navItems.map((item) => (
        <NavItem
          key={item.key}
          item={item}
          isActive={active === item.key}
          isLight={isLight}
          onClick={() => setActive(item.key)}
        />
      ))}
    </nav>
  );
};

export default BottomNav; 