import React from "react";
import { accounts } from "../config/accounts";

export function AccountsOverview() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">الحسابات الوطنية في منصة حصيف</div>
          <div className="page-subtitle">
            كل حساب يمثل منظورًا تشغيليًا مختلفًا، مع مشاركة جميع الحسابات في نفس المكوّنات الأساسية وفق صلاحيات محددة.
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
          </div>
        ))}
      </div>
    </div>
  );
}