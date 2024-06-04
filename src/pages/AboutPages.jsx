import aboutimage1 from '../assets/img/aboutimage1.png'
import aboutimage2 from '../assets/img/aboutimage2.png'
import aboutimage3 from '../assets/img/aboutimage3.png'
import aboutimage4 from '../assets/img/aboutimage4.png'

const AboutPages = () => {
  return (
    <div class="lg:max-w-7xl xl:mx-auto lg:px-10 xl:px-0 lg:pt-24">
      <section class="pt-32">
        <div class="container">
          <div class="w-full md:grid md:grid-cols-2 md:items-center md:gap-10 xl:justify-between">
            <div class="">
              <h1 class="text-xl mb-7 font-bold lg:text-[28px] leading-tight">
                TEMPAT SABLON CUSTOM SATUAN TERBESAR DI INDONESIA.
              </h1>
              <p class="text-sm pb-8 md:text-justify">
                affah collections merupakan the leading brands dalam industri
                kaos polos dan custom sablon satuan dengan kualitas serta
                kuantitas terbesar di Indonesia.
                <br />
                <br />
                Keresahan para pelanggan yang ingin custom sablon satuan dengan
                harga bersahabat, menjadi tantangan bagi kami untuk
                mewujudkannya. Kami berkerja, menyusun strategi merancang,
                mengembangkan, meluncurkan hingga menumbuhkan Cititex untuk
                menjadi jawaban dan solusi bagi keresahan tersebut. Cititex
                terus berusaha memberikan yang terbaik dengan beragam talenta
                unik dalam pengembangannya.
              </p>
            </div>
            <div class="">
              <img
                src={aboutimage1}
                alt=""
                class="lg:scale-95 xl:scale-90"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="pt-32">
        <div class="container">
          <div class="w-full md:grid md:grid-cols-2 md:items-center md:gap-10">
            <div class="order-2">
              <h1 class="uppercase font-bold text-xl mb-7 lg:text-[28px] leading-tight">
                12 Cabang tersebar di reluruh indonesia
              </h1>
              <p class="text-sm pb-8 md:text-justify">
                Kami memiliki lebih dari 12 cabang yang sudah tersebar di
                seluruh Indonesia. Perluasan toko ini ditujukan untuk menambah
                kenyamanan customer untuk tetap dapat berbelanja langsung ke
                toko kami.
              </p>
            </div>
            <div class="order-1">
              <img
                src={aboutimage2}
                alt=""
                class="lg:scale-95 xl:scale-90"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="pt-32">
        <div class="container">
          <div class="w-full md:grid md:grid-cols-2 md:items-center md:gap-10">
            <div class="">
              <h1 class="font-bold text-xl mb-7 lg:text-[28px] leading-tight">
                READY STOCK JUTAAN PIECES.
              </h1>
              <p class="text-sm pb-8 md:text-justify">
                Ketersediaan stock dalam jumlah besar di waktu yang singkat
                sering menjadi kendala dalam market kaos polos di Indonesia,
                Cititex hadir sebagai solusinya dengan ready stock kaos polos
                lebih dari 6 Juta Pcs siap memenuhi kebutuhan anda setiap saat.
              </p>
            </div>
            <div class="">
              <img
                src={aboutimage3}
                alt=""
                class="lg:scale-95 xl:scale-90"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="pt-32">
        <div class="container">
          <div class="w-full md:grid md:grid-cols-2 md:items-center md:gap-10">
            <div class="order-2">
              <h1 class="font-bold text-xl mb-7 lg:text-[28px] leading-tight">
                JAMINAN HARGA DAN KUALITAS.
              </h1>
              <p class="text-sm pb-8 md:text-justify">
                Jaminan harga dan kualitas adalah prioritas utama kami. Kami
                menawarkan berbagai pilihan produk untuk kaos polos dan sablon
                berstandard tinggi dengan harga yang lebih kompetitif.
              </p>
            </div>
            <div class="order-1">
              <img
                src={aboutimage4}
                alt=""
                class="lg:scale-95 xl:scale-90"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPages;
