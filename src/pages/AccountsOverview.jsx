import React from "react";
import { accounts } from "../config/accounts";

export function AccountsOverview() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">الحسابات الوطنية في منصة حصيف</div>
          <div className="page-subtitle">
            كل حساب يمثل منظورًا تشغيليًا مختلفًا، مع مشاركة جميع الحسابات في نفس المكوّنات الأساسية وفق صلاحيات
            محددة.
          </div>
        </div>
      </div>
      <div className="grid-3">
        {accounts.map((a) => (
          <div className="card" key={a.id}>
            <div className="card-header">{a.name}</div>
            <div className="card-sub">{a.description}</div>
            <div className="chips-row">
              <span className="chip primary">{a.role}</span>
            </div>
            <div style={{ marginTop: "0.5rem", fontSize: "0.78rem" }}>
              <strong>المكوّنات الأبرز:</strong>
              <div className="chips-row">
                {a.focusModules.slice(0, 6).map((m) => (
                  <span key={m.id} className="chip">
                    {m.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}