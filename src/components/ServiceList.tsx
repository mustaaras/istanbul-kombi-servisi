"use client";

import { useState } from 'react';
import { Service } from '@/types/service';
import ServiceCard from './ServiceCard';
import { Search, MapPin } from 'lucide-react';

interface ServiceListProps {
    initialServices: Service[];
}

export default function ServiceList({ initialServices }: ServiceListProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    // Get unique districts for filter
    const districts = Array.from(new Set(initialServices.map(s => s.district))).sort();

    const filteredServices = initialServices.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesDistrict = selectedDistrict ? service.district === selectedDistrict : true;

        return matchesSearch && matchesDistrict;
    });

    return (
        <div>
            {/* Filters */}
            <div className="glass-panel" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>

                    {/* Search Input */}
                    <div style={{ position: 'relative' }}>
                        <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={20} />
                        <input
                            type="text"
                            placeholder="Servis adı veya marka ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                background: 'rgba(0,0,0,0.2)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: 'var(--radius-md)',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {/* District Select */}
                    <div style={{ position: 'relative' }}>
                        <MapPin style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={20} />
                        <select
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                background: 'rgba(0,0,0,0.2)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: 'var(--radius-md)',
                                color: 'white',
                                outline: 'none',
                                appearance: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="" style={{ background: 'var(--bg-secondary)' }}>Tüm İlçeler</option>
                            {districts.map(district => (
                                <option key={district} value={district} style={{ background: 'var(--bg-secondary)' }}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {filteredServices.map(service => (
                    <ServiceCard key={service.$id} service={service} />
                ))}
            </div>

            {filteredServices.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
                    <p style={{ fontSize: '1.25rem' }}>Aradığınız kriterlere uygun servis bulunamadı.</p>
                </div>
            )}
        </div>
    );
}
