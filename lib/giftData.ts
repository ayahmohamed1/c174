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
    I love you so, so much, and I honestly can't imagine my life without you.
I still can't believe that our Katb Ketab is happening next month. Of course, I'm scared, but at the same time, I feel so lucky knowing that you're going to be my husband and that I'll become a part of you. I know you'll always protect me, and that you'll never let me feel lost or face this world all alone.
I'm so grateful that you've always been by my side, supporting me and standing behind me. I'm grateful for your love, your care, and the way you make me feel. I'm grateful that my sadness has never been something you could simply overlook. I know I've been under a lot of pressure lately, emotionally exhausted, and sometimes irritated over the smallest things. I'm sorry if that has ever hurt or bothered you. But I truly love you, and neither you nor the love we share will ever be something I take for granted.
I know you were upset with me about postponing the wedding, but I want you to understand that my fear isn't about you or anything you've done. It's coming from things deep inside me that have nothing to do with you.
Do you remember when I told you I was waiting for the man whose rib I was created from, the one closest to his heart? You're that person. You're the one I've been waiting for all my life. No matter how many disagreements or difficult moments we might go through, you're still my love, and I want us to keep putting in the effort to make our relationship stronger and make each other happier and more comfortable.
I know you've trusted me with your heart and your feelings, and I promise I'll always try my best to be worthy of that trust.
Happy birthday, my love. I'm so happy to have you in my life. I hope my presence in your life will always feel like a safe place, and that it will be the beginning of something beautiful, helping you achieve everything you've ever dreamed of. I pray that we grow, succeed, and become better together, always standing by each other and being each other's strength and support. I love you.
You always try so hard to make me happy, even though I know that life hasn't been particularly easy for you lately. So let me do something small to make you happy and make your birthday a little more special. This is the last birthday I'll celebrate with you as your fiancée, and hopefully, all the birthdays to come will be celebrated with me as your wife and your lifelong companion.
And there's one last thing I want to tell you...
Your first 30 years have been a journey of experiences, searching, and figuring things out. But I pray that all the years ahead, as long as God blesses you with health and a long life, and as long as we're together, will be filled with peace, comfort, happiness, and reassurance.
May God never deprive me of you. May we start this new chapter of our lives surrounded by goodness, happiness, and endless love.
I love you, always. ❤️
    `,
  },

};

export default giftData;