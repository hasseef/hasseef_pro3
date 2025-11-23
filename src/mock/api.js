const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

let solutions = [
  {
    id: 1,
    ownerType: "فرد",
    ownerName: "مواطن مهتم بالتدريب",
    title: "منصة رقمية لتوجيه طلاب الثانوية",
    targetEntity: "وزارة التعليم",
    visionProgram: "تنمية القدرات البشرية",
    status: "قيد التقييم"
  },
  {
    id: 2,
    ownerType: "جمعية",
    ownerName: "جمعية تنمية المجتمع",
    title: "برنامج تمكين للأسر المنتجة في المنطقة",
    targetEntity: "بنك التنمية الاجتماعية",
    visionProgram: "برنامج تعزيز التنوع الاقتصادي",
    status: "محول إلى مشروع"
  }
];

let projects = [
  {
    id: "P-1001",
    title: "برنامج تمكين للأسر المنتجة في حائل",
    owner: "جمعية تنموية",
    visionProgram: "جودة الحياة",
    region: "منطقة حائل",
    status: "قيد التنفيذ"
  },
  {
    id: "P-1002",
    title: "منصة توجيه مهني لطلاب الثانوية",
    owner: "وزارة التعليم",
    visionProgram: "تنمية القدرات البشرية",
    region: "على مستوى المملكة",
    status: "قيد الإطلاق"
  }
];

let events = [
  {
    id: 101,
    title: "ملتقى التطوع في رؤية 2030",
    organizer: "جمعية تنموية",
    emirateStatus: "قيد الاعتماد",
    date: "1447/02/10",
    location: "مسرح الغرفة التجارية"
  },
  {
    id: 102,
    title: "منتدى الابتكار الاجتماعي",
    organizer: "هيئة تطوير المنطقة",
    emirateStatus: "معتمد",
    date: "1447/03/05",
    location: "مركز المؤتمرات"
  }
];

let fundingOps = [
  {
    id: "F-001",
    title: "تمويل برنامج تمكين للأسر المنتجة في المنطقة",
    requester: "جمعية الأسر المنتجة",
    amount: "500,000 ريال",
    donor: "بنك تنموي",
    status: "قيد الدراسة"
  },
  {
    id: "F-002",
    title: "رعاية ملتقى الشباب وريادة الأعمال",
    requester: "غرفة تجارية",
    amount: "200,000 ريال",
    donor: "شركة كبرى",
    status: "معتمد"
  }
];

export async function fetchSolutions() {
  await delay();
  return solutions;
}

export async function createSolution(payload) {
  await delay();
  const next = {
    id: solutions.length + 1,
    status: "جديد",
    ...payload
  };
  solutions = [next, ...solutions];
  return next;
}

export async function fetchProjects() {
  await delay();
  return projects;
}

export async function fetchEvents() {
  await delay();
  return events;
}

export async function fetchFundingOps() {
  await delay();
  return fundingOps;
}