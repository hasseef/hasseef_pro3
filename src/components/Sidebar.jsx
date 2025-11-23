import React from "react";
import { NavLink } from "react-router-dom";
import hasseefLogo from "../assets/hasseef.png";
import talbiyaLogo from "../assets/talbiya.png";
import visionLogo from "../assets/Vision2030.png";

const navItems = [
  { to: "/", label: "الرئيسية", icon: "🏛" },
  { to: "/accounts", label: "الحسابات الوطنية", icon: "🧩" },
  { to: "/core-modules", label: "المكوّنات الأساسية", icon: "⚙️" },
  { to: "/services", label: "الخدمات التشغيلية", icon: "📋" },
  { to: "/vision2030", label: "الرؤية 2030 والتكامل الحكومي", icon: "🎯" },
  { to: "/about", label: "عن منصة حصيف", icon: "ℹ️" }
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-row">
          {hasseefLogo && (
            <img src={hasseefLogo} alt="حصيف" className="logo-main-img" />
          )}
          <div className="logo-text-block">
            <div className="logo-main">حصيف</div>
            <div className="logo-sub">
              المنصة الوطنية للتكامل التنموي المرتبطة ببرامج رؤية المملكة 2030
            </div>
          </div>
        </div>
        <div className="logo-partners">
          {visionLogo && (
            <span>
              <img src={visionLogo} alt="رؤية 2030" className="logo-badge-img" />
            </span>
          )}
          {talbiyaLogo && (
            <span>
              <img src={talbiyaLogo} alt="مبادرة تلبية" className="logo-badge-img" />
            </span>
          )}
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