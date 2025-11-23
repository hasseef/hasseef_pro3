import React from "react";
import { SimpleTable } from "./SimpleTable";

const sampleRows = [
  {
    id: "PRJ-001",
    title: "برنامج تمكين الشباب في حائل",
    owner: "القطاع غير الربحي",
    kpi: "عدد المستفيدين",
    value: "1,250",
    status: "مكتمل"
  },
  {
    id: "EVT-014",
    title: "ملتقى الجامعات والمسؤولية الاجتماعية",
    owner: "جامعة حائل",
    kpi: "عدد الشراكات",
    value: "12",
    status: "قيد التنفيذ"
  }
];

export function ReportsDemo() {
  return (
    <div style={{ marginTop: "0.75rem" }}>
      <div className="card-header">مركز التقارير والأثر</div>
      <div className="card-sub">
        يوضح عينة من تقارير المشاريع والفعاليات المرتبطة بالرؤية والجهات الحكومية.
      </div>
      <SimpleTable
        columns={[
          { key: "id", label: "المعرف" },
          { key: "title", label: "العنوان" },
          { key: "owner", label: "الجهة المالكة" },
          { key: "kpi", label: "مؤشر الأداء" },
          { key: "value", label: "القيمة" },
          {
            key: "status",
            label: "الحالة",
            render: (val) => <span className="tag">{val}</span>
          }
        ]}
        data={sampleRows}
      />
    </div>
  );
}