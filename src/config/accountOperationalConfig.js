// src/config/accountOperationalConfig.js
// تعريف المكوّنات التشغيلية لكل حساب في منصة حصيف (تجريبي وقابل للتطوير لاحقاً)

export const accountOperationalConfig = {
  emirate: {
    modules: [
      {
        id: "regional_projects",
        label: "مشاريع المنطقة",
        description: "إدارة المشاريع ذات الأثر الإقليمي داخل نطاق الإمارة.",
        columns: [
          { key: "code", label: "معرّف المشروع" },
          { key: "title", label: "عنوان المشروع" },
          { key: "owner", label: "الجهة المنفذة" },
          { key: "region", label: "المحافظة / المدينة" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "معرّف المشروع", type: "text" },
          { name: "title", label: "عنوان المشروع", type: "text" },
          { name: "owner", label: "الجهة المنفذة", type: "text" },
          { name: "region", label: "المحافظة / المدينة", type: "text" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "PRJ-HA-001",
            title: "مركز الابتكار الاجتماعي في حائل",
            owner: "جمعية تنموية",
            region: "مدينة حائل",
            status: "قيد التنفيذ"
          }
        ]
      },
      {
        id: "events_approvals",
        label: "طلبات الفعاليات",
        description: "الطلبات الواردة لتنفيذ فعاليات داخل المنطقة واعتمادها.",
        columns: [
          { key: "code", label: "معرّف الطلب" },
          { key: "title", label: "اسم الفعالية" },
          { key: "organizer", label: "الجهة المنظمة" },
          { key: "place", label: "الموقع المقترح" },
          { key: "date", label: "التاريخ" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "معرّف الطلب", type: "text" },
          { name: "title", label: "اسم الفعالية", type: "text" },
          { name: "organizer", label: "الجهة المنظمة", type: "text" },
          { name: "place", label: "الموقع", type: "text" },
          { name: "date", label: "التاريخ", type: "date" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "EVT-HA-010",
            title: "ملتقى حصيف التنموي",
            organizer: "مبادرة تلبية",
            place: "مقر الإمارة",
            date: "2025-03-10",
            status: "قيد الاعتماد"
          }
        ]
      },
      {
        id: "speakers_security",
        label: "المتحدثون والمسح الأمني",
        description: "اعتماد المتحدثين والخبراء للفعاليات داخل المنطقة.",
        columns: [
          { key: "name", label: "اسم المتحدث" },
          { key: "specialty", label: "التخصص" },
          { key: "event", label: "الفعالية" },
          { key: "securityStatus", label: "نتيجة المسح الأمني" }
        ],
        formFields: [
          { name: "name", label: "اسم المتحدث", type: "text" },
          { name: "specialty", label: "التخصص", type: "text" },
          { name: "event", label: "الفعالية المرتبطة", type: "text" },
          { name: "securityStatus", label: "نتيجة المسح الأمني", type: "text" }
        ],
        sampleRows: [
          {
            name: "د. أحمد الحربي",
            specialty: "ريادة أعمال",
            event: "ملتقى حصيف التنموي",
            securityStatus: "معتمد"
          }
        ]
      },
      {
        id: "regional_needs",
        label: "الاحتياجات والفرص التنموية",
        description: "توثيق احتياجات المحافظات والفرص التنموية المقترحة.",
        columns: [
          { key: "code", label: "المعرف" },
          { key: "need", label: "وصف الاحتياج / الفرصة" },
          { key: "sector", label: "القطاع المستهدف" },
          { key: "priority", label: "الأولوية" }
        ],
        formFields: [
          { name: "code", label: "المعرف", type: "text" },
          { name: "need", label: "وصف الاحتياج / الفرصة", type: "text" },
          { name: "sector", label: "القطاع المستهدف", type: "text" },
          { name: "priority", label: "درجة الأولوية", type: "text" }
        ],
        sampleRows: [
          {
            code: "NEED-HA-01",
            need: "برامج تأهيل مهني للشباب في القرى",
            sector: "تنمية مجتمعية / عمل",
            priority: "عالية"
          }
        ]
      }
    ]
  },

  development_authority: {
    modules: [
      {
        id: "strategic_programs",
        label: "البرامج التنموية",
        description: "برامج ومبادرات هيئة التطوير على مستوى المنطقة.",
        columns: [
          { key: "code", label: "معرّف البرنامج" },
          { key: "title", label: "عنوان البرنامج" },
          { key: "axis", label: "المحور التنموي" },
          { key: "kpi", label: "مؤشر رئيسي" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "معرّف البرنامج", type: "text" },
          { name: "title", label: "عنوان البرنامج", type: "text" },
          { name: "axis", label: "المحور التنموي", type: "text" },
          { name: "kpi", label: "مؤشر رئيسي", type: "text" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "PRG-HA-DEV-01",
            title: "برنامج تنشيط الاقتصاد المحلي",
            axis: "تنمية اقتصادية",
            kpi: "عدد الفرص الاستثمارية",
            status: "قيد التنفيذ"
          }
        ]
      },
      {
        id: "development_projects",
        label: "المشاريع التطويرية",
        description: "المشاريع التنفيذية التابعة للهيئة مع الربط بالجهات المنفذة.",
        columns: [
          { key: "code", label: "معرّف المشروع" },
          { key: "title", label: "عنوان المشروع" },
          { key: "executor", label: "الجهة المنفذة" },
          { key: "area", label: "النطاق الجغرافي" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "معرّف المشروع", type: "text" },
          { name: "title", label: "عنوان المشروع", type: "text" },
          { name: "executor", label: "الجهة المنفذة", type: "text" },
          { name: "area", label: "النطاق الجغرافي", type: "text" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "DEV-PRJ-001",
            title: "تطوير واجهات المدينة",
            executor: "بلدية المدينة",
            area: "النطاق الحضري",
            status: "قيد التنفيذ"
          }
        ]
      },
      {
        id: "incubated_initiatives",
        label: "المبادرات المحتضنة",
        description: "مبادرات شبابية وريادية يتم احتضانها عبر الهيئة.",
        columns: [
          { key: "code", label: "معرّف المبادرة" },
          { key: "title", label: "عنوان المبادرة" },
          { key: "owner", label: "صاحب المبادرة" },
          { key: "supportType", label: "نوع الدعم" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "معرّف المبادرة", type: "text" },
          { name: "title", label: "عنوان المبادرة", type: "text" },
          { name: "owner", label: "صاحب المبادرة", type: "text" },
          { name: "supportType", label: "نوع الدعم", type: "text" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "INC-HA-01",
            title: "تطبيق لخدمة الأسر المنتجة",
            owner: "شركة ناشئة",
            supportType: "احتضان + مساحة عمل",
            status: "قيد الاحتضان"
          }
        ]
      }
    ]
  },

  government: {
    modules: [
      {
        id: "incoming_solutions",
        label: "الحلول والمبادرات الواردة",
        description: "الحلول التي تصل من الأفراد والجامعات والقطاعين الخاص وغير الربحي.",
        columns: [
          { key: "code", label: "معرّف الحل" },
          { key: "title", label: "عنوان الحل / المبادرة" },
          { key: "fromSector", label: "القطاع المقدم" },
          { key: "visionProgram", label: "برنامج الرؤية" },
          { key: "status", label: "حالة الدراسة" }
        ],
        formFields: [
          { name: "code", label: "معرّف الحل", type: "text" },
          { name: "title", label: "عنوان الحل / المبادرة", type: "text" },
          { name: "fromSector", label: "القطاع المقدم", type: "text" },
          { name: "visionProgram", label: "برنامج الرؤية", type: "text" },
          { name: "status", label: "حالة الدراسة", type: "text" }
        ],
        sampleRows: [
          {
            code: "SOL-EDU-001",
            title: "نظام موحد للإرشاد المهني",
            fromSector: "جامعة",
            visionProgram: "تنمية القدرات البشرية",
            status: "قيد الدراسة"
          }
        ]
      },
      {
        id: "gov_projects",
        label: "المشاريع والبرامج المعتمدة",
        description: "المشاريع الحكومية التي تم اعتمادها وتنفيذها بناءً على الحلول والاحتياجات.",
        columns: [
          { key: "code", label: "معرّف المشروع" },
          { key: "title", label: "عنوان المشروع" },
          { key: "budget", label: "الميزانية التقديرية" },
          { key: "kpi", label: "مؤشر رئيسي" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "معرّف المشروع", type: "text" },
          { name: "title", label: "عنوان المشروع", type: "text" },
          { name: "budget", label: "الميزانية التقديرية", type: "number" },
          { name: "kpi", label: "مؤشر رئيسي", type: "text" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "GOV-PRJ-01",
            title: "برنامج تمكين الطلبة من المهارات المستقبلية",
            budget: 5000000,
            kpi: "عدد المستفيدين",
            status: "قيد التنفيذ"
          }
        ]
      }
    ]
  },

  private: {
    modules: [
      {
        id: "csr_projects",
        label: "مشاريع المسؤولية الاجتماعية",
        description: "المشاريع التي تتبناها الشركات ضمن مسؤوليتها الاجتماعية.",
        columns: [
          { key: "code", label: "معرّف المشروع" },
          { key: "title", label: "عنوان المشروع" },
          { key: "company", label: "الشركة" },
          { key: "focus", label: "مجال التركيز" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "معرّف المشروع", type: "text" },
          { name: "title", label: "عنوان المشروع", type: "text" },
          { name: "company", label: "اسم الشركة", type: "text" },
          { name: "focus", label: "مجال التركيز", type: "text" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "CSR-001",
            title: "دعم معسكر التجارة الإلكترونية في حائل",
            company: "شركة تقنية",
            focus: "تمكين الشباب",
            status: "مكتمل"
          }
        ]
      },
      {
        id: "sponsorship_opportunities",
        label: "فرص الرعاية",
        description: "فعاليات ومشاريع بحاجة إلى رعاية من القطاع الخاص.",
        columns: [
          { key: "code", label: "المعرف" },
          { key: "title", label: "العنوان" },
          { key: "type", label: "نوع الفرصة" },
          { key: "requested", label: "القيمة المطلوبة" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "المعرف", type: "text" },
          { name: "title", label: "العنوان", type: "text" },
          { name: "type", label: "نوع الفرصة", type: "text" },
          { name: "requested", label: "القيمة المطلوبة", type: "number" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "SP-HA-01",
            title: "رعاية منتدى الإعلام التنموي",
            type: "رعاية فعالية",
            requested: 150000,
            status: "تحت العرض"
          }
        ]
      }
    ]
  },

  nonprofit: {
    modules: [
      {
        id: "nonprofit_projects",
        label: "مشاريع الجمعيات",
        description: "المشاريع التنموية التي تطرحها الجهات غير الربحية.",
        columns: [
          { key: "code", label: "معرّف المشروع" },
          { key: "title", label: "عنوان المشروع" },
          { key: "ngo", label: "اسم الجهة" },
          { key: "beneficiaries", label: "عدد المستفيدين المتوقع" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "معرّف المشروع", type: "text" },
          { name: "title", label: "عنوان المشروع", type: "text" },
          { name: "ngo", label: "اسم الجمعية / المؤسسة", type: "text" },
          { name: "beneficiaries", label: "عدد المستفيدين المتوقع", type: "number" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "NGO-PRJ-01",
            title: "برنامج دعم الأسر المنتجة",
            ngo: "جمعية خيرية",
            beneficiaries: 200,
            status: "قيد التمويل"
          }
        ]
      }
    ]
  },

  university: {
    modules: [
      {
        id: "research_projects",
        label: "المشاريع البحثية / التطويرية",
        description: "مشاريع بحثية وتطبيقية يمكن ربطها بالجهات والمانحين.",
        columns: [
          { key: "code", label: "معرّف المشروع" },
          { key: "title", label: "عنوان المشروع" },
          { key: "college", label: "الكلية" },
          { key: "supervisor", label: "المشرف" },
          { key: "status", label: "الحالة" }
        ],
        formFields: [
          { name: "code", label: "معرّف المشروع", type: "text" },
          { name: "title", label: "عنوان المشروع", type: "text" },
          { name: "college", label: "الكلية", type: "text" },
          { name: "supervisor", label: "المشرف", type: "text" },
          { name: "status", label: "الحالة", type: "text" }
        ],
        sampleRows: [
          {
            code: "UNI-RP-01",
            title: "نموذج دراجة التنمية",
            college: "كلية ريادة الأعمال (إن وجدت)",
            supervisor: "د. مثال",
            status: "جاهز للتطبيق الميداني"
          }
        ]
      }
    ]
  },

  donor: {
    modules: [
      {
        id: "donor_portfolio",
        label: "محفظة المشاريع المدعومة",
        description: "قائمة المشاريع التي قام المانح بدعمها ومتابعة أثرها.",
        columns: [
          { key: "code", label: "معرّف المشروع" },
          { key: "title", label: "عنوان المشروع" },
          { key: "beneficiary", label: "الجهة المستفيدة" },
          { key: "amount", label: "مبلغ الدعم" },
          { key: "impact", label: "مؤشر أثر مختصر" }
        ],
        formFields: [
          { name: "code", label: "معرّف المشروع", type: "text" },
          { name: "title", label: "عنوان المشروع", type: "text" },
          { name: "beneficiary", label: "الجهة المستفيدة", type: "text" },
          { name: "amount", label: "مبلغ الدعم", type: "number" },
          { name: "impact", label: "مؤشر أثر مختصر", type: "text" }
        ],
        sampleRows: [
          {
            code: "DON-PRJ-01",
            title: "دعم معسكر التجارة الإلكترونية",
            beneficiary: "مبادرة تلبية",
            amount: 200000,
            impact: "120 مستفيد مباشر"
          }
        ]
      }
    ]
  },

  individual: {
    modules: [
      {
        id: "my_initiatives",
        label: "مبادراتي",
        description: "الحلول والمبادرات التي يقترحها الفرد لدعم التنمية.",
        columns: [
          { key: "code", label: "معرّف المبادرة" },
          { key: "title", label: "عنوان المبادرة" },
          { key: "theme", label: "المجال" },
          { key: "targetGroup", label: "الفئة المستهدفة" },
          { key: "status", label: "حالة الدراسة" }
        ],
        formFields: [
          { name: "code", label: "معرّف المبادرة", type: "text" },
          { name: "title", label: "عنوان المبادرة", type: "text" },
          { name: "theme", label: "المجال", type: "text" },
          { name: "targetGroup", label: "الفئة المستهدفة", type: "text" },
          { name: "status", label: "حالة الدراسة", type: "text" }
        ],
        sampleRows: [
          {
            code: "IND-INI-01",
            title: "بودكاست عن قضايا الإعاقة",
            theme: "تمكين الأشخاص ذوي الإعاقة",
            targetGroup: "مجتمع عام / أسر / مختصين",
            status: "قيد الدراسة"
          }
        ]
      }
    ]
  }
};