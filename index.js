/* BU DERSDEKİ TÜM DEĞERLERİN DÖNMESİNİ (RETURN) UNUTMAYIN, AKSİ TAKDİRDE TEST KONTROLÜ ÇALIŞMAZ */

/* İşte veriniz bu */
const orijinalTatlar = [
  "Muz",
  "Vişne",
  "Ceviz",
  "Kestane",
  "Kiraz",
  "Çikolata",
  "Fındık Çikolata",
  "Fıstık Çikolata",
  "Badem Çikolata",
  "Franbuaz",
  "Yaban Mersini",
  "Tarçın",
  "Badem",
  "Kahve",
  "Fındık",
  "Anten Fıstık",
  "Limon",
  "Misket Limon",
  "Akçaağaç Şurubu",
  "Şeftali",
  "Nane",
  "Ananas",
  "Ahududu",
  "Çilek",
  "Vanilya",
];

/* Görev 1: Diziyi kopyalama!
Orijinal tatların bulunduğu toplam 25 aromanın olduğu bir dizimiz var (yukarıya bakın). Bu görevde, bu dizi'ye veri yazma ve bu diziden veri okuma işlemleri yapacağız.
Tüm bu değişiklikleri yaparken, gerçek, orijinal 25 lezzetin listesini kaybetmek istemiyoruz. Bu yüzden orijinal diziyi kopyalamamız gerekmektedir!

/*
Aşağıdakileri yapmak için aşağıdaki kopyalama işlevini kullanın:
   1. parametre olarak bir dizi alın - işlev çağrıldığında orijinalTatlar'i argüman olarak ileteceksiniz.
   2. Alınan dizinin bir kopyasını döndür
*/

