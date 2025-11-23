import React from "react";
import { coreModules } from "../config/coreModules";
import { StatCards } from "../components/StatCards";

export function Home() {
  const stats = [
    {
      label: "المكوّنات التشغيلية",
      value: "19",
      sub: "حزم تشغيلية موحّدة للحلول والمشاريع والفعاليات والتمويل والشراكات."
    },
    {
      label: "الحسابات الوطنية",
      value: "8",
      sub: "إمارات، هيئات تطوير، جهات حكومية، قطاع خاص، غير ربحي، جامعات، مانحون، أفراد."
    },
    {
      label: "الركائز",
      value: "6",
      sub: "التكامل الوطني، الرؤية 2030، المشاركة المجتمعية، الاحترافية، القياس والأثر، البنية التقنية."
    }
  ];

  return (
    <div>
      <section className="hero">
        <div>
          <div className="hero-badge">المنصة الوطنية للتكامل التنموي</div>
          <h1 className="hero-title">حصيف… بوابة واحدة تجمع المجتمع والدولة والاقتصاد.</h1>
          <p className="hero-body">
            صُمّمت منصة حصيف لتكون منظومة وطنية موحدة تربط الحلول والمشاريع والفعاليات والفرص بجميع القطاعات، مع
            ربط مباشر ببرامج وأهداف رؤية المملكة 2030، وتوفير تقارير دقيقة لصنّاع القرار.
          </p>
          <div className="hero-actions">
            <a href="/accounts" className="btn primary">
              استعراض الحسابات الوطنية
            </a>
            <a href="/about-government" className="btn outline">
              حصيف والقطاع الحكومي
            </a>
          </div>
        </div>
        <aside className="hero-aside">
          <h3>أدوار حصيف على مستوى المملكة</h3>
          <ul>
            <li>تمكين إمارات المناطق وهيئات التطوير من رؤية شاملة للمشاريع والفعاليات.</li>
            <li>فتح قناة رسمية بين المجتمع (أفرادًا وجهات) والجهات الحكومية.</li>
            <li>تحفيز القطاع الخاص على الرعاية والاستثمار والمسؤولية الاجتماعية.</li>
            <li>تمكين الجامعات من التعزيز العلمي والاحتضان والتدريب التعاوني.</li>
          </ul>
        </aside>
      </section>

      <StatCards items={stats} />

      <section style={{ marginTop: "1.25rem" }}>
        <div className="page-header">
          <div>
            <div className="page-title">المكوّنات التشغيلية الأساسية (Core Modules)</div>
            <div className="page-subtitle">
              تسعة عشر مكوّناً تشغيلياً تشكّل نظام التشغيل القياسي لمنصة حصيف، وتُستخدم في جميع الحسابات بصلاحيات
              مختلفة.
            </div>
          </div>
        </div>
        <div className="grid-3">
          {coreModules.map((m) => (
            <div className="card" key={m.id}>
              <div className="card-header">{m.label}</div>
              <div className="card-sub">{m.description}</div>
              <div className="chips-row">
                <span className="chip primary">مكوّن أساسي</span>
                <span className="chip">{m.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}