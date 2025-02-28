# Döviz Çevirici Uygulaması

Bu proje, React kullanılarak geliştirilmiş basit bir döviz çevirici uygulamasıdır. Kullanıcılar, istedikleri miktarı girerek farklı para birimleri arasında kolayca dönüşüm yapabilirler.

## Özellikler

* **Canlı Döviz Kurları:** FreeCurrencyAPI kullanılarak güncel döviz kurları alınır.
* **Para Birimi Seçimi:** Kullanıcılar, açılır menüler aracılığıyla dönüştürmek istedikleri para birimlerini seçebilirler.
* **Anında Dönüşüm:** Girilen miktar ve seçilen para birimlerine göre anında dönüşüm sonucu görüntülenir.
* **Kullanıcı Dostu Arayüz:** Basit ve anlaşılır bir kullanıcı arayüzü sunar.

## Teknolojiler

* **React.js:** Kullanıcı arayüzünü oluşturmak için kullanılmıştır.
* **Axios:** API isteklerini göndermek için kullanılmıştır.
* **FreeCurrencyAPI:** Canlı döviz kuru verilerini sağlamak için kullanılmıştır.
* **npm:** Paket yönetimi için kullanılmıştır.
* **React Icons:** Ok işareti için kullanılmıştır.
* **CSS ** Stillendirme için kullanılmıştır

## Kurulum

Projeyi yerel ortamınıza kurmak için aşağıdaki adımları izleyin:

1.  **Depoyu klonlayın:**

    ```bash
    git clone <depo_url>
    ```

2.  **Proje dizinine gidin:**

    ```bash
    cd <proje_dizini>
    ```

3.  **Bağımlılıkları yükleyin:**

    ```bash
    npm install
    ```

4.  **.env dosyasını oluşturun ve API anahtarınızı ekleyin:**

    ```
    VITE_API_KEY=fca_live_MM5jPiX71FUi1fmFaxYbG0X0XoxzE7TEjpvzBv9K
    ```

5.  **Uygulamayı başlatın:**

    ```bash
    npm run dev
    ```

6.  Tarayıcınızda `http://localhost:5173` adresine giderek uygulamayı görüntüleyebilirsiniz.

## API Kullanımı

Bu proje, FreeCurrencyAPI'yi kullanarak döviz kuru bilgilerini alır. API anahtarınızı `.env` dosyasına ekleyerek kullanabilirsiniz.

```javascript
const baseUrl = `https://api.freecurrencyapi.com/v1/latest`;
const apiKey = import.meta.env.VITE_API_KEY;
Kullanım
Dönüştürmek istediğiniz miktarı girin.
"From" ve "To" açılır menülerinden para birimlerini seçin.
"Change" butonuna tıklayarak sonucu görüntüleyin.
Kod Yapısı
Currency.js: Ana bileşen, döviz çevirme işlemlerini yönetir.
axios: API istekleri için kullanılır.
react-icons: Ok ikonu için kullanılmıştır.
Katkıda Bulunma
Projeye katkıda bulunmak isterseniz, aşağıdaki adımları izleyebilirsiniz:

Projeyi fork edin.
Yeni bir branch oluşturun (git checkout -b feature/yenilik).
Değişikliklerinizi yapın ve commit edin (git commit -am 'Yeni özellik eklendi').
Branch'inizi push edin (git push origin feature/yenilik).
Pull request gönderin.
Lisans
Bu proje MIT lisansı altında lisanslanmıştır.

Ek Notlar
API anahtarınızı güvenli bir şekilde saklamaya özen gösterin.
Uygulamanın arayüzü ve işlevselliği geliştirilebilir.
Farklı para birimleri ve ek özellikler eklenerek uygulama zenginleştirilebilir.
