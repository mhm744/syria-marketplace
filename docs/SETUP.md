# دليل التثبيت والإعداد

## المتطلبات الأساسية
- Node.js 16+
- Flutter SDK
- Android Studio (للتطوير على Android)

## خطوات التثبيت

### 1. استنسخ المستودع
```bash
git clone https://github.com/mhm744/syria-marketplace.git
cd syria-marketplace
```

### 2. إعداد موقع الويب
```bash
cd web
npm install
npm run dev
```
سيتم فتح الموقع على: http://localhost:3000

### 3. إعداد الخادم
```bash
cd backend
npm install
npm run dev
```
سيتم تشغيل الخادم على: http://localhost:5000

### 4. إعداد تطبيق الموبايل
```bash
cd mobile
flutter pub get
flutter run
```

## بناء APK
```bash
cd mobile
flutter build apk --release
```
سيتم إنشاء الملف في: `build/app/outputs/flutter-apk/app-release.apk`

## الميزات الرئيسية
- ✅ واجهة مستخدم عصرية
- ✅ دعم اللغة العربية
- ✅ نظام منتجات
- ✅ API آمن
