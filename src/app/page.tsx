import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import { MapPin, Wrench, Star, Phone, Search, ShieldCheck, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/hero.png"
            alt="Kombi Servisi Background"
            fill
            style={{ objectFit: "cover", opacity: 0.4 }}
            priority
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 1))'
          }} />
        </div>

        <div className={`${styles.heroContent} animate-fade-in`}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            marginBottom: '1.5rem',
            color: 'var(--primary)'
          }}>
            <Star size={16} fill="currentColor" />
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>İstanbul'un En İyi Servis Rehberi</span>
          </div>

          <h1 className={styles.title}>
            Kombiniz <span className="text-gradient">Emin Ellerde</span>
          </h1>

          <p className={styles.subtitle}>
            İstanbul genelinde size en yakın, onaylı ve yüksek puanlı kombi servislerini anında bulun.
            Güvenilir tamir, bakım ve montaj hizmetleri tek tıkla elinizin altında.
          </p>

          <div className="glass-panel" style={{
            display: 'flex',
            gap: '1rem',
            padding: '0.5rem',
            maxWidth: '500px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0 1rem',
              minWidth: '200px'
            }}>
              <MapPin className="text-secondary" size={20} />
              <input
                type="text"
                placeholder="İlçe veya Mahalle Girin..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  width: '100%',
                  outline: 'none',
                  fontSize: '1rem'
                }}
              />
            </div>
            <button className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
              <Search size={20} style={{ marginRight: '0.5rem' }} />
              Bul
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className={styles.features}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Neden <span className="text-gradient-accent">Biz?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
              Sizin için en iyi hizmeti sunan servisleri özenle seçiyoruz.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <ShieldCheck size={40} />
              </div>
              <h3 className={styles.cardTitle}>Onaylı Servisler</h3>
              <p className={styles.cardText}>
                Listelenen tüm servisler kalite standartlarımıza göre kontrol edilmiş ve onaylanmıştır.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Clock size={40} />
              </div>
              <h3 className={styles.cardTitle}>7/24 Acil Destek</h3>
              <p className={styles.cardText}>
                Günün her saati acil kombi arızalarınız için nöbetçi servisleri bulabilirsiniz.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Wrench size={40} />
              </div>
              <h3 className={styles.cardTitle}>Uzman Kadro</h3>
              <p className={styles.cardText}>
                Marka ve model fark etmeksizin alanında uzman teknisyenlerle çalışın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className={styles.mapSection}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Servis <span className="text-gradient">Haritası</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Konumunuza en yakın servisleri harita üzerinde görüntüleyin ve yol tarifi alın.
          </p>

          <div className={styles.mapPlaceholder}>
            <div style={{ textAlign: 'center', zIndex: 1 }}>
              <MapPin size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Google Maps Entegrasyonu</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Servis noktaları burada görüntülenecek.</p>
            </div>
            {/* Abstract map background pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.1,
              backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 0', textAlign: 'center', background: 'linear-gradient(to top, var(--bg-primary), var(--bg-secondary))' }}>
        <div className="container">
          <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Hemen Servis Çağırın
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2rem' }}>
              Beklemeyin, soğukta kalmayın. Size en yakın servisi hemen bulun.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary">
                <Search size={20} style={{ marginRight: '0.5rem' }} />
                Servis Ara
              </button>
              <button className="btn btn-accent">
                <Phone size={20} style={{ marginRight: '0.5rem' }} />
                Bizi Arayın
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer style={{ padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>&copy; 2024 İstanbul Kombi Servisi. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}
