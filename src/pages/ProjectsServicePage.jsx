import React, { useEffect, useState } from "react";
import { fetchProjects } from "../mock/api.js";

export function ProjectsServicePage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchProjects()
      .then((data) => {
        if (active) setProjects(data);
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
          <div className="page-title">واجهة تشغيل: إدارة المشاريع والبرامج</div>
          <div className="page-subtitle">
            نموذج مبسط لعرض المشاريع المعتمدة في المنصة على مستوى مختلف الحسابات، مع ربطها ببرامج
            الرؤية 2030 والمنطقة والجهة المالكة.
          </div>
        </div>
      </div>
      <section className="section">
        <h3 className="section-title">سجل المشاريع</h3>
        <div className="card">
          <div style={{ overflowX: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>الرقم</th>
                  <th>عنوان المشروع</th>
                  <th>الجهة المالكة</th>
                  <th>برنامج الرؤية</th>
                  <th>المنطقة</th>
                  <th>الحالة</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6}>جاري تحميل البيانات...</td>
                  </tr>
                ) : (
                  projects.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.title}</td>
                      <td>{p.owner}</td>
                      <td>{p.visionProgram}</td>
                      <td>{p.region}</td>
                      <td>
                        <span className="chip">{p.status}</span>
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