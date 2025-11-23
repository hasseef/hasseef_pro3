import React from "react";
import { useNavigate } from "react-router-dom";
import { StatCards } from "../components/StatCards.jsx";
import { accounts } from "../config/accounts.js";
import { coreModules } from "../config/coreModules.js";

export function Home() {
  const navigate = useNavigate();

  const stats = [
    {
      label: "الحسابات الوطنية",
      value: "8",
      sub: "إمارات، هيئات تطوير، جهات حكومية، قطاع خاص، قطاع غير ربحي، جامعات، مانحون، أفراد."
    },
    {
      label: "المكوّنات الأساسية",
      value: "19",
      sub: "نظام تشغيل موحّد للحلول والمشاريع والفعاليات والتمويل والشراكات."
    },
    {
      label: "الارتباط بالرؤية 2030",
      value: "مفعّل",
      sub: "كل مشروع أو فعالية أو حل يمكن ربطه ببرامج وأهداف الرؤية 2030 ومؤشرات الجهات."
    }
  ];

  const mainMenus = [
    {
      id: "participation",
      label: "المشاركة المجتمعية",
      description: "الحلول، المبادرات، التطوع، المتدربون، المتحدثون.",
      modules: ["solutions", "volunteering", "trainers"]
    },
    {
      id: "projects",
      label: "المشاريع والبرامج",
      description: "تحويل الحلول إلى مشاريع مع ربطها بالرؤية 2030 ومتابعة الأثر.",
      modules: ["projects", "vision2030", "reports"]
    },
    {
      id: "funding",
      label: "التمويل والرعايات والاستثمار",
      description: "فرص التمويل، الرعايات، الاستثمار، المحفظة المالية.",
      modules: ["funding", "sponsorship", "investment", "wallet"]
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
      description: "اعتماد الفعاليات والمتحدثين وربط المشاريع بالرؤية والجهات الحكومية.",
      modules: ["events", "govAlignment", "vision2030", "reports"]
    },
    {
      id: "universities",
      label: "الجامعات والتعزيز العلمي",
      description: "التعزيز العلمي للحلول، الاستشارات، الاحتضان، المرافق.",
      modules: ["consulting", "incubation", "facilities", "coop"]
    }
  ];

  const findModuleLabel = (id) => {
    const m = coreModules.find((mod) => mod.id === id);
    return m ? m.label : id;
  };

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-main">
          <div className="hero-badge">منصة حصيف – المنصة الوطنية للتكامل التنموي</div>
          <h1 className="hero-title">
            جسر وطني يربط المجتمع بالحكومة والاقتصاد في مسار واحد يخدم رؤية المملكة 2030.
          </h1>
          <p className="hero-body">
            بدلاً من تعدد المنصات والنماذج، تقدّم حصيف طبقة تشغيل موحّدة لاستقبال الحلول،
            وتحويلها إلى مشاريع، وربطها بالتمويل والرعايات، وربط الأثر ببرامج وأهداف الرؤية 2030،
            عبر حسابات تخدم إمارات المناطق، وهيئات التطوير، والجهات الحكومية، والقطاعين الخاص وغير الربحي،
            والجامعات، والمانحين، والأفراد.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn primary" onClick={() => navigate("/accounts")}>
              استعراض الحسابات الوطنية
            </button>
            <button type="button" className="btn outline" onClick={() => navigate("/core-modules")}>
              استعراض المكوّنات الأساسية
            </button>
          </div>
        </div>
        <aside className="hero-aside">
          <h3>لماذا حصيف؟</h3>
          <ul>
            <li>تكامل وطني بين الحكومة والقطاع الخاص وغير الربحي والجامعات والأفراد.</li>
            <li>ربط مباشر بكل مشروع أو حل أو فعالية ببرامج وأهداف رؤية 2030.</li>
            <li>مسارات واضحة للتمويل والرعايات والاستثمار والمسؤولية الاجتماعية.</li>
            <li>دور مركزي لإمارات المناطق وهيئات التطوير في تنظيم التنمية الإقليمية.</li>
            <li>دور علمي واستشاري للجامعات في تعزيز الحلول والمشاريع.</li>
          </ul>
        </aside>
      </section>

      <StatCards items={stats} />

      <section className="section">
        <div className="page-header">
          <div>
            <div className="page-title">القوائم الرئيسة لاستخدام المنصة</div>
            <div className="page-subtitle">
              هذه هي الأبواب التشغيلية الكبرى للمنصة، والتي تتوزّع على الحسابات المختلفة حسب الصلاحيات
              ودور كل حساب في المنظومة الوطنية.
            </div>
          </div>
        </div>
        <div className="grid-3">
          {mainMenus.map((menu) => (
            <div key={menu.id} className="card">
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

      <section className="section">
        <div className="page-header">
          <div>
            <div className="page-title">الحسابات الوطنية المتكاملة</div>
            <div className="page-subtitle">
              كل حساب يمثل منظورًا تشغيليًا مختلفًا ويستخدم نفس المكوّنات الأساسية بصلاحيات ومدخلات
              ومخرجات تتوافق مع دوره في الملف التشغيلي لمنصة حصيف.
            </div>
          </div>
        </div>
        <div className="grid-3">
          {accounts.map((a) => (
            <div key={a.id} className="card">
              <div className="card-header">{a.name}</div>
              <div className="card-sub">{a.description}</div>
              <div className="chips-row">
                <span className="chip primary">{a.role}</span>
                <span className="chip">{a.id}</span>
              </div>
              <div className="chips-row chips-wrap">
                {a.focusModules.slice(0, 4).map((m) => (
                  <span key={m.id} className="chip light">
                    {m.label}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="btn outline full"
                onClick={() => navigate(`/accounts/${a.id}`)}
              >
                دخول الواجهة التشغيلية
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}