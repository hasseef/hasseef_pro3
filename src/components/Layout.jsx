import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { accounts } from "../config/accounts";

export function Layout({ children, currentAccountId, onSelectAccount }) {
  const navigate = useNavigate();

  const handleAccountClick = (account) => {
    onSelectAccount?.(account.id);
    navigate(`/accounts/${account.id}`);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-left">
          <div className="topbar-logos">
            <img src="/logos/hasseef.png" alt="حصيف" />
            <img src="/logos/vision2030.png" alt="رؤية 2030" />
            <img src="/logos/talbiya.png" alt="تلبية" />
          </div>
          <div className="topbar-title">
            <span className="topbar-title-main">منصة حصيف الوطنية</span>
            <span className="topbar-title-sub">
              منصة وطنية للتكامل التنموي وتمكين المشاركة المجتمعية وفق رؤية 2030
            </span>
          </div>
        </div>
        <nav className="topbar-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "topbar-link" + (isActive ? " active" : "")
            }
          >
            الواجهة الرئيسية
          </NavLink>
          <NavLink
            to="/accounts"
            className={({ isActive }) =>
              "topbar-link" + (isActive ? " active" : "")
            }
          >
            الحسابات
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              "topbar-link" + (isActive ? " active" : "")
            }
          >
            الدخول
          </NavLink>
          <NavLink
            to="/about-government"
            className={({ isActive }) =>
              "topbar-link" + (isActive ? " active" : "")
            }
          >
            حصيف والقطاع الحكومي
          </NavLink>
        </nav>
      </header>

      <div className="layout-main">
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-title">الحسابات الوطنية</div>
            {accounts.map((a) => (
              <button
                key={a.id}
                className={
                  "account-button" +
                  (currentAccountId === a.id ? " active" : "")
                }
                onClick={() => handleAccountClick(a)}
                type="button"
              >
                <div>
                  {a.short}
                  <div>
                    <span>{a.role}</span>
                  </div>
                </div>
                <span>›</span>
              </button>
            ))}
          </div>
        </aside>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}