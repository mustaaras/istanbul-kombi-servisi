import Navbar from '@/components/Navbar';
import ServiceList from '@/components/ServiceList';
import { MOCK_SERVICES } from '@/data/mock-services';

export const dynamic = 'force-dynamic'; // Ensure fresh data on every request

export default async function ServicesPage() {
    const services = MOCK_SERVICES;

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingBottom: '4rem' }}>
            <Navbar />

            <div className="container" style={{ paddingTop: '8rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
                        Tüm <span className="text-gradient">Servisler</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                        İstanbul'un en güvenilir kombi servislerini inceleyin, puanlarını görün ve hemen randevu alın.
                    </p>
                </div>

                <ServiceList initialServices={services} />
            </div>
        </main>
    );
}
