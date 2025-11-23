import { coreModules } from "./coreModules";

const pickModules = (ids) => coreModules.filter((m) => ids.includes(m.id));

export const accounts = [
  {
    id: "emirate",
    name: "حساب الإمارة",
    role: "المنظور الإقليمي الشامل",
    description: "واجهة الإشراف التنموي على مستوى المنطقة لاعتماد الفعاليات والمتحدثين ومتابعة المشاريع والتقارير.",
    focusModules: pickModules(["events", "trainers", "projects", "vision2030", "govAlignment", "reports"])
  },
  {
    id: "development_authority",
    name: "حساب هيئة التطوير",
    role: "المحرّك الإقليمي للتطوير",
    description: "إدارة الحلول والمشاريع والفعاليات والمرافق والاحتضان والشراكات على مستوى المنطقة أو المدينة.",
    focusModules: pickModules(["solutions", "projects", "events", "facilities", "incubation", "partnerships", "reports", "vision2030"])
  },
  {
    id: "government",
    name: "حساب الجهة الحكومية",
    role: "المحرّك القطاعي",
    description: "بوابة لاستقبال الحلول وإدارة المشاريع الحكومية والفعاليات والبرامج المرتبطة بالرؤية 2030.",
    focusModules: pickModules(["solutions", "projects", "events", "consulting", "funding", "partnerships", "vision2030", "govAlignment", "reports"])
  },
  {
    id: "private_sector",
    name: "حساب القطاع الخاص",
    role: "المحرّك الاقتصادي",
    description: "تفعيل دور الشركات في الحلول والمشاريع والرعايات والاستثمار والمسؤولية الاجتماعية.",
    focusModules: pickModules(["solutions", "projects", "events", "facilities", "sponsorship", "investment", "investmentOpportunities", "wallet", "employment", "coop", "volunteering", "reports"])
  },
  {
    id: "nonprofit",
    name: "حساب القطاع غير الربحي",
    role: "القلب المجتمعي",
    description: "بوابة الجمعيات والمؤسسات غير الربحية لطرح مشاريع مجتمعية وطلب التمويل والرعايات وإدارة التطوع.",
    focusModules: pickModules(["projects", "events", "volunteering", "funding", "sponsorship", "partnerships", "wallet", "vision2030", "reports"])
  },
  {
    id: "university",
    name: "حساب الجامعات",
    role: "المحرّك العلمي",
    description: "تمكين الجامعات من التعزيز العلمي، والاستشارات، والاحتضان، والمرافق، والتدريب التعاوني.",
    focusModules: pickModules(["solutions", "projects", "events", "facilities", "incubation", "consulting", "coop", "trainers", "vision2030", "reports"])
  },
  {
    id: "donor",
    name: "حساب المانحين",
    role: "البوابة المالية للتنمية",
    description: "واجهة المانحين والصناديق والبنوك لاستعراض وتمويل المشاريع ورعاية الفعاليات ومتابعة أثر الدعم.",
    focusModules: pickModules(["projects", "events", "sponsorship", "funding", "wallet", "reports", "vision2030"])
  },
  {
    id: "individual",
    name: "حساب الأفراد",
    role: "الواجهة المجتمعية",
    description: "تمكين المواطنين والمقيمين من طرح الحلول والمبادرات والمشاركة في التطوع والتدريب والاستثمار.",
    focusModules: pickModules(["solutions", "projects", "events", "volunteering", "coop", "employment", "investment", "investmentOpportunities", "trainers", "wallet", "reports"])
  }
];