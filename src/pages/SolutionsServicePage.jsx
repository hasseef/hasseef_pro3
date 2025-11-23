import React, { useState, useEffect } from "react";
import { fetchSolutions, createSolution } from "../mock/api.js";

const statusColors = {
  "جديد": "chip primary",
  "قيد التقييم": "chip",
  "مقبول": "chip primary",
  "مرفوض": "chip",
  "محول إلى مشروع": "chip"
};

export function SolutionsServicePage() {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [filterStatus, setFilterStatus] = useState("الكل");
  const [formData, setFormData] = useState({
    ownerType: "فرد",
    ownerName: "",
    title: "",
    targetEntity: "",
    visionProgram: ""
  });

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchSolutions()
      .then((data) => {
        if (active) setSolutions(data);
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const filteredSolutions =
    filterStatus === "الكل"
      ? solutions
      : solutions.filter((s) => s.status === filterStatus);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.ownerName) return;
    try {
      setSubmitting(true);
      const created = await createSolution(formData);
      setSolutions((prev) => [created, ...prev]);
      setFormData({
        ownerType: formData.ownerType,
        ownerName: "",
        title: "",
        targetEntity: "",
        visionProgram: ""
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">واجهة تشغيل: إدارة الحلول والمبادرات</div>
          <div className="page-subtitle">
            من هنا تستقبل المنصة الحلول والمبادرات من الأفراد والجهات، مع إمكانية الفرز والتقييم
            وتحويل الحل المناسب إلى مشروع مرتبط بالرؤية 2030 وبالجهات الحكومية ذات العلاقة.
          </div>
        </div>
      </div>

      <section className="section">
        <h3 className="section-title">الحلول المستلمة</h3>
        <div className="card">
          <div className="chips-row" style={{ marginBottom: "0.6rem" }}>
            <span className="chip">
              {loading ? "جاري التحميل..." : `إجمالي: ${solutions.length}`}
            </span>
            {["الكل", "جديد", "قيد التقييم", "محول إلى مشروع"].map((st) => (
              <button
                key={st}
                type="button"
                className={
                  "btn small " + (filterStatus === st ? "primary" : "outline")
                }
                onClick={() => setFilterStatus(st)}
              >
                {st}
              </button>
            ))}
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>صاحب الحل</th>
                  <th>نوعه</th>
                  <th>عنوان الحل</th>
                  <th>الجهة المستهدفة</th>
                  <th>برنامج الرؤية</th>
                  <th>الحالة</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7}>جاري تحميل البيانات...</td>
                  </tr>
                ) : filteredSolutions.length === 0 ? (
                  <tr>
                    <td colSpan={7}>لا توجد حلول مطابقة للفلتر الحالي.</td>
                  </tr>
                ) : (
                  filteredSolutions.map((s) => (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.ownerName}</td>
                      <td>{s.ownerType}</td>
                      <td>{s.title}</td>
                      <td>{s.targetEntity}</td>
                      <td>{s.visionProgram}</td>
                      <td>
                        <span className={statusColors[s.status] || "chip"}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">استقبال حل جديد (نموذج مبسط)</h3>
        <div className="card">
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-field">
              <label>نوع صاحب الحل</label>
              <select
                name="ownerType"
                value={formData.ownerType}
                onChange={handleChange}
              >
                <option value="فرد">فرد</option>
                <option value="جمعية">جمعية</option>
                <option value="شركة">شركة</option>
                <option value="جامعة">جامعة</option>
              </select>
            </div>
            <div className="form-field">
              <label>اسم صاحب الحل</label>
              <input
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="الاسم الثلاثي أو اسم الجهة"
              />
            </div>
            <div className="form-field">
              <label>عنوان الحل</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="عنوان مختصر وواضح للحل"
              />
            </div>
            <div className="form-field">
              <label>الجهة المستهدفة</label>
              <input
                name="targetEntity"
                value={formData.targetEntity}
                onChange={handleChange}
                placeholder="مثال: وزارة التعليم، بنك التنمية، ..."
              />
            </div>
            <div className="form-field">
              <label>برنامج الرؤية (اختياري في المرحلة الأولى)</label>
              <input
                name="visionProgram"
                value={formData.visionProgram}
                onChange={handleChange}
                placeholder="مثال: تنمية القدرات البشرية"
              />
            </div>
            <div className="form-actions">
              <button
                type="submit"
                className="btn primary"
                disabled={submitting}
              >
                {submitting ? "جاري الحفظ..." : "حفظ الحل في سجل المنصة (تجريبي)"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}