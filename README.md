# واژه‌نامه تخصصی هوش مصنوعی

واژه‌نامه جامع اصطلاحات و مفاهیم هوش مصنوعی به زبان فارسی

🌐 **سایت آنلاین:** [mehdeh.github.io/ai-glossary-persian](https://mehdeh.github.io/ai-glossary-persian)

## درباره پروژه

این پروژه یک واژه‌نامه آنلاین برای اصطلاحات تخصصی هوش مصنوعی است که بر اساس [Glossary of artificial intelligence](https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence) از ویکی‌پدیا ایجاد شده است.

**ریپازیتوری:** [github.com/mehdeh/ai-glossary-persian](https://github.com/mehdeh/ai-glossary-persian)

## ویژگی‌ها

- ✅ جستجوی واژه‌ها
- ✅ فهرست الفبایی فارسی
- ✅ دسته‌بندی موضوعی
- ✅ نمایش فرمول‌های ریاضی
- ✅ طراحی واکنش‌گرا (Responsive)
- ✅ پشتیبانی کامل از راست‌چین (RTL)

## ساختار پروژه

```
ai-glossary-persian/
├── index.html          # صفحه اصلی
├── styles.css          # استایل‌های CSS
├── script.js           # منطق JavaScript
├── glossary-data.js    # داده‌های واژه‌نامه
├── README.md          # این فایل
└── .gitignore         # فایل‌های نادیده گرفته شده
```

## راه‌اندازی

### روش 1: استفاده مستقیم

فقط فایل `index.html` را در مرورگر باز کنید.

### روش 2: استفاده از سرور محلی

برای اجرای محلی با یک سرور ساده:

```bash
# با Python 3
python -m http.server 8000

# یا با Node.js (http-server)
npx http-server
```

سپس به آدرس `http://localhost:8000` بروید.

## استقرار در GitHub Pages

این پروژه از طریق GitHub Pages در آدرس زیر در دسترس است:

**🌐 [mehdeh.github.io/ai-glossary-persian](https://mehdeh.github.io/ai-glossary-persian)**

برای فعال‌سازی یا به‌روزرسانی GitHub Pages:

1. به [Settings > Pages](https://github.com/mehdeh/ai-glossary-persian/settings/pages) بروید
2. Source را روی "main" branch و "/ (root)" تنظیم کنید
3. Save کنید

سایت به طور خودکار پس از هر push به branch main به‌روزرسانی می‌شود.

## افزودن واژه جدید

برای افزودن واژه جدید، فایل `glossary-data.js` را ویرایش کنید و یک شیء جدید به آرایه `glossaryData` اضافه کنید:

```javascript
{
    id: 'unique-id',
    title: 'عنوان فارسی',
    english: 'English Title',
    category: 'category-name',
    definition: 'تعریف کامل...',
    formula: '\\LaTeX formula', // اختیاری
    example: 'مثال کاربردی...' // اختیاری
}
```

## دسته‌بندی‌ها

- یادگیری ماشین (machine-learning)
- یادگیری عمیق (deep-learning)
- شبکه‌های عصبی (neural-networks)
- پردازش زبان طبیعی (nlp)
- بینایی کامپیوتر (computer-vision)
- رباتیک (robotics)
- ایمنی هوش مصنوعی (ai-safety)

## فرمول‌های ریاضی

فرمول‌های ریاضی با استفاده از LaTeX نوشته می‌شوند. برای نمایش بهتر می‌توانید MathJax را اضافه کنید:

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

## مجوز

این پروژه تحت مجوز Creative Commons Attribution-ShareAlike منتشر شده است.

## مشارکت

برای مشارکت در این پروژه:

1. Fork کنید
2. یک branch جدید ایجاد کنید (`git checkout -b feature/new-term`)
3. تغییرات را commit کنید (`git commit -am 'Add new term'`)
4. Push کنید (`git push origin feature/new-term`)
5. Pull Request ایجاد کنید

## منابع

- [Glossary of artificial intelligence - Wikipedia](https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence)
- [Vazirmatn Font](https://github.com/rastikerdar/vazirmatn)

## تماس و پشتیبانی

برای پیشنهادات، گزارش مشکلات یا سوالات:

- 📝 [ایجاد Issue جدید](https://github.com/mehdeh/ai-glossary-persian/issues/new)
- 🔀 [ایجاد Pull Request](https://github.com/mehdeh/ai-glossary-persian/pulls)
- 📧 برای تماس مستقیم می‌توانید از طریق GitHub Issues پیام بگذارید

## لینک‌های مفید

- 🔗 [ریپازیتوری در GitHub](https://github.com/mehdeh/ai-glossary-persian)
- 🌐 [سایت آنلاین (GitHub Pages)](https://mehdeh.github.io/ai-glossary-persian)
- 📋 [Issues](https://github.com/mehdeh/ai-glossary-persian/issues)
- 🔀 [Pull Requests](https://github.com/mehdeh/ai-glossary-persian/pulls)

