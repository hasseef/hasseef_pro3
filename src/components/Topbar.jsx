import React from "react";
import { useLocation } from "react-router-dom";

const titleMap = {
  "/": "المنصة الوطنية للتكامل التنموي وتمكين المشاركة المجتمعية",
  "/accounts": "الحسابات الوطنية والحساب الإداري",
  "/core-modules": "المكوّنات الأساسية لنظام حصيف",
  "/services": "الخدمات التشغيلية الفعلية في المنصة",
  "/vision2030": "التكامل مع رؤية المملكة 2030 والجهات الحكومية",
  "/about": "عن منصة حصيف"
};

export function Topbar() {
  const location = useLocation();
  const title = titleMap[location.pathname] || "منصة حصيف";

  return (
    <header className="topbar">
      <div>
        <div className="topbar-title">{title}</div>
        <div className="topbar-subtitle">
          طبقة تشغيل وطنية توحّد الحلول والمشاريع والفعاليات والتمويل بين إمارات المناطق والجهات
          الحكومية والقطاعين الخاص وغير الربحي والجامعات والمانحين والأفراد.
        </div>
      </div>
      <div className="topbar-actions">
        <button type="button" className="btn ghost">
          تسجيل الدخول
        </button>
        <button type="button" className="btn primary small">
          إنشاء حساب
        </button>
      </div>
    </header>
  );
}