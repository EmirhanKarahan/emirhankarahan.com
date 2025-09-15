export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ appName: string }>;
}) {
  const appName = (await params).appName;
  const displayAppName = appName.replace(/-/g, " ");

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 leading-relaxed">
      <h1 className="text-4xl font-semibold">Gizlilik Politikası</h1>

      <p className="mt-6">
        Bu gizlilik politikası, Emirhan Karahan (bundan böyle “Hizmet Sağlayıcı”
        olarak anılacaktır) tarafından reklam destekli bir hizmet olarak
        geliştirilen
        <strong> {displayAppName} </strong>
        adlı mobil uygulama (bundan böyle “Uygulama” olarak anılacaktır) için
        geçerlidir. Bu hizmet “OLDUĞU GİBİ” sunulmaktadır.
      </p>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">Bilgi Toplama ve Kullanımı</h2>
      <p className="mt-4">
        Uygulama, indirildiğinde ve kullanıldığında bazı bilgileri toplayabilir.
        Bu bilgiler şunları içerebilir:
      </p>
      <ul className="list-disc pl-6 mt-3 space-y-1">
        <li>Cihazınızın İnternet Protokolü (IP) adresi</li>
        <li>
          Uygulama içerisindeki ziyaret ettiğiniz sayfalar, ziyaret tarih ve
          saati, bu sayfalarda geçirilen süre
        </li>
        <li>Uygulamada geçirilen toplam süre</li>
        <li>Mobil cihazınızda kullandığınız işletim sistemi</li>
      </ul>

      <p className="mt-4">
        Uygulama, mobil cihazınızın{" "}
        <strong>tam konum bilgilerini toplamaz</strong>.
      </p>

      <p className="mt-4">
        Ancak cihazınızın yaklaşık konum bilgileri toplanabilir. Bu bilgiler
        Hizmet Sağlayıcı tarafından aşağıdaki amaçlarla kullanılabilir:
      </p>
      <ul className="list-disc pl-6 mt-3 space-y-1">
        <li>
          <strong>Konum Tabanlı Hizmetler:</strong> Konum verileri,
          kişiselleştirilmiş içerikler, öneriler ve konum bazlı hizmetlerin
          sunulmasında kullanılır.
        </li>
        <li>
          <strong>Analiz ve İyileştirme:</strong> Toplu ve anonimleştirilmiş
          konum verileri, kullanıcı davranışlarını analiz etmede, eğilimleri
          belirlemede ve Uygulamanın performansını iyileştirmede kullanılabilir.
        </li>
        <li>
          <strong>Üçüncü Taraf Hizmetler:</strong> Zaman zaman,
          anonimleştirilmiş konum verileri dış hizmet sağlayıcılarla
          paylaşılabilir. Bu hizmetler, Uygulamanın geliştirilmesi ve
          hizmetlerin optimize edilmesi konusunda yardımcı olurlar.
        </li>
      </ul>

      <p className="mt-4">
        Hizmet Sağlayıcı, tarafınıza zaman zaman önemli bilgiler, yasal
        bildirimler ve pazarlama içerikleri sunmak amacıyla sağladığınız
        bilgileri kullanabilir.
      </p>

      <p className="mt-4">
        Daha iyi bir deneyim sağlamak amacıyla, Uygulamanın bazı özelliklerinin
        çalışabilmesi için Hizmet Sağlayıcı sizden kişisel olarak tanımlanabilir
        bilgiler talep edebilir. Bu bilgiler, bu gizlilik politikasında
        açıklandığı şekilde saklanacak ve kullanılacaktır.
      </p>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">Üçüncü Taraf Erişimi</h2>
      <p className="mt-4">
        Sadece toplu ve anonimleştirilmiş veriler, Uygulamanın ve hizmetlerin
        geliştirilmesine yardımcı olmak amacıyla zaman zaman dış hizmet
        sağlayıcılara iletilebilir. Hizmet Sağlayıcı, bilgilerinizi yalnızca bu
        gizlilik bildiriminde belirtilen şekillerde üçüncü taraflarla
        paylaşabilir.
      </p>
      <p className="mt-4">
        Uygulama, veri işleme konusunda kendi gizlilik politikalarına sahip
        üçüncü taraf hizmetleri kullanmaktadır. Bu hizmetlerin gizlilik
        politikalarına aşağıdaki bağlantılardan ulaşabilirsiniz:
      </p>
      <ul className="list-disc pl-6 mt-3 space-y-1">
        <li>
          <a
            className="underline"
            href="https://www.google.com/policies/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Google Play Services
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Google Analytics for Firebase
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://firebase.google.com/support/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Firebase Crashlytics
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://www.adjust.com/terms/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Adjust
          </a>
        </li>
      </ul>

      <p className="mt-4">
        Hizmet Sağlayıcı, Kullanıcı Tarafından Sağlanan ve Otomatik Olarak
        Toplanan Bilgileri aşağıdaki durumlarda açıklayabilir:
      </p>
      <ul className="list-disc pl-6 mt-3 space-y-1">
        <li>Yasal bir zorunluluk durumunda (örneğin, mahkeme celbi)</li>
        <li>
          Haklarını korumak, sizin ya da başkalarının güvenliğini sağlamak,
          dolandırıcılığı araştırmak veya devlet taleplerine yanıt vermek
          amacıyla iyi niyet çerçevesinde
        </li>
        <li>
          Bilgileri yalnızca Hizmet Sağlayıcının adına işleyen ve bağımsız bir
          kullanım hakkı olmayan, güvenilir hizmet sağlayıcılarla, bu gizlilik
          politikasına uymak koşuluyla
        </li>
      </ul>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">Vazgeçme Hakları</h2>
      <p className="mt-4">
        Uygulamayı kaldırarak bilgi toplanmasını kolayca durdurabilirsiniz. Bunu
        cihazınızın standart kaldırma işlemleri veya mobil uygulama mağazası
        üzerinden gerçekleştirebilirsiniz.
      </p>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">Veri Saklama Politikası</h2>
      <p className="mt-4">
        Hizmet Sağlayıcı, Kullanıcı Tarafından Sağlanan verileri, Uygulamayı
        kullandığınız sürece ve makul bir süre boyunca saklayacaktır.
      </p>
      <p className="mt-4">
        Uygulama aracılığıyla sağladığınız verilerin silinmesini isterseniz,
        lütfen aşağıdaki e-posta adresine talebinizi iletiniz:
      </p>
      <p className="mt-2">
        📧 <code>mail@emirhankarahan.com</code>
      </p>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">Çocuklar</h2>
      <p className="mt-4">
        Hizmet Sağlayıcı, 13 yaş altındaki çocuklardan bilerek veri toplamaz
        veya onlara pazarlama yapmaz. Uygulama, 13 yaş altındaki bireylere
        yönelik değildir.
      </p>
      <p className="mt-4">
        13 yaşından küçük bir çocuğun kişisel bilgilerini Hizmet Sağlayıcı’ya
        sağladığını fark ederseniz, lütfen iletişime geçiniz. Böyle bir durumun
        tespiti halinde, söz konusu veriler derhal sunuculardan silinecektir.
      </p>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">Güvenlik</h2>
      <p className="mt-4">
        Hizmet Sağlayıcı, bilgilerinizin gizliliğini korumaya önem verir. Bu
        nedenle, bilgilerin korunmasını sağlamak amacıyla fiziksel, elektronik
        ve prosedürel güvenlik önlemleri uygular.
      </p>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">Değişiklikler</h2>
      <p className="mt-4">
        Bu gizlilik politikası zaman zaman çeşitli sebeplerle güncellenebilir.
        Değişiklikler bu sayfa üzerinden yayımlanacaktır. Lütfen bu sayfayı
        düzenli olarak kontrol ediniz. Uygulamayı kullanmaya devam etmeniz, tüm
        değişiklikleri kabul ettiğiniz anlamına gelir.
      </p>
      <p className="mt-2">
        📅 Bu gizlilik politikası 2 Ağustos 2025 tarihi itibarıyla geçerlidir.
      </p>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">Onayınız</h2>
      <p className="mt-4">
        Uygulamayı kullanarak, bilgilerinizin bu Gizlilik Politikası’nda
        açıklandığı şekilde işlenmesine onay vermiş olursunuz.
      </p>

      <hr className="my-8 opacity-30" />

      <h2 className="text-2xl font-semibold">İletişim</h2>
      <p className="mt-4">
        Uygulamanın gizliliğiyle ilgili herhangi bir sorunuz varsa ya da
        uygulamanın veri işleme uygulamaları hakkında bilgi almak isterseniz,
        lütfen Hizmet Sağlayıcı ile iletişime geçiniz:
      </p>
      <p className="mt-2">
        📧 <code>mail@emirhankarahan.com</code>
      </p>
    </main>
  );
}
