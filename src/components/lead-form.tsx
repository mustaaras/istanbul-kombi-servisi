'use client'

import { useActionState } from 'react';
import { submitLead } from '@/actions/submit-lead';
import { Loader2 } from 'lucide-react';

const initialState = {
    success: false,
    error: '',
};

export default function LeadForm() {
    const [state, action, isPending] = useActionState(submitLead, initialState);

    return (
        <form action={action} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Hemen Teklif Alın</h2>

            {state?.success && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200">
                    Talebiniz başarıyla alındı! En kısa sürede size dönüş yapacağız.
                </div>
            )}

            {state?.error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
                    {state.error}
                </div>
            )}

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Ad Soyad</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:blue-500 focus:border-transparent outline-none text-white transition-all placeholder:text-gray-500"
                    placeholder="Adınız Soyadınız"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefon Numarası</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all placeholder:text-gray-500"
                    placeholder="05XX XXX XX XX"
                />
            </div>

            <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-300 mb-2">İlçe</label>
                <select
                    id="district"
                    name="district"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all [&>option]:bg-gray-900"
                >
                    <option value="">İlçe Seçiniz</option>
                    <option value="Adalar">Adalar</option>
                    <option value="Arnavutköy">Arnavutköy</option>
                    <option value="Ataşehir">Ataşehir</option>
                    <option value="Avcılar">Avcılar</option>
                    <option value="Bağcılar">Bağcılar</option>
                    <option value="Bahçelievler">Bahçelievler</option>
                    <option value="Bakırköy">Bakırköy</option>
                    <option value="Başakşehir">Başakşehir</option>
                    <option value="Bayrampaşa">Bayrampaşa</option>
                    <option value="Beşiktaş">Beşiktaş</option>
                    <option value="Beykoz">Beykoz</option>
                    <option value="Beylikdüzü">Beylikdüzü</option>
                    <option value="Beyoğlu">Beyoğlu</option>
                    <option value="Büyükçekmece">Büyükçekmece</option>
                    <option value="Çatalca">Çatalca</option>
                    <option value="Çekmeköy">Çekmeköy</option>
                    <option value="Esenler">Esenler</option>
                    <option value="Esenyurt">Esenyurt</option>
                    <option value="Eyüpsultan">Eyüpsultan</option>
                    <option value="Fatih">Fatih</option>
                    <option value="Gaziosmanpaşa">Gaziosmanpaşa</option>
                    <option value="Güngören">Güngören</option>
                    <option value="Kadıköy">Kadıköy</option>
                    <option value="Kağıthane">Kağıthane</option>
                    <option value="Kartal">Kartal</option>
                    <option value="Küçükçekmece">Küçükçekmece</option>
                    <option value="Maltepe">Maltepe</option>
                    <option value="Pendik">Pendik</option>
                    <option value="Sancaktepe">Sancaktepe</option>
                    <option value="Sarıyer">Sarıyer</option>
                    <option value="Silivri">Silivri</option>
                    <option value="Sultanbeyli">Sultanbeyli</option>
                    <option value="Sultangazi">Sultangazi</option>
                    <option value="Şile">Şile</option>
                    <option value="Şişli">Şişli</option>
                    <option value="Tuzla">Tuzla</option>
                    <option value="Ümraniye">Ümraniye</option>
                    <option value="Üsküdar">Üsküdar</option>
                    <option value="Zeytinburnu">Zeytinburnu</option>
                </select>
            </div>

            <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-300 mb-2">Sorun Açıklaması</label>
                <textarea
                    id="issue"
                    name="issue"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all resize-none placeholder:text-gray-500"
                    placeholder="Kombinizdeki sorunu kısaca anlatınız..."
                />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isPending ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Gönderiliyor...
                    </>
                ) : (
                    'Talep Oluştur'
                )}
            </button>
        </form>
    );
}
