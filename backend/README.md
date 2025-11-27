# HASSEEF Platform – Backend Scaffold

هذا مجلد مبدئي (Scaffold) للـ API الخاص بمنصة حصيف، باستخدام Node.js و Express.

## المتطلبات

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn

## التثبيت

```bash
cd backend
npm install
npm run dev
```

سيفتح السيرفر على المنفذ 4000 (أو ما يتم تحديده في متغير البيئة PORT).

## المسارات المتاحة حاليًا (MVP Demo)

- `GET /api/solutions` – عرض الحلول (من الذاكرة)
- `POST /api/solutions` – إنشاء حل جديد

- `GET /api/projects` – عرض المشاريع
- `POST /api/projects` – إنشاء مشروع جديد

- `GET /api/funding` – عرض طلبات التمويل
- `POST /api/funding` – إنشاء طلب تمويل جديد
- `PUT /api/funding/:id/approve` – اعتماد طلب تمويل

> ملاحظة: النموذج الحالي يستخدم تخزين في الذاكرة (In-Memory) لأغراض الاختبار فقط.
> يمكن لفريق التطوير استبداله بسهولة بقاعدة بيانات حقيقية (PostgreSQL, MySQL, MongoDB)
> عبر تحديث ملفات models وربطها بـ ORM مثل Prisma أو Sequelize.

## الخطوة التالية

- ربط هذا الـ API مع واجهات الـ Frontend الموجودة في مجلد `frontend`
- إضافة بقية المكونات (Events, Volunteering, CoopTraining, Vision2030Map, ImpactReports...)
- تطبيق نظام المستخدمين والصلاحيات (Auth / RBAC)