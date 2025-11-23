import React from "react";

export function AboutPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">عن منصة حصيف</div>
          <div className="page-subtitle">
            منصة حصيف هي منظومة وطنية مبتكرة للتكامل التنموي، تم إعدادها وتشغيلها تحت إشراف مبادرة
            تلبية وبرنامج شباب المملكة حصيف الوطني، استجابةً واعية لدعوة القيادة لتحقيق مستهدفات رؤية 2030.
          </div>
        </div>
      </div>
      <section className="section">
        <div className="card">
          <p>
            هذا النموذج يمثل واجهة تشغيلية مبدئية يمكن البناء عليها لربطها بواجهات برمجة التطبيقات وقواعد
            البيانات، وتحويلها إلى منصة حكومية وطنية مكتملة الوظائف.
          </p>
        </div>
      </section>
    </div>
  );
}