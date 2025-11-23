import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "الرئيسية", icon: "🏛" },
  { to: "/accounts", label: "الحسابات الوطنية", icon: "🧩" },
  { to: "/core-modules", label: "المكوّنات الأساسية", icon: "⚙️" },
  { to: "/vision2030", label: "الرؤية 2030 والتكامل الحكومي", icon: "🎯" },
  { to: "/about", label: "عن منصة حصيف", icon: "ℹ️" }
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-mark">
          <span className="logo-main">حصيف</span>
          <span className="logo-sub">برنامج شباب المملكة حصيف الوطني</span>
        </div>
        <div className="logo-partners">
          <span>رؤية 2030</span>
          <span>مبادرة تلبية</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              isActive ? "nav-item nav-item-active" : "nav-item"
            }
          >
            <span className="nav-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}