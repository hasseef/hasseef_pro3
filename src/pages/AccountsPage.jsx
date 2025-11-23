import React from "react";
import { useNavigate } from "react-router-dom";
import { accounts } from "../config/accounts.js";

export function AccountsPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">الحسابات الوطنية + حساب إدارة المنصة</div>
          <div className="page-subtitle">
            تسعة حسابات متكاملة تمثل إدارة المنصة، إمارة المنطقة، هيئة التطوير، الجهة الحكومية،
            القطاع الخاص، القطاع غير الربحي، الجامعات، المانحين، والأفراد، مع صلاحيات مختلفة على
            نفس المكوّنات التشغيلية الأساسية.
          </div>
        </div>
      </div>
      <div className="grid-3">
        {accounts.map((a) => (
          <div key={a.id} className="card">
            <div className="card-header">
              {a.id === "platform_admin" ? "🔐 " : ""}
              {a.name}
            </div>
            <div className="card-sub">{a.description}</div>
            <div className="chips-row chips-wrap">
              {a.focusModules.map((m) => (
                <span key={m.id} className="chip light">
                  {m.label}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="btn outline full"
              onClick={() => navigate(`/accounts/${a.id}`)}
            >
              فتح لوحة التحكم
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}