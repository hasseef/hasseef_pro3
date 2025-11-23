import React from "react";
import { coreModules } from "../config/coreModules.js";

export function CoreModulesPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">المكوّنات الأساسية لمنصة حصيف (19 مكوّناً)</div>
          <div className="page-subtitle">
            هذه المكوّنات تمثّل نظام التشغيل القياسي للمنصة، وتُستخدم في جميع الحسابات مع اختلاف الصلاحيات.
          </div>
        </div>
      </div>
      <div className="grid-3">
        {coreModules.map((m) => (
          <div key={m.id} className="card">
            <div className="card-header">{m.label}</div>
            <div className="card-sub">{m.description}</div>
            <div className="chips-row">
              <span className="chip primary">مكوّن أساسي</span>
              <span className="chip">{m.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}