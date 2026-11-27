import type { Metadata } from "next";

// Privacy policy for the Android app "Murajaah" (مراجعة الحفظ). Linked from the app and its Google Play listing.
export const metadata: Metadata = {
  title: "Murajaah – Privacy Policy",
  description: "Privacy policy for the Murajaah Quran review app.",
  robots: { index: true, follow: true },
};

const updated = "27 November 2026";
const email = "saeedmaldosary@gmail.com";
const googleAds = "https://policies.google.com/technologies/partner-sites";

export default function MurajaahPrivacy() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 space-y-12 leading-7">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Murajaah – Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
        <p>
          Murajaah (مراجعة الحفظ) is an Android app that helps you review the parts of the Quran you have memorized. It
          is made by Saeed Mohammed Saad Aldosari. This policy explains what data the app uses.
        </p>

        <h2 className="text-lg font-semibold">Data stays on your phone</h2>
        <p>
          The app has no account and no server. What you memorized, your review history and your settings are saved
          only on your device. We do not collect, receive or sell this data. It is deleted when you uninstall the app
          or use &quot;Clear data&quot; in the app&apos;s settings.
        </p>

        <h2 className="text-lg font-semibold">Reminders</h2>
        <p>
          If you turn on the daily reminder, the app asks for permission to show notifications. Reminders are
          scheduled on your device and you can turn them off at any time.
        </p>

        <h2 className="text-lg font-semibold">Ads (Google AdMob)</h2>
        <p>
          The free app shows ads from Google AdMob. To show and measure ads and to prevent fraud, Google may collect
          your device&apos;s advertising ID, IP address (which gives an approximate location), and information about
          how the app and ads are used. In the EU, UK and similar regions the app asks for your consent first. You can
          reset your advertising ID or turn off ad personalization in your Android settings. Learn how Google uses this
          data:{" "}
          <a className="underline" href={googleAds}>
            {googleAds}
          </a>
          .
        </p>

        <h2 className="text-lg font-semibold">Children</h2>
        <p>The app is made for adults and is not directed at children under 13.</p>

        <h2 className="text-lg font-semibold">Changes and contact</h2>
        <p>
          If this policy changes, the new version will be posted on this page with a new date. Questions:{" "}
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </section>

      <section dir="rtl" lang="ar" className="space-y-4 border-t pt-10" style={{ fontFamily: "var(--font-arabic)" }}>
        <h2 className="text-2xl font-semibold">مراجعة الحفظ – سياسة الخصوصية</h2>
        <p className="text-sm text-muted-foreground">آخر تحديث: ٢٧ نوفمبر ٢٠٢٦</p>
        <p>
          «مراجعة الحفظ» تطبيق أندرويد يساعدك على مراجعة ما تحفظه من القرآن الكريم، من تطوير سعيد محمد سعد الدوسري.
          توضح هذه الصفحة البيانات التي يستخدمها التطبيق.
        </p>

        <h3 className="text-lg font-semibold">بياناتك تبقى على جوالك</h3>
        <p>
          لا يوجد حساب ولا خادم. ما تحفظه وسجل مراجعاتك وإعداداتك محفوظة على جهازك فقط، ولا نجمعها ولا نستلمها ولا
          نبيعها. تُحذف عند حذف التطبيق أو عند اختيار «مسح البيانات» من الإعدادات.
        </p>

        <h3 className="text-lg font-semibold">التذكير</h3>
        <p>
          عند تفعيل التذكير اليومي يطلب التطبيق إذن الإشعارات. التذكير مجدول على جهازك ويمكنك إيقافه في أي وقت.
        </p>

        <h3 className="text-lg font-semibold">الإعلانات (Google AdMob)</h3>
        <p>
          تعرض النسخة المجانية إعلانات من Google AdMob. لعرض الإعلانات وقياسها ومنع الاحتيال قد تجمع Google معرّف
          الإعلانات في جهازك وعنوان IP (الذي يدل على موقع تقريبي) ومعلومات عن استخدام التطبيق والإعلانات. في الاتحاد
          الأوروبي والمملكة المتحدة يطلب التطبيق موافقتك أولًا. يمكنك إعادة ضبط معرّف الإعلانات أو إيقاف تخصيص الإعلانات من
          إعدادات أندرويد. للمزيد:{" "}
          <a className="underline" href={googleAds} dir="ltr">
            {googleAds}
          </a>
        </p>

        <h3 className="text-lg font-semibold">الأطفال</h3>
        <p>التطبيق موجّه للبالغين وليس موجّهًا للأطفال دون ١٣ سنة.</p>

        <h3 className="text-lg font-semibold">التعديلات والتواصل</h3>
        <p>
          عند تعديل هذه السياسة تُنشر النسخة الجديدة في هذه الصفحة بتاريخ جديد. للاستفسار:{" "}
          <a className="underline" href={`mailto:${email}`} dir="ltr">
            {email}
          </a>
        </p>
      </section>
    </main>
  );
}
