import React, { useEffect, useState } from "react";
import { fetchFundingOps } from "../mock/api.js";

export function FundingServicePage() {
  const [ops, setOps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchFundingOps()
      .then((data) => {
        if (active) setOps(data);
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">واجهة تشغيل: التمويل والرعايات</div>
          <div className="page-subtitle">
            نموذج لعمل حساب المانحين والقطاع الخاص والقطاع غير الربحي في إدارة فرص التمويل والرعايات
            وربطها بالمشاريع والفعاليات داخل المنصة.
          </div>
        </div>
      </div>
      <section className="section">
        <h3 className="section-title">فرص التمويل والرعايات المسجّلة</h3>
        <div className="card">
          <div style={{ overflowX: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>الرقم المرجعي</th>
                  <th>عنوان الفرصة</th>
                  <th>الجهة الطالبة</th>
                  <th>المبلغ التقديري</th>
                  <th>الجهة المانحة/الراعي</th>
                  <th>الحالة</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6}>جاري تحميل البيانات...</td>
                  </tr>
                ) : (
                  ops.map((f) => (
                    <tr key={f.id}>
                      <td>{f.id}</td>
                      <td>{f.title}</td>
                      <td>{f.requester}</td>
                      <td>{f.amount}</td>
                      <td>{f.donor}</td>
                      <td>
                        <span className="chip">{f.status}</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}