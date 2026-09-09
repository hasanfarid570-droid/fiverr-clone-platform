# ركاز - Rekaz Platform 🚀

منصة عمل حر متكاملة للربح الحقيقي - Platform for freelancing and service delivery

## 📋 الميزات الرئيسية

✅ **نظام المستخدمين**
- تسجيل وتسجيل دخول آمن
- ملفات شخصية للبائعين والمشترين
- نظام التقييمات والمراجعات

✅ **إدارة الخدمات**
- إنشاء وتعديل الخدمات
- عرض تفاصيل الخدمة
- البحث والتصفية المتقدمة

✅ **نظام الطلبات**
- إنشاء طلبات (orders)
- تتبع حالة الطلب
- إدارة المشاريع

✅ **التواصل الفوري**
- رسائل حقيقية بين البائع والمشتري
- تحديثات فوري عبر Socket.io
- مرفقات وملفات

✅ **نظام الدفع**
- دفع آمن عبر Stripe
- محفظة رقمية
- سحب الأرباح

✅ **نظام التقييمات**
- تقييمات النجوم
- تعليقات مفصلة
- ردود البائع

---

## 🛠️ التقنيات المستخدمة

### Backend
- **Node.js** - خادم الويب
- **Express.js** - إطار العمل
- **MongoDB** - قاعدة البيانات
- **Socket.io** - التواصل الفوري
- **Stripe** - معالجة الدفع
- **JWT** - المصادقة والتفويض

### Frontend (قادم)
- **React.js**
- **Redux** - إدارة الحالة
- **Axios** - طلبات HTTP
- **Tailwind CSS** - التصميم

---

## 📂 هيكل المشروع

```
rekaz-platform/
├── models/
│   ├── User.js           # نموذج المستخدم
│   ├── Service.js        # نموذج الخدمة
│   ├── Order.js          # نموذج الطلب
│   ├── Message.js        # نموذج الرسالة
│   └── Review.js         # نموذج التقييم
├── routes/
│   ├── auth.js           # مسارات المصادقة
│   ├── users.js          # مسارات المستخدمين
│   ├── services.js       # مسارات الخدمات
│   ├── orders.js         # مسارات الطلبات
│   ├── messages.js       # مسارات الرسائل
│   ├── reviews.js        # مسارات التقييمات
│   └── payments.js       # مسارات الدفع
├── middleware/
│   └── auth.js           # التحقق من JWT
├── server.js             # ملف الخادم الرئيسي
├── package.json
└── .env.example
```

---

## 🚀 البدء السريع

### المتطلبات
- Node.js 14+
- MongoDB
- Stripe Account

### التثبيت

```bash
# 1. استنساخ المشروع
git clone https://github.com/hasanfarid570-droid/fiverr-clone-platform.git
cd fiverr-clone-platform

# 2. تثبيت الحزم
npm install

# 3. إنشاء ملف .env
cp .env.example .env

# 4. ملء بيانات المتغيرات
# عدّل .env بمفاتيحك الخاصة

# 5. تشغيل الخادم
npm run dev
```

الخادم سيعمل على: `http://localhost:5000`

---

## 📚 API الرئيسية

### 🔐 المصادقة
```
POST   /api/auth/register      # تسجيل حساب جديد
POST   /api/auth/login         # تسجيل الدخول
```

### 👤 المستخدمون
```
GET    /api/users/:id          # الحصول على ملف المستخدم
PUT    /api/users/profile      # تحديث الملف الشخصي
GET    /api/users/seller/:id   # الحصول على بيانات البائع
```

### 📦 الخدمات
```
POST   /api/services           # إنشاء خدمة جديدة
GET    /api/services           # الحصول على قائمة الخدمات
GET    /api/services/:id       # الحصول على تفاصيل الخدمة
PUT    /api/services/:id       # تحديث الخدمة
DELETE /api/services/:id       # حذف الخدمة
```

### 📋 الطلبات
```
POST   /api/orders             # إنشاء طلب جديد
GET    /api/orders             # الحصول على طلباتي
GET    /api/orders/:id         # تفاصيل الطلب
PUT    /api/orders/:id/status  # تحديث حالة الطلب
```

### 💬 الرسائل
```
POST   /api/messages           # إرسال رسالة
GET    /api/messages/:orderId  # الحصول على الرسائل
PUT    /api/messages/:id/read  # تحديد الرسالة كمقروءة
```

### ⭐ التقييمات
```
POST   /api/reviews            # إضافة تقييم
GET    /api/reviews/service/:id    # تقييمات الخدمة
GET    /api/reviews/seller/:id     # تقييمات البائع
PUT    /api/reviews/:id/response   # رد البائع
```

### 💳 الدفع
```
POST   /api/payments/checkout  # إنشاء معاملة دفع
POST   /api/payments/confirm   # تأكيد الدفع
POST   /api/payments/withdraw  # سحب الأرباح
GET    /api/payments/wallet    # رصيد المحفظة
```

---

## 🔑 متغيرات البيئة

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/rekaz
JWT_SECRET=your_jwt_secret_key
STRIPE_KEY=your_stripe_key
STRIPE_SECRET=your_stripe_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
CLIENT_URL=http://localhost:3000
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password
```

---

## 📝 الخطوات القادمة

- [ ] بناء واجهة React للتطبيق
- [ ] تطبيق تطبيق الهاتف (React Native/Flutter)
- [ ] نظام البحث المتقدم
- [ ] لوحة تحكم الإدارة
- [ ] نظام التنبيهات والإشعارات
- [ ] نظام البحث الموزع
- [ ] تحسين الأداء والـ Caching

---

## 🤝 المساهمة

نرحب بمساهماتك! يرجى:
1. عمل Fork للمشروع
2. إنشاء branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add AmazingFeature'`)
4. Push إلى الـ branch (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

---

## 📄 الترخيص

MIT License - انظر ملف LICENSE للتفاصيل

---

## 📞 التواصل

- GitHub: [@hasanfarid570-droid](https://github.com/hasanfarid570-droid)
- Email: hasanfarid570@gmail.com

---

**صُنِع بـ ❤️ لمنصة عربية قوية للعمل الحر**