console.clear();
function kopyala(kopyanacakDizi) {
  return [...kopyanacakDizi];
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 1: Diziyi kopyalama!");
console.log(kopyala(orijinalTatlar));
console.log(orijinalTatlar.length);

//şöyle de olur:
//let c=  [...kopyanacakDizi];
//return c;

//şunu yapamıyoruz:
//return kopyalanacakdizi=orijinaltatlar
//iki farklı değişken aynı yeri gösteriyot böyle
//bizim gerçek bir kopyalama yapmamız gerek
//bunun için birkaç yol var bir tanesi: [...dizinin adı]

/* Görev 2:
Bir dizinin tam olarak 25 çeşit olduğunu onaylayın. İşleviniz şunları kabul etmelidir:
   1. parametre olarak bir dizi
   2. Verilen dizinin 25 çeşit olup olmadığını kontrol edin
   3. İşleviniz, dizinin uzunluğu 25 ise DOĞRU(true) ve dizinin uzunluğu 25 DEĞİLSE YANLIŞ(false) bir boolean döndürmelidir.


Örneğin: dizi25Cesit(orijinalTatlar) kodunuz düzgün çalışıyorsa true değerini döndürür.
*/

function dizi25Cesitmi(array) {
  if (array.length == 25) {
    return true;
  } else {
    return false;
  }
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 2: dizi25Cesit");
console.log(dizi25Cesitmi(orijinalTatlar));

//2 eşittile 3 eşittir arasındaki fark 3 eşittirde tipinin de aynı olması bekleniyor

/* Görev 3:
Pastane sahibi size yeni bir lezzet fikriyle geldi: Kakule! Bunun da çok tutacağından çok emin. Bu lezzeti eklemek için diziyi değiştirmeniz gerekir.

Aşağıdakileri yapmak için cesitEkle işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alan bir dizi alın
   2. İkinci parametrede yeni tadı 'string' argümanı olarak alın
   3. İşlev, argüman olarak verilen yeni tadı, verilen dizinin başına ekler.
   4. İşlev, yeni oluşan diziyi döndürmelidir

  Örneğin: cesitEkle(orijinalTatlar, "Kakule") işlevi doğru çalıştığında ["Kakule", "Muz",..."Vanilya"] şeklinde dönmelidir
*/

function cesitEkle(cesitEklenecekDizi, eklenecekTat) {
  cesitEklenecekDizi.unshift(eklenecekTat);
  return cesitEklenecekDizi;
  //eğer return kısmına cesitEklenecekDizi.unshift (eklenecekTat) yazarsam 26 değerini döndürüyor fonksiyon
  //push diyince sona unshift diyince başa ekliyor
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 3: cesitEkle");
console.log(cesitEkle(orijinalTatlar, "Kakule"));
console.log("üçüncü görev bitti artık " + orijinalTatlar.length + " çeşit var");
//artık orijinal hali buna dönüştü

/* Cörev 4:

Hoooppppalaa! orijinalTatlar dizisinde artık 26 aroma var! Göreviniz, dizinin sonundan bir öğeyi kaldırmaktır.

Aşağıdakileri yapmak için sonCesitiKaldir işlevini kullanın:
   1. Bir dizi alın
   2. Alınan diziden son öğeyi kaldırın
   3. Ortaya çıkan diziyi döndürün

   Örneğin: sonCesitiKaldir(orijinalTatlar) çalıştırıldığında ["Kakule", "Muz",..."Çilek"] döndürülür.
*/

function sonCesitiKaldir(cesitKaldirilacakDizi) {
  cesitKaldirilacakDizi.pop();
  return cesitKaldirilacakDizi;

  // pop metodu sondaki elemanı kaldırır.
  //  return cesitKaldirilacakDizi.pop(); diyince vanilyayı basıyor çünkü pop metodu çıkarılmış elemanı döndürür
  //biz diziyi bassın istiyoruz
  //metodun return ettiği değer bizim için önemli bu yüzden
}

console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 4: sonCesidiKaldir");
sonCesitiKaldir(orijinalTatlar);
console.log(orijinalTatlar);
console.log(
  "dördüncü görev bitti tekrar " + orijinalTatlar.length + " çeşit var"
);

//console.log(orijinalTatlar);
//console.log(sonCesitiKaldir(orijinalTatlar));
//console.log("deneme");
//console.log(orijinalTatlar);

//Pop() dizinin son öğesini kaldırır. ve orijinal arrayi değiştirir
// length değerini bir azaltarak da sondaki ögeyi silebilirsin
//shift() dizinin ilk öğesini kaldırır
//Splice(x, y)  İlk argüman, öğeleri eklemeye veya kaldırmaya başlayacağınız yeri belirler. İkinci argüman kaldırılacak öğe sayısını belirtir.
//Üçüncü ve sonraki argümanlar isteğe bağlıdır; diziye eklenecek öğeleri belirtirler.

/* Görev 5:
Dizideki belirli bir indeksteki çeşniyi döndüren bir işlev yazın.

Aşağıdakileri yapmak için aşağıdaki indekstekiCesitiGetir işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alacak bir dizi alın
   2. İkinci parametrede argüman olarak istenen dizini alacak bir sayı alın
   3. Verilen indekste bulunan çeşiti döndürün

   Örneğin: indekstekiCesitiGetir(orijinalTatlar, 2) çalıştırılmasıyla, Kakule'in başarıyla eklendiği varsayarsak sonuç "Ceviz" olucaktır.
*/

function indekstekiCesitiGetir(dizi, istenenEleman) {
  return dizi[istenenEleman];
}

console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 5: indekstekiCesitiGetir");
console.log(indekstekiCesitiGetir(orijinalTatlar, 2));
console.log(
  "beşinci görev bitti " +
    indekstekiCesitiGetir(orijinalTatlar, 2) +
    " çeşidini yazdırdık"
);
//yine 1. eleman 0 ile gösterilir unutma

/* Görev 6:

Firma, ürün yelpazesine daha fazla lezzet eklemek istediğinden, sadece ilk veya son aromayı keyfi olarak çıkarmak yerine, aroma adına göre aromaları kaldırmaları gerektiğini fark ederler. Göreviniz, verilen bir dizinde, ada göre bu tadı diziden çıkarmak.

Aşağıdakileri yapmak için ismeGoreCesitCikar işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alın
   2. İkinci parametrede, lezzet adını argüman olarak alın
   3. Alınan diziden alınan aromayı kaldırın
   4. Artık bir tane daha az lezzet içeren sonuçtaki diziyi döndürün

  Örneğin:  ismeGoreCesitCikar(orijinalTatlar, "Tarçın") çalıştırılmasıyla,  "Tarçın" aroması kaldırılacağından uzunluğu 24 olan bir dizi döndürülür.

  İPUCU: Bunun için .splice() kullanabilirsiniz.
*/
//Splice(x, y)  İlk argüman, öğeleri eklemeye veya kaldırmaya başlayacağınız yeri belirler. İkinci argüman kaldırılacak öğe sayısını belirtir.

//x konumunu gösterir, yine 1. eleman 0. konumda
//y kaç eleman çıkarmak istediğini gösterir.
//eğer x konumuna yeni elemanlar eklemek istiyorsan "elma", "armut" diyip ekleyebilirsin.

function ismeGoreCesitCikar(dizi, tat) {
  let indeks = dizi.indexOf(tat);
  // tat kısmına biz string bir değer giriyoruz bunu sayıya dönüştürdük indeksof la
  dizi.splice(indeks, 1);
  return dizi;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 6: ismeGoreCesitCikar");
console.log(ismeGoreCesitCikar(orijinalTatlar, "Tarçın"));

/* Görev 7:

14 Şubat Sevgililer Günü'nde Firma, tüm çikolata lezzetlerini öne çıkaran bir promosyon malzemeleri oluşturmak istiyor.
Göreviniz, dizideki her bir öğeyi kontrol eden ve yalnızca verilen isimin geçtiği lezzetleri bulup orataya çıkan yeni diziyi döndüren, ismeGoreFiltrele adlı bir işlev yazmaktır.
Bu, farklı tatil ve kutlamalarda "Fındık", "Fıstık", "Çikolata" vb. lezzetler için filtreleme yapabilmenizi sağlar.

Aşağıdakileri yapmak için ismeGoreFiltrele işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alacak bir dizi alın
   2. İkinci parametrede filtre değerini argüman olarak alın (örnek: "Çikolata")
   3. Dizideki tatlardan herhangi birinin filtre değerini içerip içermediğini kontrol edin.
   4. Varsa, onları yeni bir diziye ekleyin
   5. Filtrelenmiş tatları içeren yeni diziyi döndürün

  Örneğin: ismeGoreFiltrele(orijinalTatlar, "Çikolata") çalıştırıldığında ["Çikolata", "Fındık Çikolata", "Fıstık Çikolata", "Badem Çikolata"]

  İPUCU - bunu çözmenize yardımcı olması için .includes yöntemini kullanabilirsiniz.

  Bu sorunu çözmek için GELİŞMİŞ DİZİ YÖNTEMLERİNİ (yani .filter) KULLANMAYIN.
*/

//console.log(orijinalTatlar.includes("Çikolata"));  ---> false döner string değerlerde tam eşleşme arıyor
//console.log(orijinalTatlar.includes("Çikolata", 6));  ---> aynı şekilde false döner. yukarıda tüm dizide arıyor, yanına sayı ekleyerek spesifik bir noktada arayabilirsin
//console.log(orijinalTatlar[6].includes("Çikolata")); --->true döner

function ismeGoreFiltrele(dizi, tat) {
  let yenidizi = [];
  //diziyi for döngüsünün içine koyarsan her çalıştığında dizi sıfırlanır. ki zaten return bulamayacağı için hata verecek
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i].includes(tat) == true) {
      //true yerine 1 desen de çalışıyor. ama ===1 dersen çalışmıyor.
      //hiçbir şey demezsen de çalışıyor çünkü zaten doğruysa ifin içine giriyor
      yenidizi.push(dizi[i]);

      // yenidizi.push(dizi(i)); bu hata veriyor
    }
  }
  return yenidizi;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 7: ismeGoreFiltrele");

console.log(ismeGoreFiltrele(orijinalTatlar, "Çikolata"));

/* ALIŞTIRMA */

/* ALIŞTIRMA 1: Bir dizideki ortalama kelime sayısını döndüren bir fonksiyon yazın. Bu işlevi orijinalTatlar dizisinde test etmelisiniz, ancak bunu herhangi bir dizi için de kullanabilmelisiniz.

Aşağıdakileri yapmak için ortalamaKelimeSayisi işlevini kullanın:
   1. orijinalTatlar dizisini alın
   2. Dizideki öğe başına kaç kelime sayın
   3. Dizideki öğe başına ortalama kelime sayısını döndürün

   Örneğin: ortalamaKelimeSayisi(orijinalTatlar) 0 ile 2 arasında bir sayı döndürmelidir.
*/

function ortalamaKelimeSayisi(dizi) {
  let toplamKelime = 0;
  for (let i = 0; i < dizi.length; i++) {
    toplamKelime++;
    if (dizi[i].includes(" ")) toplamKelime++;
  }

  return toplamKelime / dizi.length;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Alıştırma 1: ortalamaKelimeSayisi");
console.log(ortalamaKelimeSayisi(orijinalTatlar));

function dahaDogrusu(dizi) {
  // let kelimeler = dizi.split(" "); bu şekilde yazamıyoruz çünkü diziyi split edemezsin

  let toplamKelime = 0;
  for (let i = 0; i < dizi.length; i++) {
    let kelimeler = dizi[i].split(" ");
    toplamKelime += kelimeler.length;
  }
  return toplamKelime / dizi.length;
}

console.log(dahaDogrusu(orijinalTatlar));

/* ALIŞTIRMA 2:
Firma mevcut tatların yanında artık mevsimlik lezzetler ve hatta bölgesel lezzetler de sunmaktadır. Toplam 25 lezzet aromasını
orijinalTatlar, yeniTatlar, mevsimlikTatlar ve bolgeselTatlar'dan rastgele seçecek ve bunu rastgeleTatlar adlı bir dizide saklayan bir fonksiyon yazın.

Aşağıdakileri yapmak için rastgeleTatlar işlevini ve yeni dizileri kullanın:
   1. Tüm farklı tatlara sahip dört diziyi alın (orijinalTatlar yukarıda, diğerleri aşağıda)
   2. Dört diziden rastgele tatlar seçin
   3. Uzunluğu 25 olan rastgeleTatlar adlı yeni bir dizi döndürün

  Örneğin: rastgeleTatlar(orijinalTatlar, yeniTatlar, mevsimlikTatlar, bolgeselTatlar) çalıştırıldığında ["Kestane", "Ballı Badem,"..."Hindistan Cevizi", "Kuru üzüm"].
*/

function rastgeleTatlar(arr1, arr2, arr3, arr4) {
  const yeniArr = [...arr1, ...arr2, ...arr3, ...arr4];
  let bosArr = [];
  for (let i = 0; i <= 25; i++) {
    let sayi = Math.floor(Math.random() * yeniArr.length);
    bosArr.push[sayi];
    yeniArr.splice(sayi, 1);
    console.log(sayi, yeniArr[sayi]);
  }

  return yeniArr;
}

const yeniTatlar = [
  "Badem",
  "Ballı Badem",
  "Fıstık Ezmesi",
  "Profiterol",
  "Madlen Çikolata",
];

const mevsimlikTatlar = [
  "Pekan",
  "Kaju",
  "Çikolatalı Mousse",
  "Fransız Vanilyası",
  "Yumurta",
  "Alman çikolatası",
  "Kek üzerine krema",
  "Hindistan Cevizi",
  "Kaymaklı Biskuvi",
  "Beyaz Çikolata",
  "Mango",
];

const bolgeselTatlar = [
  "Kaymak",
  "Karpuz",
  "Karadut",
  "Turunç",
  "Portakal",
  "Yogurt",
  "Krem Peynir",
  "Kakao",
  "Karamel macchiato",
  "Kuru üzüm",
  "Peynir",
  "Karamel",
];
console.log(
  "-------------------------------------------------------------------"
);
console.log("Alıştırma 2: rastgeleTatlar");
console.log(
  rastgeleTatlar(orijinalTatlar, yeniTatlar, mevsimlikTatlar, bolgeselTatlar)
);

/* Lütfen bu satırın altındaki hiçbir şeyi değiştirmeyin */
function sa() {
  console.log("Calışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  dizi25Cesitmi,
  cesitEkle,
  sonCesitiKaldir,
  indekstekiCesitiGetir,
  ismeGoreCesitCikar,
  kopyala,
  ismeGoreFiltrele,
  ortalamaKelimeSayisi,
  rastgeleTatlar,
};
