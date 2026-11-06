// Bengali digits mapping
export const BENGALI_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBengaliNumber(val) {
  if (val === null || val === undefined || isNaN(val)) return "০";
  // Format with commas if large number
  const parts = val.toString().split(".");
  const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatted = parts.length > 1 ? `${intPart}.${parts[1]}` : intPart;
  
  return formatted.replace(/\d/g, (d) => BENGALI_DIGITS[Number(d)] ?? d);
}

export function formatPrice(price, unit) {
  if (price === null || price === undefined) return "—";
  const numBn = toBengaliNumber(price);
  return `${numBn} ৳`;
}

export function formatUnit(unit) {
  const map = {
    kg: "কেজি",
    litre: "লিটার",
    liter: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
    hali: "হালি",
  };
  return map[unit?.toLowerCase()] || unit || "একক";
}

export function getBengaliDate() {
  const date = new Date();
  const days = [
    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার",
    "শুক্রবার",
    "শনিবার",
  ];
  const months = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];

  const dayName = days[date.getDay()];
  const day = toBengaliNumber(date.getDate());
  const monthName = months[date.getMonth()];
  const year = toBengaliNumber(date.getFullYear());

  return `${dayName}, ${day} ${monthName} ${year}`;
}
