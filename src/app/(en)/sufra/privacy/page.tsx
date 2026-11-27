import type { Metadata } from "next";

// Privacy policy for the Android app "Sufra" (سُفرة), an AI calorie tracker. Linked from the app and its Google Play listing.
export const metadata: Metadata = {
  title: "Sufra – Privacy Policy",
  description: "Privacy policy for the Sufra calorie tracking app.",
  robots: { index: true, follow: true },
};

const updated = "27 November 2026";
const email = "saeedmaldosary@gmail.com";
const googleAds = "https://policies.google.com/technologies/partner-sites";

export default function SufraPrivacy() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 space-y-12 leading-7">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Sufra – Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
        <p>
          Sufra (سُفرة) is an Android app that estimates the calories in your meals from a photo or from a list of
          common Saudi and Gulf foods. It is made by Saeed Mohammed Saad Aldosari. This policy explains what data the
          app uses.
        </p>

        <h2 className="text-lg font-semibold">Data on your phone</h2>
        <p>
          Your profile (sex, age, height, weight, activity and goal), the meals you log and your weight history are
          saved only on your device. There is no account. This data is deleted when you uninstall the app or use
          &quot;Clear data&quot; in the app&apos;s settings.
        </p>

        <h2 className="text-lg font-semibold">Meal photos</h2>
        <p>
          When you choose to scan a meal, the photo (reduced in size) and any description you type are sent over an
          encrypted connection to our server, which runs on Cloudflare, to estimate the food and calories. The photo
          is processed only to give you that answer. It is not stored, not linked to you and not used for anything
          else. Photos are never sent unless you press the scan button.
        </p>

        <h2 className="text-lg font-semibold">Camera and photos permissions</h2>
        <p>
          The app asks to use the camera or your photos only when you choose to scan a meal. You can say no and still
          add meals from the food list.
        </p>

        <h2 className="text-lg font-semibold">Ads (Google AdMob)</h2>
        <p>
          The free app shows ads from Google AdMob. To show and measure ads and to prevent fraud, Google may collect
          your device&apos;s advertising ID, IP address (which gives an approximate location), and information about
          how the app and ads are used. In the EU, UK and similar regions the app asks for your consent first. You can
          reset your advertising ID or turn off ad personalization in your Android settings. Learn more:{" "}
          <a className="underline" href={googleAds}>
            {googleAds}
          </a>
          .
        </p>

        <h2 className="text-lg font-semibold">Health note and children</h2>
        <p>
          Calorie estimates are approximate and are not medical advice. The app is made for adults and is not directed
          at children under 13.
        </p>

        <h2 className="text-lg font-semibold">Changes and contact</h2>
        <p>
          If this policy changes, the new version will be posted on this page with a new date. Questions:{" "}
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </section>

      <section dir="rtl" lang="ar" className="space-y-4 border-t pt-10" style={{ fontFamily: "var(--font-arabic)" }}>
        <h2 className="text-2xl font-semibold">سُفرة – سياسة الخصوصية</h2>
        <p className="text-sm text-muted-foreground">آخر تحديث: ٢٧ نوفمبر ٢٠٢٦</p>
        <p>
          «سُفرة» تطبيق أندرويد يقدّر سعرات وجباتك من صورة أو من قائمة الأكلات السعودية والخليجية، من تطوير سعيد محمد سعد
          الدوسري. توضح هذه الصفحة البيانات التي يستخدمها التطبيق.
        </p>

        <h3 className="text-lg font-semibold">بياناتك على جوالك</h3>
        <p>
          ملفك (الجنس والعمر والطول والوزن والنشاط والهدف) ووجباتك وأوزانك محفوظة على جهازك فقط، ولا يوجد حساب. تُحذف عند
          حذف التطبيق أو عند اختيار «مسح البيانات» من الإعدادات.
        </p>

        <h3 className="text-lg font-semibold">صور الوجبات</h3>
        <p>
          عندما تختار تصوير وجبة، تُرسل الصورة (بحجم مصغّر) وأي وصف تكتبه عبر اتصال مشفّر إلى خادمنا على Cloudflare لتقدير
          الأكل والسعرات فقط. لا نحتفظ بالصورة ولا نربطها بك ولا نستخدمها لأي شيء آخر، ولا تُرسل أي صورة إلا عند ضغطك زر
          التحليل.
        </p>

        <h3 className="text-lg font-semibold">إذن الكاميرا والصور</h3>
        <p>يطلب التطبيق الكاميرا أو الصور فقط عند تصوير وجبة، ويمكنك الرفض والإضافة من القائمة.</p>

        <h3 className="text-lg font-semibold">الإعلانات (Google AdMob)</h3>
        <p>
          تعرض النسخة المجانية إعلانات من Google AdMob. لعرض الإعلانات وقياسها ومنع الاحتيال قد تجمع Google معرّف الإعلانات
          في جهازك وعنوان IP (الذي يدل على موقع تقريبي) ومعلومات عن استخدام التطبيق والإعلانات. في الاتحاد الأوروبي والمملكة
          المتحدة يطلب التطبيق موافقتك أولًا. يمكنك إعادة ضبط معرّف الإعلانات أو إيقاف تخصيص الإعلانات من إعدادات أندرويد.
          للمزيد:{" "}
          <a className="underline" href={googleAds} dir="ltr">
            {googleAds}
          </a>
        </p>

        <h3 className="text-lg font-semibold">ملاحظة صحية والأطفال</h3>
        <p>تقديرات السعرات تقريبية وليست استشارة طبية. التطبيق موجّه للبالغين وليس للأطفال دون ١٣ سنة.</p>

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
