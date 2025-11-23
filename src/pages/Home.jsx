import React from "react";
import { useNavigate } from "react-router-dom";
import { coreModules } from "../config/coreModules";
import { accounts } from "../config/accounts";
import { StatCards } from "../components/StatCards";

export function Home() {
  const navigate = useNavigate();

  const stats = [
    {
      label: "الحسابات الوطنية",
      value: "8",
      sub: "إمارات، هيئات تطوير، جهات حكومية، قطاع خاص، غير ربحي، جامعات، مانحون، أفراد."
    },
    {
      label: "المكوّنات التشغيلية",
      value: "19",
      sub: "حزم تشغيلية موحّدة للحلول والمشاريع والفعاليات والتمويل والشراكات."
    },
    {
      label: "الارتباط بالرؤية 2030",
      value: "مفعّل",
      sub: "كل حل أو مشروع أو فعالية يمكن ربطه ببرامج وأهداف الرؤية ومؤشرات الجهات."
    }
  ];

  const mainMenus = [
    {
      id: "participation",
      label: "المشاركة المجتمعية",
      description: "الحلول، المبادرات، الفعاليات، المتطوعون، المتحدثون.",
      modules: ["solutions", "events", "volunteering", "trainers"]
    },
    {
      id: "projects",
      label: "المشاريع والبرامج",
      description: "تحويل الحلول إلى مشاريع ومتابعة التنفيذ والأثر.",
      modules: ["projects", "reports", "vision2030"]
    },
    {
      id: "funding",
      label: "التمويل والرعايات والاستثمار",
      description: "فرص المنح، الرعايات، المحافظ الاستثمارية، المحافظ الرقمية.",
      modules: ["funding", "sponsorship", "wallet", "investment", "opportunities"]
    },
    {
      id: "talent",
      label: "التدريب، التوظيف، الكفاءات",
      description: "التدريب التعاوني، الوظائف، طلب المدربين والمتحدثين.",
      modules: ["coop", "employment", "trainers"]
    },
    {
      id: "gov",
      label: "الحكومة وإمارات المناطق",
      description: "اعتماد الفعاليات، متابعة المشاريع، الربط بالرؤية والجهات.",
      modules: ["events", "govAlignment", "vision2030", "reports"]
    },
    {
      id: "universities",
      label: "الجامعات والتعزيز العلمي",
      description: "المشاريع البحثية، الاستشارات، التدريب التعاوني، الاحتضان.",
      modules: ["consulting", "incubation", "coop", "projects"]
    }
  ];

  const findModuleLabel = (id) => {
    const m = coreModules.find((m) => m.id === id);
    return m ? m.label : id;
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div>
          <div className="hero-badge">المنصة الوطنية للتكامل التنموي</div>
          <h1 className="hero-title">
            حصيف… واجهة تشغيل وطنية تجمع المجتمع والحكومة والقطاع الخاص والجامعات.
          </h1>
          <p className="hero-body">
            بدلاً من تعدد المنصات والنماذج، توفّر حصيف طبقة تشغيل موحدة للحلول والمشاريع
            والفعاليات والتمويل، مع ربط مباشر ببرامج وأهداف رؤية المملكة 2030 وتكامل بين
            إمارات المناطق والجهات الحكومية والقطاعين الخاص وغير الربحي والجامعات والمانحين.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn primary"
              onClick={() => navigate("/accounts")}
            >
              استعراض الحسابات الوطنية
            </button>
            <button
              type="button"
              className="btn outline"
              onClick={() => navigate("/about-government")}
            >
              حصيف والقطاع الحكومي
            </button>
          </div>
        </div>
        <aside className="hero-aside">
          <h3>ماذا تقدّم حصيف لكل الأطراف؟</h3>
          <ul>
            <li>للإمارات وهيئات التطوير: رؤية موحدة للمشاريع والفعاليات والمتحدثين في المنطقة.</li>
            <li>للجهات الحكومية: استقبال الحلول، وتحويلها لمشاريع وبرامج مرتبطة بمؤشرات أداء.</li>
            <li>للقطاع الخاص: مسارات واضحة للمسؤولية الاجتماعية والرعايات والاستثمار التنموي.</li>
            <li>للجامعات: دور علمي واستشاري وتطبيقي في تعزيز المشاريع والتدريب التعاوني.</li>
            <li>للمنظمات غير الربحية والأفراد: منصة موحّدة لطرح المبادرات والمشاريع وطلب التمويل.</li>
          </ul>
        </aside>
      </section>

      {/* مؤشرات عامة */}
      <StatCards items={stats} />

      {/* القوائم الرئيسة (Main Menus) */}
      <section style={{ marginTop: "1.25rem" }}>
        <div className="page-header">
          <div>
            <div className="page-title">القوائم الرئيسة لاستعمال المنصة</div>
            <div className="page-subtitle">
              هذه هي الأبواب التشغيلية الكبرى في حصيف، والتي تتوزّع على الحسابات المختلفة
              حسب الصلاحيات ودور كل حساب في المنظومة الوطنية.
            </div>
          </div>
        </div>
        <div className="grid-3">
          {mainMenus.map((menu) => (
            <div className="card" key={menu.id}>
              <div className="card-header">{menu.label}</div>
              <div className="card-sub">{menu.description}</div>
              <div className="chips-row">
                {menu.modules.map((mid) => (
                  <span key={mid} className="chip">
                    {findModuleLabel(mid)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* الحسابات الوطنية في الواجهة الرئيسية */}
      <section style={{ marginTop: "1.5rem" }}>
        <div className="page-header">
          <div>
            <div className="page-title">الحسابات الوطنية المتكاملة</div>
            <div className="page-subtitle">
              كل حساب يمثل منظورًا تشغيليًا مختلفًا ويستخدم نفس المكوّنات الأساسية، لكن بصلاحيات
              ومدخلات ومخرجات تتناسب مع دوره في الملف التشغيلي لمنصة حصيف.
            </div>
          </div>
        </div>
        <div className="grid-3">
          {accounts.map((a) => (
            <div className="card" key={a.id}>
              <div className="card-header">{a.name}</div>
              <div className="card-sub">{a.description}</div>
              <div className="chips-row">
                <span className="chip primary">{a.role}</span>
                <span className="chip">{a.id}</span>
              </div>
              <div style={{ marginTop: "0.5rem", fontSize: "0.78rem" }}>
                <strong>أمثلة على ما يمكنه فعله:</strong>
                <div className="chips-row">
                  {a.focusModules.slice(0, 4).map((m) => (
                    <span key={m.id} className="chip">
                      {m.label}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <button
                  type="button"
                  className="btn outline"
                  onClick={() => navigate(`/accounts/${a.id}`)}
                >
                  الدخول للواجهة التشغيلية
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* المكونات التشغيلية */}
      <section style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
        <div className="page-header">
          <div>
            <div className="page-title">المكوّنات التشغيلية الأساسية (Core Modules)</div>
            <div className="page-subtitle">
              تسعة عشر مكوّناً تشغيلياً تشكّل نظام التشغيل القياسي لمنصة حصيف، وتُستخدم في جميع
              الحسابات بصلاحيات مختلفة. يمكن لفريق التطوير ربط كل مكوّن بخدمات API وقاعدة بيانات
              وفق الملف التشغيلي.
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