import React from "react";
import { accounts } from "../config/accounts";

export function Login() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">تسجيل الدخول إلى حسابك في حصيف</div>
          <div className="page-subtitle">
            واجهة تجريبية توضح أن المنصة تدعم الدخول بعدة أنواع من الحسابات الوطنية.
          </div>
        </div>
      </div>
      <div className="grid-3">
        {accounts.map((a) => (
          <div className="card" key={a.id}>
            <div className="card-header">{a.name}</div>
            <div className="card-sub">{a.role}</div>
            <button className="btn primary" type="button">
              الدخول كـ {a.short}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Signup() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">إنشاء حساب جديد</div>
          <div className="page-subtitle">
            نموذج أولي لطلب إنشاء الحساب، وسيتم استبداله لاحقاً بالنماذج المعتمدة.
          </div>
        </div>
      </div>
      <div className="card">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("هذا نموذج تجريبي.");
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "0.5rem",
              maxWidth: 480
            }}
          >
            <input
              required
              placeholder="اسم الجهة / الفرد"
              style={{
                padding: "0.35rem 0.5rem",
                borderRadius: 8,
                border: "1px solid #e5e7eb"
              }}
            />
            <input
              required
              type="email"
              placeholder="البريد الإلكتروني"
              style={{
                padding: "0.35rem 0.5rem",
                borderRadius: 8,
                border: "1px solid #e5e7eb"
              }}
            />
            <select
              required
              style={{
                padding: "0.35rem 0.5rem",
                borderRadius: 8,
                border: "1px solid #e5e7eb"
              }}
            >
              <option value="">نوع الحساب</option>
              {accounts.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
            <button
              className="btn primary"
              type="submit"
              style={{ width: "fit-content" }}
            >
              إرسال الطلب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}