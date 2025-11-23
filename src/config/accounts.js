import { coreModules } from "./coreModules";

const byIds = (...ids) => coreModules.filter(m => ids.includes(m.id));

export const accounts = [
  {
    id: "emirate",
    name: "حساب الإمارة",
    short: "الإمارة",
    role: "المنظور الإقليمي الشامل",
    description:
      "يمكن الإمارة من الإشراف على الفعاليات والمتحدثين ومشاريع المنطقة، وربطها ببرامج الرؤية 2030 وهيئات التطوير.",
    focusModules: byIds("events", "trainers", "projects", "vision2030", "govAlignment", "reports")
  },
  {
    id: "development_authority",
    name: "حساب هيئة التطوير",
    short: "هيئة التطوير",
    role: "المحرّك الإقليمي للتنمية",
    description:
      "يدير الحلول والمشاريع والفعاليات والمرافق والاحتضان على مستوى المنطقة أو المدينة، مع تقارير تنموية متقدمة.",
    focusModules: byIds("solutions", "projects", "events", "facilities", "incubation", "volunteering", "partnerships", "vision2030", "reports")
  },
  {
    id: "government",
    name: "حساب الجهة الحكومية",
    short: "الجهة الحكومية",
    role: "المحرّك القطاعي",
    description:
      "يستقبل الحلول من جميع القطاعات، ويحّولها إلى مشاريع وبرامج مرتبطة بمؤشرات أداء الجهة وبرامج الرؤية.",
    focusModules: byIds("solutions", "projects", "events", "consulting", "coop", "volunteering", "employment", "funding", "partnerships", "vision2030", "govAlignment", "reports")
  },
  {
    id: "private",
    name: "حساب القطاع الخاص",
    short: "القطاع الخاص",
    role: "المحرك الاقتصادي",
    description:
      "يوحد مسارات المسؤولية الاجتماعية والاستثمار وفرص التوظيف والتدريب والمرافق والفعاليات للشركات والمؤسسات.",
    focusModules: byIds("solutions", "projects", "events", "facilities", "consulting", "coop", "volunteering", "employment", "sponsorship", "wallet", "investment", "opportunities", "partnerships", "reports")
  },
  {
    id: "nonprofit",
    name: "حساب القطاع غير الربحي",
    short: "القطاع غير الربحي",
    role: "القلب المجتمعي",
    description:
      "بوابة للجمعيات والمؤسسات غير الربحية لطرح المشاريع وطلب التمويل والرعايات وتنظيم التطوع والفعاليات.",
    focusModules: byIds("projects", "events", "volunteering", "coop", "employment", "sponsorship", "funding", "wallet", "partnerships", "vision2030", "reports")
  },
  {
    id: "university",
    name: "حساب الجامعات",
    short: "الجامعات",
    role: "المحرّك العلمي",
    description:
      "يعزز الحلول علميًا، ويدير المشاريع البحثية والفعاليات العلمية والمرافق الجامعية والاحتضان والتدريب التعاوني.",
    focusModules: byIds("solutions", "projects", "events", "facilities", "incubation", "consulting", "coop", "volunteering", "employment", "investment", "opportunities", "vision2030", "reports")
  },
  {
    id: "donor",
    name: "حساب المانحين",
    short: "المانحون",
    role: "البوابة المالية للتنمية",
    description:
      "يُسهّل للجهات المانحة والبنوك والصناديق الاطلاع على المشاريع المؤهلة للتمويل والرعاية وتتبع أثر دعمهم.",
    focusModules: byIds("projects", "events", "sponsorship", "funding", "wallet", "reports")
  },
  {
    id: "individual",
    name: "حساب الأفراد",
    short: "الأفراد",
    role: "الواجهة المجتمعية",
    description:
      "يمكّن الفرد من تقديم حلول ومبادرات، والمشاركة في التطوع والتدريب والتوظيف والاستثمار والطبقة التخصصية.",
    focusModules: byIds("solutions", "projects", "events", "volunteering", "coop", "employment", "trainers", "investment", "opportunities", "wallet", "reports")
  }
];