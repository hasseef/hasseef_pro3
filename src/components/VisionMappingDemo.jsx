import React from "react";

export function VisionMappingDemo() {
  return (
    <div className="card">
      <div className="card-header">ربط رؤية المملكة 2030</div>
      <div className="card-sub">
        هذه واجهة تجريبية لآلية ربط الحلول والمشاريع والفعاليات ببرامج وأهداف رؤية 2030.
      </div>
      <div className="toolbar">
        <select>
          <option>برنامج جودة الحياة</option>
          <option>برنامج تنمية القدرات البشرية</option>
          <option>برنامج تطوير القطاع المالي</option>
          <option>برنامج خدمة ضيوف الرحمن</option>
        </select>
        <select>
          <option>هدف استراتيجي</option>
        </select>
        <select>
          <option>هدف فرعي</option>
        </select>
        <select>
          <option>هدف تفصيلي</option>
        </select>
      </div>
      <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>
        بعد اختيار البرنامج والأهداف، يتم حفظ العلاقة في محرك الربط، وتظهر في تقارير الرؤية وتقارير الجهات الحكومية
        وإمارات المناطق.
      </p>
    </div>
  );
}