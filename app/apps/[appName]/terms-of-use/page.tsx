export default async function TermsOfUsePage({
  params,
}: {
  params: Promise<{ appName: string }>;
}) {
  const appName = (await params).appName;
  const displayAppName = appName.replace(/-/g, " ");

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 leading-relaxed">
      <h1 className="text-4xl font-semibold">Kullanım Koşulları</h1>

      <p className="mt-6">
        Bu kullanım koşulları, Emirhan Karahan (bundan böyle “Hizmet Sağlayıcı”
        olarak anılacaktır) tarafından reklam destekli bir hizmet olarak
        geliştirilen
        <strong> {displayAppName} </strong>
        adlı mobil uygulama (bundan böyle “Uygulama” olarak anılacaktır) için
        geçerlidir.
      </p>

      <p className="mt-4">
        Uygulamayı indirerek veya kullanarak, aşağıdaki şartları otomatik olarak
        kabul etmiş olursunuz. Uygulamayı kullanmadan önce bu şartları
        dikkatlice okumanız ve anlamanız şiddetle tavsiye edilir. Uygulamanın
        veya herhangi bir bölümünün izinsiz olarak kopyalanması, değiştirilmesi
        ya da Hizmet Sağlayıcı’nın ticari markalarının kullanılması kesinlikle
        yasaktır. Uygulamanın kaynak kodunu çıkarmaya çalışmak, başka dillere
        çevirmek veya türev çalışmalar oluşturmak da yasaktır. Uygulamayla
        ilişkili tüm ticari markalar, telif hakları, veritabanı hakları ve diğer
        fikri mülkiyet hakları Hizmet Sağlayıcı’ya aittir.
      </p>

      <p className="mt-4">
        Hizmet Sağlayıcı, Uygulamayı mümkün olduğunca faydalı ve verimli hale
        getirmeye kendini adamıştır. Bu doğrultuda, Uygulama üzerinde değişiklik
        yapma veya hizmetleri için ücret alma hakkını saklı tutar. Uygulama veya
        hizmetler için herhangi bir ücret alınması durumunda, bu durum açık ve
        net bir şekilde tarafınıza bildirilecektir.
      </p>

      <p className="mt-4">
        Uygulama, hizmetin sağlanabilmesi amacıyla Hizmet Sağlayıcı’ya
        sağladığınız kişisel verileri depolar ve işler. Telefonunuzun ve
        Uygulamaya olan erişiminizin güvenliğini sağlamaktan siz sorumlusunuz.
        Hizmet Sağlayıcı, cihazınızın yazılım kısıtlamalarını kaldıran jailbreak
        veya root işlemlerini kesinlikle önermemektedir. Bu tür işlemler
        cihazınızı kötü amaçlı yazılımlara, virüslere ve güvenlik açıklarına
        karşı savunmasız hale getirebilir ve Uygulamanın düzgün çalışmamasına
        veya hiç çalışmamasına neden olabilir.
      </p>

      <p className="mt-4">
        Uygulama, aşağıda belirtilen üçüncü taraf hizmet sağlayıcılarının kendi
        kullanım koşullarına tabi olan hizmetlerini kullanmaktadır. İlgili
        bağlantılar:
      </p>
      <ul className="list-disc pl-6 mt-3 space-y-1">
        <li>
          <a
            className="underline"
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer"
          >
            Google Play Services
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://www.google.com/analytics/terms/"
            target="_blank"
            rel="noreferrer"
          >
            Google Analytics for Firebase
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://firebase.google.com/terms/crashlytics"
            target="_blank"
            rel="noreferrer"
          >
            Firebase Crashlytics
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://www.adjust.com/terms/general-terms-and-conditions"
            target="_blank"
            rel="noreferrer"
          >
            Adjust
          </a>
        </li>
      </ul>

      <p className="mt-4">
        Bazı durumlarda Hizmet Sağlayıcı’nın sorumluluk kabul etmediğini
        bilmeniz gerekmektedir. Uygulamanın bazı işlevleri, aktif bir internet
        bağlantısı gerektirir (Wi-Fi veya mobil veri). Uygulamanın internet
        bağlantısı olmaması ya da veri kullanım hakkınızın tükenmesi nedeniyle
        tam kapasiteyle çalışmamasından Hizmet Sağlayıcı sorumlu tutulamaz.
      </p>

      <p className="mt-4">
        Wi-Fi dışı bir bağlantı üzerinden uygulamayı kullanıyorsanız, mobil
        operatörünüzün kullanım koşullarının geçerli olduğunu unutmayınız. Bu
        nedenle, uygulama bağlantısı sırasında oluşabilecek veri ücretleri veya
        üçüncü taraf masrafları size aittir. Uygulamayı kullanarak, bu tür
        masrafların (örneğin yurtdışında dolaşım ücretleri) sorumluluğunu kabul
        etmiş sayılırsınız. Uygulamayı kullandığınız cihazın fatura sahibi
        değilseniz, Hizmet Sağlayıcı, bu kullanıma izin almış olduğunuzu
        varsayar.
      </p>

      <p className="mt-4">
        Benzer şekilde, Uygulamayı kullanırken oluşabilecek durumlarda da Hizmet
        Sağlayıcı’nın her zaman sorumluluk kabul etmesi beklenemez. Örneğin,
        cihazınızın şarjının bitmesi durumunda hizmete erişememenizden Hizmet
        Sağlayıcı sorumlu değildir.
      </p>

      <p className="mt-4">
        Hizmet Sağlayıcı, Uygulamayı güncel ve doğru tutmak için çaba
        göstermektedir. Ancak, bu bilgilerin sağlanmasında üçüncü taraflara
        güvenmektedir. Bu nedenle, Uygulamanın işlevselliğine tamamen güvenmeniz
        sonucu doğabilecek doğrudan veya dolaylı kayıplardan Hizmet Sağlayıcı
        sorumlu tutulamaz.
      </p>

      <p className="mt-4">
        Hizmet Sağlayıcı, Uygulamayı zamanla güncellemek isteyebilir.
        Uygulamanın mevcut sürümü, çalıştığı işletim sisteminin gereksinimlerine
        göre sunulmaktadır ve gelecekte farklı sistemler için de kullanılabilir
        hale gelebilir. Uygulamayı kullanmaya devam edebilmek için bu
        güncellemeleri indirmeniz gerekebilir. Hizmet Sağlayıcı, her zaman
        uygulamayı güncelleyeceğini veya cihazınızın işletim sistemi sürümüyle
        uyumlu hale getireceğini garanti etmez. Ancak sunulan güncellemeleri
        kabul edeceğinizi kabul etmiş olursunuz.
      </p>

      <p className="mt-4">
        Hizmet Sağlayıcı ayrıca, uygulamayı sağlamayı durdurma ve istediği zaman
        önceden bildirimde bulunmaksızın hizmeti sonlandırma hakkını da saklı
        tutar. Aksi belirtilmedikçe, böyle bir fesih durumunda:
      </p>
      <ul className="list-disc pl-6 mt-3 space-y-1">
        <li>
          (a) bu kullanım koşulları kapsamında size verilen hak ve lisanslar
          sona erer,
        </li>
        <li>
          (b) uygulamayı kullanmayı durdurmalı ve (gerekirse) cihazınızdan
          silmelisiniz.
        </li>
      </ul>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">Bu Koşullardaki Değişiklikler</h2>
      <p className="mt-4">
        Hizmet Sağlayıcı, bu kullanım koşullarını zaman zaman güncelleyebilir.
        Bu nedenle, değişiklikleri gözden geçirmek için bu sayfayı düzenli
        olarak kontrol etmeniz tavsiye edilir. Herhangi bir değişiklik olması
        durumunda, yeni kullanım koşulları bu sayfada yayımlanacaktır.
      </p>
      <p className="mt-2">
        📅 Bu kullanım koşulları 2 Ağustos 2025 tarihi itibarıyla geçerlidir.
      </p>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">İletişim</h2>
      <p className="mt-4">
        Kullanım Koşulları ile ilgili herhangi bir sorunuz veya öneriniz varsa,
        lütfen aşağıdaki e-posta adresinden Hizmet Sağlayıcı ile iletişime
        geçiniz:
      </p>
      <p className="mt-2">
        📧 <code>mail@emirhankarahan.com</code>
      </p>
    </main>
  );
}
