import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="glass-panel" style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1200px',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem'
        }}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <span className="text-gradient">İstanbul</span>
                <span style={{ color: 'var(--text-primary)' }}>Kombi</span>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
                <Link href="/" style={{ fontWeight: 500 }}>Ana Sayfa</Link>
                <Link href="/services" style={{ fontWeight: 500 }}>Servisler</Link>
                <Link href="/#map" style={{ fontWeight: 500 }}>Harita</Link>
                <Link href="/#contact" style={{ fontWeight: 500 }}>İletişim</Link>
            </div>

            <Link href="/services" className="btn btn-primary">
                Servis Bul
            </Link>
        </nav>
    );
}
