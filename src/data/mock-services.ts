import { Service } from '@/types/service';

export const MOCK_SERVICES: Service[] = [
    {
        $id: '1',
        name: 'Güven Kombi Teknik',
        address: 'Merkez Mah. Atatürk Cad. No:12',
        district: 'Kadikoy',
        phone: '0216 555 00 01',
        rating: 4.8,
        reviewCount: 124,
        latitude: 40.9901,
        longitude: 29.0291,
        isActive: true,
        tags: ['Vaillant', 'Buderus', '7/24 Acil'],
        imageUrl: 'https://images.unsplash.com/photo-1581094794329-cd811969d3c6?auto=format&fit=crop&q=80&w=1000'
    },
    {
        $id: '2',
        name: 'Anadolu Yakası Servis',
        address: 'Bağdat Cad. No:45',
        district: 'Uskudar',
        phone: '0216 555 00 02',
        rating: 4.5,
        reviewCount: 89,
        latitude: 41.0260,
        longitude: 29.0160,
        isActive: true,
        tags: ['Demirdöküm', 'ECA', 'Bakım'],
        imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000'
    },
    {
        $id: '3',
        name: 'Avrupa Isı Sistemleri',
        address: 'Büyükdere Cad. No:100',
        district: 'Sisli',
        phone: '0212 555 00 03',
        rating: 4.9,
        reviewCount: 210,
        latitude: 41.0548,
        longitude: 28.9910,
        isActive: true,
        tags: ['Viessmann', 'Bosch', 'Montaj'],
        imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000'
    },
    {
        $id: '4',
        name: 'Beşiktaş Kombi Hastanesi',
        address: 'Çırağan Cad. No:25',
        district: 'Besiktas',
        phone: '0212 555 00 04',
        rating: 4.7,
        reviewCount: 156,
        latitude: 41.0422,
        longitude: 29.0060,
        isActive: true,
        tags: ['Baymak', 'Protherm', 'Petek Temizliği'],
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000'
    },
    {
        $id: '5',
        name: 'Fatih Merkez Servis',
        address: 'Fevzipaşa Cad. No:88',
        district: 'Fatih',
        phone: '0212 555 00 05',
        rating: 4.6,
        reviewCount: 95,
        latitude: 41.0182,
        longitude: 28.9497,
        isActive: true,
        tags: ['Ariston', 'Ferroli', 'Tamir'],
        imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000'
    }
];
