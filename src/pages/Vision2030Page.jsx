import React from "react";

export function Vision2030Page() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">التكامل مع رؤية المملكة 2030 والجهات الحكومية</div>
          <div className="page-subtitle">
            كل مشروع أو حل أو فعالية داخل المنصة يمكن ربطه ببرامج وأهداف رؤية المملكة 2030 وبالجهات
            الحكومية والجهات الإقليمية ذات العلاقة.
          </div>
        </div>
      </div>

      <section className="section">
        <h3 className="section-title">مستويات الربط بالرؤية 2030</h3>
        <div className="card">
          <ul className="bullets">
            <li>اختيار برنامج الرؤية.</li>
            <li>اختيار الهدف الاستراتيجي والفرعي والتفصيلي.</li>
            <li>ربط الجهة الحكومية الرئيسية والجهات المساندة والمنطقة وهيئة التطوير.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}