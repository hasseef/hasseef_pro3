import React, { useEffect, useState } from "react";
import { fetchEvents } from "../mock/api.js";

export function EventsServicePage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchEvents()
      .then((data) => {
        if (active) setEvents(data);
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
          <div className="page-title">واجهة تشغيل: إدارة الفعاليات والاعتمادات</div>
          <div className="page-subtitle">
            هذه الواجهة تمثل نموذجًا لعمل حساب الإمارة والجهات المنظمة في متابعة الفعاليات، من مرحلة
            طلب الاعتماد حتى التنفيذ ورفع التقرير الختامي.
          </div>
        </div>
      </div>

      <section className="section">
        <h3 className="section-title">سجل الفعاليات</h3>
        <div className="card">
          <div style={{ overflowX: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>عنوان الفعالية</th>
                  <th>الجهة المنظمة</th>
                  <th>حالة اعتماد الإمارة</th>
                  <th>التاريخ</th>
                  <th>الموقع</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6}>جاري تحميل البيانات...</td>
                  </tr>
                ) : (
                  events.map((e) => (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.title}</td>
                      <td>{e.organizer}</td>
                      <td>
                        <span className="chip">{e.emirateStatus}</span>
                      </td>
                      <td>{e.date}</td>
                      <td>{e.location}</td>
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