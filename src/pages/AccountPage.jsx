// src/pages/AccountPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { accounts } from "../config/accounts";
import { accountOperationalConfig } from "../config/accountOperationalConfig";
import { SimpleTable } from "../components/SimpleTable";
import { VisionMappingDemo } from "../components/VisionMappingDemo";
import { ReportsDemo } from "../components/ReportsDemo";

export function AccountPage() {
  const { accountId } = useParams();
  const account = accounts.find((a) => a.id === accountId);
  const config = accountOperationalConfig[accountId];

  const [activeModuleId, setActiveModuleId] = useState(config?.modules?.[0]?.id);
  const [rows, setRows] = useState([]);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (config?.modules?.length) {
      const first = config.modules[0];
      setActiveModuleId(first.id);
      setRows(first.sampleRows || []);
      setFormValues({});
    }
  }, [config]);

  if (!account || !config) {
    return <div>الحساب غير موجود أو لم يُعرَّف تشغيله بعد.</div>;
  }

  const activeModule =
    config.modules.find((m) => m.id === activeModuleId) || config.modules[0];

  const handleChangeModule = (id) => {
    const mod = config.modules.find((m) => m.id === id);
    if (!mod) return;
    setActiveModuleId(id);
    setRows(mod.sampleRows || []);
    setFormValues({});
  };

  const handleFormChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    setRows((prev) => [...prev, formValues]);
    setFormValues({});
  };

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

      <div className="chips-row" style={{ marginBottom: "0.6rem" }}>
        {config.modules.map((m) => (
          <button
            key={m.id}
            type="button"
            className={"chip" + (m.id === activeModuleId ? " primary" : "")}
            onClick={() => handleChangeModule(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <SimpleTable columns={activeModule.columns} data={rows} />

      <div className="card" style={{ marginTop: "0.75rem" }}>
        <div className="card-header">
          {activeModule.label} – إضافة / توثيق سجل (تجريبي)
        </div>
        <div className="card-sub">
          هذا النموذج يوضّح المدخلات المتوقعة من الحساب، ويمكن لاحقاً ربطه
          بخدمات الـ API وقاعدة البيانات وفق الملف التشغيلي.
        </div>
        <form onSubmit={handleAddRow}>
          <div
            style={{
              display: "grid",
              gap: "0.5rem",
              maxWidth: 520,
              marginTop: "0.4rem"
            }}
          >
            {activeModule.formFields.map((field) => (
              <input
                key={field.name}
                required
                type={field.type || "text"}
                placeholder={field.label}
                value={formValues[field.name] || ""}
                onChange={(e) => handleFormChange(field.name, e.target.value)}
                style={{
                  padding: "0.35rem 0.5rem",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  fontSize: "0.8rem"
                }}
              />
            ))}
            <button
              className="btn primary"
              type="submit"
              style={{ width: "fit-content" }}
            >
              حفظ داخل واجهة العرض
            </button>
          </div>
        </form>
      </div>

      <section style={{ marginTop: "1rem" }}>
        <VisionMappingDemo />
      </section>
      <section style={{ marginTop: "0.75rem" }}>
        <ReportsDemo />
      </section>
    </div>
  );
}