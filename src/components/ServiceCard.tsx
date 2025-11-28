import { Service } from '@/types/service';
import { MapPin, Phone, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="glass-panel" style={{
            padding: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
        }}>
            <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                <Image
                    src={service.imageUrl || 'https://images.unsplash.com/photo-1581094794329-cd811969d3c6?auto=format&fit=crop&q=80&w=1000'}
                    alt={service.name}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: '#fbbf24'
                }}>
                    <Star size={16} fill="currentColor" />
                    <span style={{ fontWeight: 'bold' }}>{service.rating}</span>
                    <span style={{ color: 'white', fontSize: '0.8rem' }}>({service.reviewCount})</span>
                </div>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {service.name}
                    </h3>
                    {service.isActive && (
                        <div title="Onaylı Servis" style={{ color: 'var(--success)' }}>
                            <CheckCircle size={20} />
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <MapPin size={16} />
                    <span style={{ fontSize: '0.9rem' }}>{service.district}, İstanbul</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {service.tags?.map((tag, index) => (
                        <span key={index} style={{
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: 'var(--primary)',
                            border: '1px solid rgba(59, 130, 246, 0.2)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                    <button className="btn btn-primary" style={{ flex: 1, fontSize: '0.9rem', padding: '0.5rem' }}>
                        Randevu Al
                    </button>
                    <a href={`tel:${service.phone}`} className="btn" style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        padding: '0.5rem 1rem'
                    }}>
                        <Phone size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}
