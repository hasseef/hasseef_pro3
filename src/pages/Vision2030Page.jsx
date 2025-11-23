import React from "react";

export function Vision2030Page() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">التكامل مع رؤية المملكة 2030 والجهات الحكومية</div>
          <div className="page-subtitle">
            كل مشروع أو حل أو فعالية داخل المنصة يمكن ربطه ببرامج وأهداف رؤية المملكة 2030 وبالجهات
            الحكومية والجهات الإقليمية ذات العلاقة، وفق محرك الربط بالرؤية والربط الحكومي في الملف التشغيلي.
          </div>
        </div>
      </div>

      <section className="section">
        <h3 className="section-title">مستويات الربط بالرؤية 2030</h3>
        <div className="card">
          <ul className="bullets">
            <li>اختيار برنامج الرؤية (أحد البرامج الوطنية المعتمدة).</li>
            <li>اختيار الهدف الاستراتيجي.</li>
            <li>اختيار الهدف الفرعي.</li>
            <li>اختيار الهدف التفصيلي.</li>
            <li>ربط الجهة الحكومية الرئيسية والجهات المساندة والمنطقة وهيئة التطوير.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">نماذج على واجهات الربط</h3>
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>العنصر</th>
                <th>حالة الربط</th>
                <th>ملاحظات تشغيلية</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>مشروع حكومي</td>
                <td>ربط إلزامي ببرنامج ورقم هدف استراتيجي وفرعي وتفصيلي وجهة حكومية ومنطقة.</td>
                <td>يظهر الربط في تقارير الجهة الحكومية والإمارة وهيئة التطوير والمانحين.</td>
              </tr>
              <tr>
                <td>مشروع غير ربحي</td>
                <td>ربط إلزامي بالرؤية والجهة الحكومية المشرفة والمنطقة.</td>
                <td>يُستخدم الربط في تقارير أثر العمل المجتمعي والتقارير الوطنية.</td>
              </tr>
              <tr>
                <td>مبادرة فردية</td>
                <td>الربط اختياري، ويمكن تفعيله عند تحويل المبادرة إلى مشروع معتمد.</td>
                <td>يعكس مساهمة الأفراد في تحقيق مستهدفات الرؤية.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}