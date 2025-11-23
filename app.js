(function () {
  const sections = {
    home: document.getElementById("section-home"),
    accounts: document.getElementById("section-accounts"),
    services: document.getElementById("section-services"),
    vision: document.getElementById("section-vision"),
    about: document.getElementById("section-about"),
  };

  const topbarTitle = document.getElementById("topbar-title");

  const titles = {
    home: "المنصة الوطنية للتكامل التنموي وتمكين المشاركة المجتمعية",
    accounts: "الحسابات الوطنية والحساب الإداري",
    services: "الخدمات التشغيلية في منصة حصيف",
    vision: "التكامل مع رؤية المملكة 2030",
    about: "عن منصة حصيف",
  };

  function activateSection(id) {
    Object.keys(sections).forEach((key) => {
      if (key === id) {
        sections[key].classList.add("section-active");
      } else {
        sections[key].classList.remove("section-active");
      }
    });

    topbarTitle.textContent = titles[id] || "منصة حصيف";

    document
      .querySelectorAll(".nav-item")
      .forEach((btn) => btn.classList.remove("nav-item-active"));
    const activeBtn = document.querySelector(`.nav-item[data-section="${id}"]`);
    if (activeBtn) activeBtn.classList.add("nav-item-active");
  }

  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-section");
      if (target) activateSection(target);
    });
  });

  document.querySelectorAll("[data-section-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-section-target");
      if (target) activateSection(target);
    });
  });

  // Modal logic for simple demo data
  const overlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const btnClose = document.getElementById("modal-close");

  const templates = {
    solutions: `
      <p>
        نموذج مبسط لاستقبال الحلول والمبادرات (تجريبي). يمكن لاحقًا تحويل هذا النموذج إلى نموذج
        حقيقي مرتبط بقاعدة بيانات وواجهات برمجة تطبيقات.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>صاحب الحل</th>
            <th>نوعه</th>
            <th>عنوان الحل</th>
            <th>الجهة المستهدفة</th>
            <th>برنامج الرؤية</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>مواطن مهتم بالتدريب</td>
            <td>فرد</td>
            <td>منصة رقمية للتوجيه المهني لطلاب الثانوية</td>
            <td>وزارة التعليم</td>
            <td>تنمية القدرات البشرية</td>
            <td><span class="chip">قيد التقييم</span></td>
          </tr>
          <tr>
            <td>2</td>
            <td>جمعية تنمية المجتمع</td>
            <td>جمعية</td>
            <td>برنامج تمكين للأسر المنتجة في المنطقة</td>
            <td>بنك التنمية الاجتماعية</td>
            <td>جودة الحياة</td>
            <td><span class="chip primary">محول إلى مشروع</span></td>
          </tr>
        </tbody>
      </table>
    `,
    projects: `
      <p>
        سجل مبسط للمشاريع والبرامج المعتمدة داخل المنصة على مستوى مختلف الحسابات.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>الرقم</th>
            <th>عنوان المشروع</th>
            <th>الجهة المالكة</th>
            <th>برنامج الرؤية</th>
            <th>المنطقة</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P-1001</td>
            <td>برنامج تمكين للأسر المنتجة في حائل</td>
            <td>جمعية تنموية</td>
            <td>جودة الحياة</td>
            <td>منطقة حائل</td>
            <td><span class="chip">قيد التنفيذ</span></td>
          </tr>
          <tr>
            <td>P-1002</td>
            <td>منصة توجيه مهني لطلاب الثانوية</td>
            <td>وزارة التعليم</td>
            <td>تنمية القدرات البشرية</td>
            <td>على مستوى المملكة</td>
            <td><span class="chip">قيد الإطلاق</span></td>
          </tr>
        </tbody>
      </table>
    `,
    events: `
      <p>
        نموذج مبسط لسجل الفعاليات، يوضّح دور الإمارة والجهات المنظمة في الاعتماد والمتابعة.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>عنوان الفعالية</th>
            <th>الجهة المنظمة</th>
            <th>حالة اعتماد الإمارة</th>
            <th>التاريخ</th>
            <th>الموقع</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>ملتقى التطوع في رؤية 2030</td>
            <td>جمعية تنموية</td>
            <td><span class="chip">قيد الاعتماد</span></td>
            <td>1447/02/10</td>
            <td>مسرح الغرفة التجارية</td>
          </tr>
          <tr>
            <td>102</td>
            <td>منتدى الابتكار الاجتماعي</td>
            <td>هيئة تطوير المنطقة</td>
            <td><span class="chip primary">معتمد</span></td>
            <td>1447/03/05</td>
            <td>مركز المؤتمرات</td>
          </tr>
        </tbody>
      </table>
    `,
  };

  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-modal");
      modalTitle.textContent = btn.parentElement.querySelector(".card-header").textContent;
      modalBody.innerHTML = templates[key] || "";
      overlay.classList.remove("hidden");
    });
  });

  btnClose.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });

  // Default
  activateSection("home");
})();