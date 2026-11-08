import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "বাজার দর (Bazar Dor) — প্রয়োজনীয় পণ্যের দাম এক নজরে",
  description:
    "নিত্যপ্রয়োজনীয় পণ্যের দৈনন্দিন বাজারদর, মূল্য বৃদ্ধির হার ও বাজারভিত্তিক বিস্তারিত তথ্যের প্ল্যাটফর্ম।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('bazardor-theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}

                // Disable right-click context menu across the entire website
                document.addEventListener('contextmenu', function(e) {
                  e.preventDefault();
                }, false);

                // Disable inspect and view-source shortcuts
                document.addEventListener('keydown', function(e) {
                  if (
                    e.key === 'F12' ||
                    (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) ||
                    (e.ctrlKey && (e.key === 'u' || e.key === 'U'))
                  ) {
                    e.preventDefault();
                  }
                }, false);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-200">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3500,
            style: {
              background: "#1e293b",
              color: "#fff",
              fontSize: "14px",
              borderRadius: "8px",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
