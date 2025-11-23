import React from "react";
import { coreModules } from "../config/coreModules";

export function AboutGovernment() {
  const govRelated = coreModules.filter((m) =>
    ["solutions", "projects", "events", "vision2030", "govAlignment", "reports", "funding", "sponsorship", "partnerships"].includes(m.id)
  );

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">حصيف والقطاع الحكومي</div>
          <div className="page-subtitle">
            توفّر منصة حصيف طبقة تشغيل قياسية للجهات الحكومية والهيئات وإمارات المناطق، لربط الحلول والمشاريع
            والفعاليات بالرؤية 2030، مع دعم مؤشرات الأداء الحكومية والتقارير الوطنية.
          </div>
        </div>
      </div>

      <section className="card" style={{ marginBottom: "1rem" }}>
        <div className="card-header">دور المنصة مع الجهات الحكومية</div>
        <div className="card-sub">
          يدعم حساب الجهة الحكومية وحساب الإمارة وهيئة التطوير مجالات التخطيط، واستقبال الحلول، وتحويلها إلى مشاريع
          وبرامج، وربطها بالأهداف الاستراتيجية، مع متابعة التنفيذ والأثر.
        </div>
        <ul style={{ fontSize: "0.8rem", color: "#4b5563", paddingRight: "1.1rem" }}>
          <li>استقبال حلول تنموية من القطاع الخاص والجامعات والقطاع غير الربحي والأفراد.</li>
          <li>تحويل الحلول والمبادرات إلى مشاريع قابلة للتنفيذ مرتبطة بالرؤية 2030.</li>
          <li>إدارة الفعاليات الحكومية واعتماد المتحدثين بالتكامل مع إمارات المناطق.</li>
          <li>إدارة الشراكات مع القطاعات المختلفة، من القطاع الخاص والجامعات والقطاع غير الربحي.</li>
          <li>استخراج تقارير أداء ومؤشرات أثر قابلة للعرض على صناع القرار.</li>
        </ul>
      </section>

      <section>
        <div className="card-header">المكوّنات المحورية للقطاع الحكومي</div>
        <div className="grid-3" style={{ marginTop: "0.6rem" }}>
          {govRelated.map((m) => (
            <div className="card" key={m.id}>
              <div className="card-header">{m.label}</div>
              <div className="card-sub">{m.description}</div>
              <div className="chips-row">
                <span className="chip primary">حكومي</span>
                <span className="chip">{m.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}