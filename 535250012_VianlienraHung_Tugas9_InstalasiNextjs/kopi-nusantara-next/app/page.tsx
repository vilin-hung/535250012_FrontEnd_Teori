import Image from "next/image";
import styles from "./page.module.css";
import KopiNusantara from "./KopiNusantara";

export default function Home() {
  return (
    <KopiNusantara>
    <header className="header">
        <div className="header-container">
            <a href="#beranda" className="logo">Kopi <span>Nusantara</span></a>

            {/* mobile navigation (tidak bergantung pada checkbox) */}
            <button type="button"
                className="menu-icon-btn"
                id="menu-btn"
                aria-label="Toggle Navigation">
                <i className='bx bx-menu' id="menu-icon"></i>
            </button>

            <nav className="nav-bar">
                <a href="#beranda" className="nav-link active">Beranda</a>
                <a href="#tentang" className="nav-link">Tentang</a>
                <a href="#menu" className="nav-link">Menu</a>
                <a href="#faq" className="nav-link">FAQ</a>
                <a href="#kontak" className="nav-link">Kontak</a>
            </nav>
        </div>
    </header>

    <section className="beranda" id="beranda">
        <div className="beranda-overlay">
            <div className="home-content">
                <span className="label">Kedai Kopi Rumahan | 535250012 Vianlienra Hung</span>
                <h1>Kopi <span>Nusantara</span></h1>
                <h3>Racikan Rumah, Cita Rasa Nusantara</h3>
                <p>Nikmati kehangatan racikan kopi rumahan khas tanah air langsung di tempat kami atau dari kenyamanan rumah Anda.</p>
                <a href="#menu" className="btn">Lihat Menu</a>
            </div>
        </div>
    </section>

    <main>
        {/* Section Tentang */}
        <section id="tentang" className="tentang">
            <div className="section-container">
                <div className="tentang-wrapper">
                    <span className="tentang-label">Tentang Kopi Nusantara</span>
                    <div className="tentang-gambar">
                        <img src="/images/logo.jpg" alt="Kopi Nusantara Logo" className="responsive-img"/>
                    </div>

                    <div className="tentang-content">
                        <p className="tentang-deskripsi">
                            Kopi Nusantara adalah usaha kedai kopi rumahan yang berdiri sejak tahun 2024. 
                            Kami menyajikan biji kopi pilihan terbaik dari berbagai daerah di Indonesia dan dunia dengan 
                            proses penyeduhan penuh dedikasi untuk menghadirkan rasa otentik di setiap cangkirnya.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="rekomendasi" className="rekomendasi">
            <div className="section-container">
                <h2 className="section-title">Rekomendasi Favorit</h2>
                <div className="rekomendasi-grid">
                    <article className="rekomendasi-produk">
                        <div className="img-wrapper">
                            <img src="/images/menu/tubruk.jpg" alt="Kopi Tubruk" className="responsive-img"/>
                        </div>
                        <div className="card-info">
                            <h4>Kopi Tubruk</h4>
                            <div className="detail-content">
                                <p className="rating"><i className='bx bxs-star'></i> 5.0</p>
                                <a href="#coffee" className="btn-detail">Lihat Detail</a>
                            </div>
                        </div>
                    </article>

                    <article className="rekomendasi-produk">
                        <div className="img-wrapper">
                            <img src="/images/menu/mango.jpg" alt="Mango Blast" className="responsive-img"/>
                        </div>
                        <div className="card-info">
                            <h4>Mango Blast</h4>
                            <div className="detail-content">
                                <p className="rating"><i className='bx bxs-star'></i> 5.0</p>
                                <a href="#smoothies" className="btn-detail">Lihat Detail</a>
                            </div>
                        </div>
                    </article>

                    <article className="rekomendasi-produk">
                        <div className="img-wrapper">
                            <img src="/images/menu/melati.jpg" alt="Teh Melati" className="responsive-img"/>
                        </div>
                        <div className="card-info">
                            <h4>Teh Melati</h4>
                            <div className="detail-content">
                                <p className="rating"><i className='bx bxs-star'></i> 5.0</p>
                                <a href="#tea" className="btn-detail">Lihat Detail</a>
                            </div>
                        </div>
                    </article>

                    <article className="rekomendasi-produk">
                        <div className="img-wrapper">
                            <img src="/images/menu/chocolate.jpeg" alt="Chocolate Signature" className="responsive-img"/>
                        </div>
                        <div className="card-info">
                            <h4>Chocolate Signature</h4>
                            <div className="detail-content">
                                <p className="rating"><i className='bx bxs-star'></i> 5.0</p>
                                <a href="#others" className="btn-detail">Lihat Detail</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        {/* Section Menu Utama */}
        <section id="menu" className="menu">
            <div className="section-container">
                <h2 className="section-title">Daftar Menu</h2>

                {/* Pencarian Menu */}
                <div className="search-wrapper">
                    <i className='bx bx-search'></i>
                    <input type="text" id="searchMenu" className="search-input" placeholder="Cari menu..."/>
                </div>

                {/* Navigasi Menu */}
                <nav className="kategori-nav">
                    <div className="kategori-container">
                        <a href="#coffee" className="kategori-btn active">Kopi</a>
                        <a href="#smoothies" className="kategori-btn">Smoothies</a>
                        <a href="#tea" className="kategori-btn">Teh</a>
                        <a href="#others" className="kategori-btn">Lainnya</a>
                    </div>
                </nav>

                <div id="coffee" className="kategori-menu">
                    <h3 className="judul-kategori">Kopi</h3>
                    <div className="menu-grid">
                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/tubruk.jpg" alt="Kopi Tubruk" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Kopi Tubruk</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Kopi hitam tradisional diseduh langsung dengan gula batu.</p>
                                    <span className="harga">Rp 15.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/gayo.jpeg" alt="Kopi Aceh Gayo" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Kopi Aceh Gayo</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Biji kopi arabika Gayo dengan aroma khas dan body tebal.</p>
                                    <span className="harga">Rp 23.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/toraja.jpeg" alt="Kopi Toraja" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Kopi Toraja</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Kopi single origin Sulawesi dengan rasa cokelat dan rempah.</p>
                                    <span className="harga">Rp 24.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/kintamani.png" alt="Kopi Kintamani" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Kopi Kintamani</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Kopi Bali dengan sentuhan rasa buah segar yang khas.</p>
                                    <span className="harga">Rp 27.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/luwak.jpg" alt="Kopi Luwak" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Kopi Luwak</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Kopi premium khas Indonesia dengan rasa lembut dan aroma unik.</p>
                                    <span className="harga">Rp 42.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/flores.jpg" alt="Kopi Flores Bajawa" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Kopi Flores Bajawa</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Kopi NTT dengan body tebal dan rasa cokelat manis alami.</p>
                                    <span className="harga">Rp 26.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/mandailing.jpg" alt="Kopi Mandailing" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Kopi Mandailing</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Kopi Sumatera dengan aroma rempah dan keasaman yang seimbang.</p>
                                    <span className="harga">Rp 24.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/robusta.png" alt="Kopi Robusta Lampung" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Kopi Robusta Lampung</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Kopi Lampung dengan karakter rasa bold, sedikit pahit, dan aroma khas</p>
                                    <span className="harga">Rp 23.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/espresso.jpg" alt="Espresso" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Espresso</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Ekstrak kopi murni dengan rasa yang kuat dan pekat.</p>
                                    <span className="harga">Rp 15.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/americano.jpg" alt="Americano" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Americano</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Espresso encer disajikan panas atau dengan es segar.</p>
                                    <span className="harga">Rp 18.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/latte.jpg" alt="Caffe Latte" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Caffe Latte</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Perpaduan espresso halus dan steamed milk yang lembut.</p>
                                    <span className="harga">Rp 22.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/cappuccino.jpg" alt="Cappuccino" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Cappuccino</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Espresso dengan lapisan foam susu yang tebal dan kaya.</p>
                                    <span className="harga">Rp 22.000</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div id="smoothies" className="kategori-menu">
                    <h3 className="judul-kategori">Smoothies</h3>
                    <div className="menu-grid">
                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/mango.jpg" alt="Mango Blast" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Mango Blast</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Olahan buah mangga segar disajikan dingin manis.</p>
                                    <span className="harga">Rp 25.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/strawberry.jpg" alt="Strawberry Delight" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Strawberry Delight</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Paduan segar buah stroberi segar dan yogurt pilihan.</p>
                                    <span className="harga">Rp 25.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/avocado.jpg" alt="Avocado Cream" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Avocado Cream</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Jus alpukat lembut dengan sentuhan kental manis.</p>
                                    <span className="harga">Rp 26.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/banana.jpeg" alt="Banana Berry" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Banana Berry</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Campuran buah pisang dan beri yang mengenyangkan.</p>
                                    <span className="harga">Rp 24.000</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div id="tea" className="kategori-menu">
                    <h3 className="judul-kategori">Teh</h3>
                    <div className="menu-grid">
                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/melati.jpg" alt="Teh Melati" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Teh Melati</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Teh hijau wangi melati khas tanah air, hangat dan menenangkan.</p>
                                    <span className="harga">Rp 15.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/serai.jpg" alt="Teh Serai" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Teh Serai</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Seduhan serai segar dengan aroma lemon yang menyegarkan.</p>
                                    <span className="harga">Rp 18.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/jahe.jpg" alt="Teh Jahe Merah" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Teh Jahe Merah</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Teh hangat dengan jahe merah, cocok untuk menghangatkan tubuh.</p>
                                    <span className="harga">Rp 20.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/roselia.jpg" alt="Teh Rosella" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Teh Rosella</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Seduhan bunga rosella dengan rasa asam segar dan warna merah alami.</p>
                                    <span className="harga">Rp 20.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/lemon-tea.jpg" alt="Lemon Tea" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Lemon Tea</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Teh hitam nikmat dengan perasan lemon segar.</p>
                                    <span className="harga">Rp 15.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/lychee.jpeg" alt="Lychee Tea" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Lychee Tea</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Teh melati manis dengan tambahan buah lici utuh.</p>
                                    <span className="harga">Rp 18.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/matcha.jpeg" alt="Matcha Green Tea" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Matcha Green Tea</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Seduhan racikan matcha khas dengan aroma autentik.</p>
                                    <span className="harga">Rp 20.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/earl.jpeg" alt="Earl Grey Milk Tea" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Earl Grey Milk Tea</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Teh Earl Grey aromatik dipadukan susu kental lembut.</p>
                                    <span className="harga">Rp 20.000</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div id="others" className="kategori-menu">
                    <h3 className="judul-kategori">Lainnya</h3>
                    <div className="menu-grid">
                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/chocolate.jpeg" alt="Chocolate Signature" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Chocolate Signature</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Cokelat pekat pilihan disajikan creamy dan manis.</p>
                                    <span className="harga">Rp 22.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/redvelvet.jpeg" alt="Red Velvet Latte" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Red Velvet Latte</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Rasa khas red velvet klasik dipadu steam milk gurih.</p>
                                    <span className="harga">Rp 22.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/croissant.jpeg" alt="Butter Croissant" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>Butter Croissant</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Pastri renyah butter cocok dipadu dengan kopi.</p>
                                    <span className="harga">Rp 18.000</span>
                                </div>
                            </div>
                        </article>

                        <article className="card-produk" tabIndex={0}>
                            <div className="img-wrapper">
                                <img src="/images/menu/kentang.jpg" alt="French Fries" className="responsive-img"/>
                            </div>
                            <div className="card-info">
                                <h4>French Fries</h4>
                                <div className="detail-expand">
                                    <p className="deskripsi">Kentang goreng renyah gurih disajikan dengan saus.</p>
                                    <span className="harga">Rp 15.000</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" className="faq">
            <div className="section-container">
                <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>

                <div className="faq-list">
                    <div className="faq-item">
                        <button type="button" className="faq-question">
                            <span>Apakah tersedia fasilitas WiFi dan stop kontak untuk bekerja (WFC)?</span>
                            <i className='bx bx-chevron-down faq-icon'></i>
                        </button>
                        <div className="faq-answer">
                            <p>Tentu saja. Kami menyediakan wifi gratis dan memastikan sebagian besar meja di area indoor dilengkapi dengan akses stop kontak untuk kenyamanan konsumen.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button type="button" className="faq-question">
                            <span>Apakah melayani pemesanan melalui aplikasi antar makanan?</span>
                            <i className='bx bx-chevron-down faq-icon'></i>
                        </button>
                        <div className="faq-answer">
                            <p>Ya. Menu makanan dan minuman kami sudah tersedia di plathtmlForm antar makanan yang bekerja sama dengan kami, seperti GoFood, GrabFood, dan Shopee Food.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button type="button" className="faq-question">
                            <span>Apakah ada area khusus untuk merokok (smoking area)?</span>
                            <i className='bx bx-chevron-down faq-icon'></i>
                        </button>
                        <div className="faq-answer">
                            <p>Tentu. Kami menyediakan area khusus untuk merokok di area outdoor lantai 2, serta area indoor ber-AC yang sepenuhnya bebas asap rokok di lantai 1.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button type="button" className="faq-question">
                            <span>Bisakah saya melakukan reservasi tempat untuk meeting atau acara kumpul-kumpul?</span>
                            <i className='bx bx-chevron-down faq-icon'></i>
                        </button>
                        <div className="faq-answer">
                            <p>Bisa. Kami menerima reservasi untuk meeting atau acara kumpul-kumpul, untuk reservasi bisa dilakukan melalui telepon atau WhatsApp ke 081122334455 minimal H-3 acara.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer id="kontak">
        <div className="isi-footer">
            <h3>Kopi Nusantara</h3>
            <p>
                <i className='bx bx-map'></i> Jl. Nagara No. 25, Jakarta | 
                <i className='bx bx-time-five'></i> Buka Setiap Hari: 08.00 - 22.00 WIB | 
                <i className="bx bx-phone"></i> 081122334455
            </p>
            <p className="copyright">&copy; 2026 Kopi Nusantara. All Rights Reserved. Dimodifikasi oleh 535250012 Vianlienra Hung</p>
        </div>
    </footer>

    <button className="back-to-top" id="backToTop" aria-label="Kembali ke atas">
        <i className='bx bx-up-arrow-alt'></i>
    </button>

    </KopiNusantara>
  );
}
