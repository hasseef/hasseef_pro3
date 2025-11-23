import React from "react";
import { accounts } from "../config/accounts";

export function Login() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">تسجيل الدخول إلى حسابك في حصيف</div>
          <div className="page-subtitle">
            هذه واجهة تجريبية توضح أن المنصة تدعم الدخول بعدة أنواع من الحسابات الوطنية.
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
            لاستخدام المنصة واقتراح الحلول أو تقديم المشاريع أو التمويل، يمكن للجهات والأفراد طلب إنشاء حساب عبر
            النماذج المعتمدة.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">نموذج أولي لإنشاء حساب</div>
        <div className="card-sub">
          يوضّح الحقول الرئيسية فقط، ويمكن استبداله لاحقًا بالنموذج النهائي من قبل فريق التطوير.
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("هذا نموذج توضيحي فقط.");
          }}
        >
          <div style={{ display: "grid", gap: "0.6rem", maxWidth: 480 }}>
            <input
              required
              placeholder="اسم الجهة / الفرد"
              style={{ padding: "0.4rem 0.6rem", borderRadius: 8, border: "1px solid #e5e7eb" }}
            />
            <input
              required
              type="email"
              placeholder="البريد الإلكتروني"
              style={{ padding: "0.4rem 0.6rem", borderRadius: 8, border: "1px solid #e5e7eb" }}
            />
            <select
              required
              style={{ padding: "0.4rem 0.6rem", borderRadius: 8, border: "1px solid #e5e7eb" }}
            >
              <option value="">نوع الحساب</option>
              {accounts.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
            <button className="btn primary" type="submit" style={{ width: "fit-content" }}>
              إرسال طلب إنشاء الحساب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}