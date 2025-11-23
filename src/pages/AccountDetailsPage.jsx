import React from "react";
import { useParams } from "react-router-dom";
import { accounts } from "../config/accounts.js";
import { coreModules } from "../config/coreModules.js";

const modulesMatrix = {
  emirate: ["events", "trainers", "projects", "vision2030", "govAlignment", "reports"],
  development_authority: [
    "solutions",
    "projects",
    "events",
    "facilities",
    "incubation",
    "consulting",
    "volunteering",
    "employment",
    "sponsorship",
    "partnerships",
    "reports",
    "vision2030"
  ],
  government: [
    "solutions",
    "projects",
    "events",
    "consulting",
    "coop",
    "volunteering",
    "employment",
    "funding",
    "sponsorship",
    "partnerships",
    "wallet",
    "vision2030",
    "govAlignment",
    "reports"
  ],
  private_sector: [
    "solutions",
    "projects",
    "events",
    "facilities",
    "consulting",
    "coop",
    "volunteering",
    "employment",
    "trainers",
    "sponsorship",
    "investment",
    "investmentOpportunities",
    "wallet",
    "partnerships",
    "reports"
  ],
  nonprofit: [
    "solutions",
    "projects",
    "events",
    "volunteering",
    "coop",
    "employment",
    "funding",
    "sponsorship",
    "partnerships",
    "wallet",
    "vision2030",
    "reports"
  ],
  university: [
    "solutions",
    "projects",
    "events",
    "facilities",
    "incubation",
    "consulting",
    "coop",
    "volunteering",
    "trainers",
    "partnerships",
    "vision2030",
    "reports"
  ],
  donor: ["projects", "events", "sponsorship", "funding", "wallet", "vision2030", "reports"],
  individual: [
    "solutions",
    "projects",
    "events",
    "volunteering",
    "coop",
    "employment",
    "trainers",
    "investment",
    "investmentOpportunities",
    "wallet",
    "reports"
  ]
};

export function AccountDetailsPage() {
  const { accountId } = useParams();
  const account = accounts.find((a) => a.id === accountId);
  if (!account) {
    return (
      <div className="page">
        <div className="page-title">لم يتم العثور على الحساب</div>
      </div>
    );
  }

  const moduleIds = modulesMatrix[account.id] || [];
  const modules = coreModules.filter((m) => moduleIds.includes(m.id));

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">{account.name}</div>
          <div className="page-subtitle">{account.description}</div>
        </div>
        <div className="chips-row">
          <span className="chip primary">{account.role}</span>
          <span className="chip">{account.id}</span>
        </div>
      </div>

      <section className="section">
        <h3 className="section-title">المكوّنات المتاحة لهذا الحساب</h3>
        <div className="grid-3">
          {modules.map((m) => (
            <div key={m.id} className="card">
              <div className="card-header">{m.label}</div>
              <div className="card-sub">{m.description}</div>
              <div className="chips-row">
                <span className="chip">{m.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">واجهات التشغيل (نموذج أولي)</h3>
        <p className="page-subtitle">
          هذه الواجهة توضح نموذجًا تشغيليًا مبسطًا يمكن لفريق التطوير تحويله إلى جداول فعلية تعتمد على
          نموذج البيانات وواجهات الـ API المعتمدة في الملف التشغيلي.
        </p>
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>المكوّن</th>
                <th>أهم الجداول والحقول المتوقعة</th>
                <th>أمثلة على الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>الحلول</td>
                <td>عنوان الحل، الجهة المستهدفة، وصف مختصر، حالة الحل، مستوى الربط بالرؤية.</td>
                <td>إنشاء حل، تقييم الحل، طلب تعزيز علمي، تحويل لمشروع.</td>
              </tr>
              <tr>
                <td>المشاريع</td>
                <td>اسم المشروع، المالك، الشركاء، الميزانية، حالة التنفيذ، مستوى الأثر.</td>
                <td>إنشاء مشروع، ربط بالرؤية، ربط بتمويل، رفع تقارير الأثر.</td>
              </tr>
              <tr>
                <td>الفعاليات</td>
                <td>اسم الفعالية، المنظم، المرفق، المتحدثون، حالة الاعتماد، عدد الحضور.</td>
                <td>إنشاء فعالية، طلب اعتماد الإمارة، إدارة التسجيل، رفع التقرير الختامي.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}