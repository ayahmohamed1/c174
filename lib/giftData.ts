// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const giftData: Record<string, GiftData> = {

  // ----------------------------------------------------------
  // CUSTOMER: Aya
  // Link: yourdomain.com/gift/aya
  // ----------------------------------------------------------
  aya: {
    name: "samsomi",                                     // اسم مستلم الهدية
    senderName: "your love",                                   // التوقيع في آخر الرسالة (اختياري)
    envelopeImage: "/images/envelope-aya.png",           // صورة الظرف
    birthdayImage: "/images/birthday-aya.png",           // صورة الهدية النهائية
    accentColor: "#38bdf8",                              // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
    musicUrl: "",                                        // رابط الموسيقى هنا
    message: ` 
  Happy birthday, my love. ❤️

Being with you has changed the way I understand happiness. It is not always loud or perfect or dramatic; sometimes it is just knowing I get to call you, laugh with you, plan with you, and come back to someone who feels like peace.

I admire the girl you are, the way you love, the way you keep growing, and the way you make my life feel more meaningful without even trying.

I hate that I cannot be there to celebrate you in person today, but I hope you feel me loving you from here in every message, every call, and every thought I send your way.

You deserve a birthday full of laughter, sweetness, beautiful surprises, and people who make you feel as special as you truly are.

I miss you more than I can say, but I am so grateful that even from far away, I get to love you.

If I could be anywhere today, it would be beside you — watching you smile, annoying you lovingly, taking too many pictures, and making sure you know exactly how adored you are.

Until I can do all of that in person, I hope this message holds a little piece of my heart and reminds you that distance does not make you any less loved.

Happy birthday once again, my love. I wish I could hold you today. ❤️
    `,
  },

};

export default giftData;