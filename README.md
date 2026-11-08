# 🛒 বাজার দর (Bazar Dor)

> নিত্যপ্রয়োজনীয় দ্রব্যাদির দৈনন্দিন বাজারদর, মূল্য বৃদ্ধির হার ও বাজারভিত্তিক তুলনামূলক তথ্যের আধুনিক ওয়েব প্ল্যাটফর্ম।

---

## 📖 বর্ণনা (Project Overview)
**বাজার দর (Bazar Dor)** হলো একটি আধুনিক ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন, যার মাধ্যমে সাধারণ ক্রেতারা প্রতিদিনের চাল, ডাল, তেল, শাকসবজি, মাছ ও মাংসের সর্বশেষ বাজারদর এক নজরে জানতে পারেন। প্ল্যাটফর্মটিতে মূল্য বৃদ্ধির হার, বিভিন্ন বাজারের তুলনামূলক বিশ্লেষণ এবং ক্যাটাগরিভিত্তিক ফিল্টারিং ও সাজানোর সুবিধা রয়েছে।

---

## 🛠️ ব্যবহৃত প্রযুক্তিসমূহ (Technologies Used)
- **ফ্রন্টএন্ড ফ্রেমওয়ার্ক:** [Next.js 16 (App Router)](https://nextjs.org/)
- **ইউজার ইন্টারফেস:** [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **আইকন ও ইউটিলিটি:** [Lucide React](https://lucide.dev/), [React Hot Toast](https://react-hot-toast.com/)
- **অথেনটিকেশন:** [BetterAuth](https://better-auth.com/) (Email/Password, Google OAuth, Discord OAuth)
- **ডাটাবেস:** [MongoDB](https://www.mongodb.com/) (ব্যবহারকারী ও সেশন ব্যবস্থাপনার জন্য)
- **ডেটা উৎস:** BazarDor REST API (`https://openapi.programming-hero.com/api/bazardor`)
- **ফন্ট:** Hind Siliguri (গুগল বাংলা ফন্ট)

---

## ✨ প্রধান ৫টি বৈশিষ্ট্য (Key Features)

1. **রিয়েলটাইম প্রাইস টিকার (Price Ticker Marquee):** 
   ওয়েবসাইটের হেডারে অবিরাম চলমান প্রাইস টিকারের মাধ্যমে গুরুত্বপূর্ণ পণ্যের বর্তমান বাজারমূল্য ও হ্রাস/বৃদ্ধির শতাংশ (▲/▼) তৎক্ষণাৎ দেখা যায়।

2. **বাজারের গতিবিধি বিশ্লেষণ (Market Trend Sections):**
   হোম পেজে শীর্ষ ৬টি মূল্যবৃদ্ধিকারী পণ্য (**“আজ দাম বেড়েছে ▲”**) এবং শীর্ষ ৬টি মূল্যহ্রাসকারী পণ্য (**“আজ দাম কমেছে ▼”**) আলাদা সেকশনে স্বয়ংক্রিয়ভাবে ফিল্টার হয়ে প্রদর্শিত হয়।

3. **বাংলা সংখ্যাভিত্তিক সুনির্দিষ্ট সর্টিং (Bengali Numeral Sorting):**
   ক্যাটাগরি পেজে যেকোনো পণ্যের দাম কম থেকে বেশি এবং বেশি থেকে কম ক্রমানুসারে নিখুঁতভাবে সাজানো যায়, যা বাংলা ডিজিটের সঠিক গাণিতিক মান বজায় রেখে কাজ করে।

4. **বাজারভিত্তিক তুলনামূলক রিপোর্ট ও বিস্তারিত তথ্য (Market-wise Price Breakdown):**
   প্রতিটি পণ্যের নিজস্ব বিস্তারিত পেজে ঢাকা সহ দেশের বিভিন্ন পাইকারি ও খুচরা বাজারের সর্বনিম্ন, সর্বোচ্চ এবং গড় মূল্যের পূর্ণাঙ্গ তালিকা প্রদর্শিত হয়। (সুরক্ষিত রুট)।

5. **সম্পূর্ণ সুরক্ষিত প্রমাণীকরণ ও প্রোফাইল আপডেট (BetterAuth & Profile Management):**
   ইমেইল/পাসওয়ার্ড ও গুগল/ডিসকর্ড সোশ্যাল লগইন ব্যবস্থা। ব্যবহারকারীরা তাদের প্রোফাইল পেজ থেকে সহজে নিজেদের তথ্য (নাম) পরিবর্তন ও আপডেট করতে পারেন।

---

## 🚀 লোকাল সেটআপ ও রান করার নিয়ম (Getting Started)

১. প্রজেক্টের ডিপেন্ডেন্সি ইনস্টল করুন:
```bash
cd at
npm install
```

২. `.env` ফাইলে প্রয়োজনীয় পরিবেশ ভেরিয়েবলসমূহ যাচাই করুন:
```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
```

৩. ডেভেলপমেন্ট সার্ভার চালু করুন:
```bash
npm run dev
```

ব্রাউজারে [http://localhost:3000](http://localhost:3000) লিংকে ভিজিট করুন।

---

## 📱 রেসপন্সিভ ডিজাইন
মোবাইল, ট্যাবলেট এবং ডেস্কটপ সহ যেকোনো ডিভাইসে ব্যবহারের উপযোগী করে তৈরি করা হয়েছে।
# bazzar
# assingment-7-with-AI
# assingment-7-with-AI
# assingment-7-with-AI
