import React from "react";
import { useNavigate } from "react-router-dom";
import { StatCards } from "../components/StatCards.jsx";
import { accounts } from "../config/accounts.js";
import { coreModules } from "../config/coreModules.js";

export function Home() {
  const navigate = useNavigate();

  const stats = [
    {
      label: "الحسابات الوطنية + الحساب الإداري",
      value: "9",
      sub: "حساب إدارة المنصة + 8 حسابات لتمثيل جميع القطاعات."
    },
    {
      label: "المكوّنات الأساسية",
      value: "19",
      sub: "نظام تشغيل موحّد للحلول والمشاريع والفعاليات والتمويل والشراكات."
    },
    {
      label: "الربط بالرؤية 2030",
      value: "مفعّل",
      sub: "كل مشروع أو حل أو فعالية يمكن ربطه ببرامج وأهداف الرؤية 2030 ومؤشرات الجهات."
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
      description: "تحويل الحلول إلى مشاريع وربطها بالرؤية 2030 ومتابعة الأثر.",
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
          <div className="hero-badge">
            المنصة الوطنية للتكامل التنموي – نموذج تشغيلي مرتبط بالرؤية 2030
          </div>
          <h1 className="hero-title">
            حصيف… طبقة تشغيل وطنية تربط{" "}
            <span className="hero-highlight">المجتمع والحكومة والاقتصاد</span> في مسار واحد.
          </h1>
          <p className="hero-body">
            بدلاً من تعدد المنصات والنماذج، تقدّم حصيف نظامًا موحّدًا لاستقبال الحلول والمبادرات،
            وتحويلها إلى مشاريع وبرامج، وربطها بالتمويل والرعايات والاستثمار، مع لوحات تقارير
            تعكس مساهمة كل منطقة وجهة في تحقيق مستهدفات رؤية المملكة 2030.
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
              onClick={() => navigate("/services")}
            >
              الدخول إلى الخدمات التشغيلية
            </button>
          </div>
        </div>
        <aside className="hero-aside">
          <h3>ماذا يضيف حساب إدارة المنصة؟</h3>
          <ul>
            <li>إدارة الحسابات وصلاحيات المكوّنات على مستوى المملكة.</li>
            <li>إدارة القوائم الوطنية (برامج الرؤية، الجهات الحكومية، إمارات المناطق، الجامعات).</li>
            <li>لوحات مؤشرات وطنية إجمالية للأثر التنموي والمجتمعي والاقتصادي.</li>
            <li>ضبط الهوية البصرية والمحتوى التعريفي الموحد للمنصة.</li>
          </ul>
        </aside>
      </section>

      <StatCards items={stats} />

      <section className="section">
        <div className="page-header">
          <div>
            <div className="page-title">القوائم الرئيسة لاستخدام المنصة</div>
            <div className="page-subtitle">
              هذه هي الأبواب التشغيلية الكبرى للمنصة، والتي تتوزّع على الحسابات المختلفة حسب
              الصلاحيات ودور كل حساب في المنظومة الوطنية.
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
            <div className="page-title">الحسابات الوطنية والحساب الإداري</div>
            <div className="page-subtitle">
              كل حساب يمثل منظورًا تشغيليًا مختلفًا ويستخدم نفس المكوّنات الأساسية بصلاحيات ومدخلات
              ومخرجات تتوافق مع دوره، مع وجود حساب وطني لإدارة المنصة.
            </div>
          </div>
        </div>
        <div className="grid-3">
          {accounts.map((a) => (
            <div key={a.id} className="card">
              <div className="card-header">
                {a.id === "platform_admin" ? "🔐 " : ""}
                {a.name}
              </div>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}