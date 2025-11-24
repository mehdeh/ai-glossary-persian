# راهنمای استقرار در GitHub Pages

## مراحل استقرار

### 1. ایجاد ریپازیتوری در GitHub

✅ **ریپازیتوری ایجاد شده است:** [github.com/mehdeh/ai-glossary-persian](https://github.com/mehdeh/ai-glossary-persian)

اگر ریپازیتوری دیگری می‌سازید:
1. به [GitHub](https://github.com) بروید و وارد حساب کاربری خود شوید
2. روی دکمه "+" در گوشه بالا راست کلیک کنید
3. "New repository" را انتخاب کنید
4. نام ریپازیتوری را `ai-glossary-persian` وارد کنید
5. ریپازیتوری را به صورت Public یا Private ایجاد کنید
6. **توجه:** فایل README را اضافه نکنید (چون ما قبلاً آن را داریم)

### 2. آپلود فایل‌ها به GitHub

```bash
# در ترمینال، به پوشه پروژه بروید
cd ai-glossary-persian

# Git را مقداردهی اولیه کنید
git init

# تمام فایل‌ها را اضافه کنید
git add .

# اولین commit را ایجاد کنید
git commit -m "Initial commit: Persian AI Glossary"

# ریپازیتوری GitHub را به عنوان remote اضافه کنید
git remote add origin https://github.com/mehdeh/ai-glossary-persian.git

# فایل‌ها را push کنید
git branch -M main
git push -u origin main
```

### 3. فعال‌سازی GitHub Pages

1. به ریپازیتوری در GitHub بروید: [github.com/mehdeh/ai-glossary-persian](https://github.com/mehdeh/ai-glossary-persian)
2. روی تب "Settings" کلیک کنید
3. در منوی سمت چپ، "Pages" را انتخاب کنید
4. در بخش "Source":
   - Branch را روی "main" تنظیم کنید
   - Folder را روی "/ (root)" تنظیم کنید
5. روی "Save" کلیک کنید

### 4. دسترسی به سایت

پس از چند دقیقه، سایت شما در آدرس زیر در دسترس خواهد بود:

**🌐 [mehdeh.github.io/ai-glossary-persian](https://mehdeh.github.io/ai-glossary-persian)**

**نکته:** ممکن است چند دقیقه طول بکشد تا سایت برای اولین بار ساخته شود.

## به‌روزرسانی سایت

هر بار که تغییراتی در فایل‌ها ایجاد می‌کنید:

```bash
git add .
git commit -m "توضیح تغییرات"
git push
```

GitHub Pages به طور خودکار سایت را به‌روزرسانی می‌کند (معمولاً در عرض 1-2 دقیقه).

## عیب‌یابی

### سایت نمایش داده نمی‌شود

1. مطمئن شوید که فایل `.nojekyll` در ریپازیتوری وجود دارد
2. بررسی کنید که فایل `index.html` در root ریپازیتوری است
3. در Settings > Pages، بررسی کنید که branch و folder به درستی تنظیم شده‌اند
4. چند دقیقه صبر کنید - اولین build ممکن است چند دقیقه طول بکشد

### فرمول‌های ریاضی نمایش داده نمی‌شوند

1. مطمئن شوید که MathJax به درستی در `index.html` لود شده است
2. بررسی کنید که فرمول‌ها با `$$` یا `\(` و `\)` محصور شده‌اند
3. Console مرورگر را برای خطاهای JavaScript بررسی کنید

### استایل‌ها اعمال نمی‌شوند

1. بررسی کنید که مسیر فایل `styles.css` در `index.html` صحیح است
2. مطمئن شوید که فایل CSS در ریپازیتوری commit شده است

## تست محلی

قبل از push کردن به GitHub، می‌توانید سایت را به صورت محلی تست کنید:

```bash
# با Python 3
python3 -m http.server 8000

# یا با Node.js
npx http-server
```

سپس به `http://localhost:8000` بروید.

## منابع مفید

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [MathJax Documentation](https://www.mathjax.org/)
- [Vazirmatn Font](https://github.com/rastikerdar/vazirmatn)

