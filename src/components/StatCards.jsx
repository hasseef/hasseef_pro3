import React from "react";

export function StatCards({ items }) {
  return (
    <section className="stats-grid">
      {items.map((item) => (
        <article key={item.label} className="stat-card">
          <div className="stat-label">{item.label}</div>
          <div className="stat-value">{item.value}</div>
          {item.sub && <div className="stat-sub">{item.sub}</div>}
        </article>
      ))}
    </section>
  );
}