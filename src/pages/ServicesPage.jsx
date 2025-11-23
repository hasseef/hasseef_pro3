import React from "react";
import { useNavigate } from "react-router-dom";

const serviceBlocks = [
  {
    id: "solutions",
    title: "إدارة الحلول والمبادرات",
    description:
      "استقبال الحلول من الأفراد والجهات، فرزها، تقييمها، وتحويل المناسب منها إلى مشاريع مرتبطة بالرؤية.",
    route: "/services/solutions"
  },
  {
    id: "projects",
    title: "إدارة المشاريع والبرامج",
    description:
      "لوحة تشغيل لمتابعة دورة حياة المشروع من الفكرة حتى الإغلاق، وربطه بالتمويل والرؤية والتقارير.",
    route: "/services/projects"
  },
  {
    id: "events",
    title: "إدارة الفعاليات والاعتمادات",
    description:
      "إنشاء الفعاليات، طلب اعتماد الإمارة أو الجهة، إدارة التسجيل والحضور والتقرير الختامي.",
    route: "/services/events"
  },
  {
    id: "funding",
    title: "التمويل والرعايات",
    description:
      "إدارة فرص التمويل والرعايات، استقبال طلبات الجمعيات والجهات، وربطها بالمحافظ المالية للمانحين.",
    route: "/services/funding"
  }
];

export function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">الخدمات التشغيلية في منصة حصيف</div>
          <div className="page-subtitle">
            هذه نماذج لواجهات تشغيلية تفاعلية تعكس طريقة عمل المنصة عند التطبيق الفعلي، ويمكن لفريق
            التطوير البناء عليها وربطها بقواعد البيانات وواجهات الـ API.
          </div>
        </div>
      </div>
      <div className="grid-3">
        {serviceBlocks.map((s) => (
          <div key={s.id} className="card">
            <div className="card-header">{s.title}</div>
            <div className="card-sub">{s.description}</div>
            <button
              type="button"
              className="btn outline full"
              onClick={() => navigate(s.route)}
            >
              فتح الواجهة التشغيلية
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}