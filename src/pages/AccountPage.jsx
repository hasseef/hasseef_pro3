import React from "react";
import { useParams } from "react-router-dom";
import { accounts } from "../config/accounts";
import { SimpleTable } from "../components/SimpleTable";
import { VisionMappingDemo } from "../components/VisionMappingDemo";
import { ReportsDemo } from "../components/ReportsDemo";

const sampleRows = [
  {
    code: "PRJ-001",
    title: "مشروع تجريبي لعرض البنية",
    owner: "حساب حصيف",
    status: "قيد التنفيذ"
  },
  {
    code: "EVT-010",
    title: "فعالية توضيحية داخل الحساب",
    owner: "حساب حصيف",
    status: "مكتمل"
  }
];

export function AccountPage() {
  const { accountId } = useParams();
  const account = accounts.find((a) => a.id === accountId);

  if (!account) {
    return <div>الحساب غير موجود.</div>;
  }

  const mainModules = account.focusModules.slice(0, 6);
  const secondaryModules = account.focusModules.slice(6);

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">{account.name}</div>
          <div className="page-subtitle">{account.description}</div>
          <div className="chips-row" style={{ marginTop: "0.4rem" }}>
            <span className="chip primary">{account.role}</span>
            <span className="chip">المعرّف: {account.id}</span>
          </div>
        </div>
      </div>

      <section style={{ marginBottom: "1rem" }}>
        <div className="card-header">المكوّنات الأساسية لهذا الحساب</div>
        <div className="card-sub">
          هذه عينة من المكوّنات الـ 19 بحسب الصلاحيات الموضحة في جدول ربط المكوّنات بالحسابات.
        </div>
        <div className="chips-row" style={{ marginTop: "0.4rem" }}>
          {mainModules.map((m) => (
            <span key={m.id} className="chip primary">
              {m.label}
            </span>
          ))}
        </div>
        {secondaryModules.length > 0 && (
          <div className="chips-row" style={{ marginTop: "0.4rem" }}>
            {secondaryModules.map((m) => (
              <span key={m.id} className="chip">
                {m.label}
              </span>
            ))}
          </div>
        )}
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <SimpleTable
          columns={[
            { key: "code", label: "المعرف" },
            { key: "title", label: "العنوان" },
            { key: "owner", label: "الجهة" },
            {
              key: "status",
              label: "الحالة",
              render: (val) => <span className="tag">{val}</span>
            }
          ]}
          data={sampleRows}
        />
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <VisionMappingDemo />
      </section>

      <section>
        <ReportsDemo />
      </section>
    </div>
  );
}