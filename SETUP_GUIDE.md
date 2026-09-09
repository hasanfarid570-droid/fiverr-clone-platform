## منصة ركاز المتكاملة - دليل التثبيت والتشغيل

### 🔥 المشروع جاهز الآن للتطوير والنشر!

---

## 📦 ما تم إنجازه:

### ✅ Backend (Node.js + Express)
- ✔️ نظام المصادقة الآمن (JWT)
- ✔️ إدارة المستخدمين الكاملة
- ✔️ نظام الخدمات (CRUD)
- ✔️ إدارة الطلبات والعقود
- ✔️ نظام الرسائل الفوري (Socket.io)
- ✔️ نظام التقييمات والمراجعات
- ✔️ نظام الدفع (Stripe)
- ✔️ محفظة وسحب الأرباح

### ✅ Frontend (React.js)
- ✔️ الصفحة الرئيسية مع البحث والتصفية
- ✔️ نظام المصادقة (Login/Register)
- ✔️ لوحة تحكم شاملة
- ✔️ تفاصيل الخدمة مع التقييمات
- ✔️ صفحة الدفع (Checkout)
- ✔️ تفاصيل الطلب والرسائل
- ✔️ إنشاء خدمات جديدة
- ✔️ استجابي (Responsive)

### ✅ قاعدة البيانات (MongoDB)
- ✔️ نموذج المستخدم
- ✔️ نموذج الخدمة
- ✔️ نموذج الطلب
- ✔️ نموذج الرسالة
- ✔️ نموذج التقييم

---

## 🚀 التثبيت والتشغيل السريع:

### 1️⃣ **استنساخ المشروع:**
```bash
git clone https://github.com/hasanfarid570-droid/fiverr-clone-platform.git
cd fiverr-clone-platform
```

### 2️⃣ **تثبيت Backend:**
```bash
# تثبيت الحزم
npm install

# إنشاء ملف .env من المثال
cp .env.example .env

# عدّل المتغيرات في .env
# - MongoDB URI
# - JWT Secret
# - Stripe Keys
# - إلخ

# تشغيل الخادم
npm run dev
```

الخادم سيعمل على: `http://localhost:5000`

### 3️⃣ **تثبيت Frontend:**
```bash
cd client

# تثبيت الحزم
npm install

# إنشاء ملف .env
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
echo "REACT_APP_STRIPE_KEY=your_stripe_key" >> .env

# تشغيل التطبيق
npm start
```

التطبيق سيعمل على: `http://localhost:3000`

---

## 🔑 متغيرات البيئة المهمة:

### Backend (.env):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/rekaz
JWT_SECRET=your_secret_key_here
STRIPE_KEY=pk_test_xxxxx
STRIPE_SECRET=sk_test_xxxxx
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_KEY=pk_test_xxxxx
```

---

## 📱 الميزات الرئيسية المُنفذة:

### 🎯 للمشترين (Buyers):
- البحث والتصفية المتقدمة للخدمات
- عرض تفاصيل الخدمة والتقييمات
- الطلب والدفع الآمن
- المراسلة المباشرة مع البائع
- تقييم وتقديم ملاحظات

### 💼 للبائعين (Sellers):
- إنشاء وإدارة الخدمات
- تعديل الأسعار والحزم
- قبول الطلبات ومتابعتها
- المراسلة مع المشترين
- سحب الأرباح

### 👤 للجميع:
- ملف شخصي احترافي
- نظام التقييمات 5 نجوم
- محفظة رقمية
- سجل الطلبات الكامل

---

## 🛠️ التقنيات المستخدمة:

### Backend:
- Node.js + Express.js
- MongoDB + Mongoose
- Socket.io (Real-time messaging)
- Stripe API (Payments)
- JWT (Authentication)
- Bcrypt (Password hashing)

### Frontend:
- React.js 18
- Redux Toolkit (State management)
- React Router (Navigation)
- Axios (HTTP client)
- Tailwind CSS (Styling)
- React Icons (Icons)

---

## 📊 هيكل المشروع:

```
fiverr-clone-platform/
├── server.js                 # نقطة الدخول الرئيسية
├── models/                   # نماذج MongoDB
│   ├── User.js
│   ├── Service.js
│   ├── Order.js
│   ├── Message.js
│   └── Review.js
├── routes/                   # API Routes
│   ├── auth.js
│   ├── users.js
│   ├── services.js
│   ├── orders.js
│   ├── messages.js
│   ├── reviews.js
│   └── payments.js
├── middleware/               # Custom middleware
│   └── auth.js
├── client/                   # React frontend
│   └── src/
│       ├── pages/           # صفحات التطبيق
│       ├── components/      # مكونات معاد استخدامها
│       ├── services/        # API calls
│       ├── store/           # Redux store
│       └── App.jsx
└── package.json
```

---

## 🔐 الأمان:

✅ تشفير كلمات المرور مع bcrypt
✅ مصادقة JWT آمنة
✅ حماية المسارات (Private routes)
✅ التحقق من البيانات (Validation)
✅ معالجة الأخطاء الشاملة
✅ دفع آمن عبر Stripe

---

## 📈 الخطوات التالية للتطوير:

- [ ] إضافة نظام الإشعارات
- [ ] تطبيق الهاتف (React Native)
- [ ] لوحة تحكم الإدارة
- [ ] نظام البحث المتقدم (Elasticsearch)
- [ ] نظام التوصيات
- [ ] تحسين الأداء (Caching)
- [ ] Tests والـ CI/CD
- [ ] الـ Deployment

---

## 🤝 المساهمة:

نرحب بمساهماتك! يرجى:
1. Fork المشروع
2. إنشاء branch جديد
3. الكود والـ commits
4. فتح Pull Request

---

## 📞 التواصل والدعم:

- **GitHub:** [@hasanfarid570-droid](https://github.com/hasanfarid570-droid)
- **Email:** hasanfarid570@gmail.com
- **رابط المشروع:** https://github.com/hasanfarid570-droid/fiverr-clone-platform

---

## 📄 الترخيص:

MIT License - يمكنك استخدام المشروع بحرية

---

**✨ منصة ركاز - منصة عمل حر موثوقة ومتقدمة للعالم العربي ✨**

**تم الإنشاء بـ ❤️ للمجتمع العربي**
