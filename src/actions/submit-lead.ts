'use server'

import { pb } from '@/lib/pocketbase';

export async function submitLead(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const district = formData.get('district') as string;
    const issue = formData.get('issue') as string;

    if (!name || !phone || !district || !issue) {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }

    try {
        const record = await pb.collection('leads').create({
            name,
            phone,
            district,
            issue,
            status: 'new',
        });
        return { success: true, id: record.id };
    } catch (error: any) {
        console.error('PocketBase error:', error);
        return { success: false, error: error.message || 'Bir hata oluştu, lütfen tekrar deneyiniz.' };
    }
}
