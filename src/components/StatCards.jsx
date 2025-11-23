import React from "react";

export function StatCards({ items }) {
  if (!items?.length) return null;
  return (
    <div className="grid-3" style={{ marginBottom: "1rem" }}>
      {items.map((item) => (
        <div className="card" key={item.label}>
          <div className="card-header">{item.label}</div>
          <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
            {item.value}
          </div>
          {item.sub && <div className="card-sub">{item.sub}</div>}
        </div>
      ))}
    </div>
  );
}