import React from "react";

export function SimpleTable({ columns, data }) {
  return (
    <div className="card">
      <div className="card-header">جدول تشغيلي تجريبي</div>
      <div className="card-sub">
        نموذج مبسط لعرض بيانات (مشاريع / فعاليات / فرص...) داخل حساب حصيف.
      </div>
      <div className="toolbar">
        <input placeholder="بحث..." />
        <select>
          <option>الكل</option>
          <option>قيد التنفيذ</option>
          <option>مكتمل</option>
        </select>
        <button className="btn outline" type="button">
          تصدير
        </button>
        <button className="btn primary" type="button">
          إضافة سجل
        </button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}