# HASSEEF Platform – API Documentation (MVP)

هذه الوثيقة تشرح الواجهات البرمجية الأساسية (REST API) في السكافولد الحالي لمنصة حصيف.

جميع الطلبات والردود تستخدم JSON.

الأساس:  
`BASE_URL = http://localhost:4000` (أو عنوان السيرفر في بيئة الإنتاج)

---

## 1. Solutions API

### GET /api/solutions

يعرض قائمة الحلول المسجلة.

**Response 200**

```json
{
  "status": "success",
  "data": [
    {
      "id": "SOL-1",
      "title": "حل تنموي",
      "description": "",
      "status": "draft",
      "region": null,
      "created_at": "2025-01-01T00:00:00.000Z",
      "updated_at": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

### POST /api/solutions

ينشئ حلاً جديدًا.

**Body مثال:**

```json
{
  "title": "حل لتطوير العمل التطوعي",
  "description": "وصف تفصيلي للحل",
  "region": "منطقة حائل"
}
```

---

## 2. Projects API

### GET /api/projects

يعرض قائمة المشاريع.

### POST /api/projects

ينشئ مشروعًا جديدًا.

```json
{
  "title": "مشروع وطني",
  "description": "وصف المشروع",
  "solution_id": "SOL-1",
  "region": "منطقة حائل"
}
```

---

## 3. Funding API

### GET /api/funding

يعرض طلبات التمويل.

### POST /api/funding

ينشئ طلب تمويل جديد.

```json
{
  "project_id": "PRJ-1",
  "amount_requested": 500000,
  "donor_id": "DONOR-1"
}
```

### PUT /api/funding/:id/approve

يعتمد طلب التمويل المحدد.

---

## 4. Events API

### GET /api/events

### POST /api/events

Body مثال:

```json
{
  "title": "فعالية مجتمعية",
  "description": "وصف الفعالية",
  "project_id": "PRJ-1",
  "region": "منطقة حائل",
  "starts_at": "2025-01-10T18:00:00.000Z",
  "ends_at": "2025-01-10T21:00:00.000Z"
}
```

---

## 5. Volunteering API

### GET /api/volunteering

### POST /api/volunteering

```json
{
  "title": "فرصة تطوعية",
  "description": "وصف الفرصة",
  "project_id": "PRJ-1",
  "region": "منطقة حائل",
  "needed_volunteers": 20
}
```

---

## 6. Coop Training API

### GET /api/coop-training

### POST /api/coop-training

```json
{
  "title": "تدريب تعاوني لطلاب الجامعة",
  "description": "الوصف",
  "university": "University-1",
  "host_entity": "Gov-1",
  "region": "منطقة حائل"
}
```

---

## 7. Vision 2030 Mapping API

### GET /api/vision2030

### POST /api/vision2030

```json
{
  "program_name": "برنامج جودة الحياة",
  "strategic_goal": "تعزيز المشاركة المجتمعية",
  "sub_goal": "رفع جودة المبادرات",
  "detailed_goal": "مؤشرات تفصيلية",
  "indicator": "عدد المبادرات",
  "main_entity": "وزارة الموارد البشرية والتنمية الاجتماعية",
  "supporting_entities": ["إمارة المنطقة", "القطاع غير الربحي"],
  "region": "منطقة حائل"
}
```

---

## 8. Impact Reports API

### GET /api/impact-reports

### POST /api/impact-reports

```json
{
  "project_id": "PRJ-1",
  "summary": "ملخص أثر المشروع",
  "economic_impact": "أثر اقتصادي تقديري",
  "social_impact": "أثر اجتماعي",
  "knowledge_impact": "أثر معرفي"
}
```

---

> هذه النسخة مبدئية (MVP)، مبنية على تخزين داخل الذاكرة فقط، وتُستخدم كنموذج عمل يمكن استبداله لاحقًا بقاعدة بيانات حقيقية وتوثيق متكامل (Swagger / Postman Collection).