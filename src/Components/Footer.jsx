import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

function Footer() {
    return (
        <div className="bg-custom-green py-8">
            <footer className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                
                {/* Center Section */}
                <div className="center">
                    <h3 className="font-bold text-2xl text-white mb-2">Ecotu Emalatxanası Haqqında</h3>
                    <p className="text-white text-lg mb-4">
                        "Ecotu Emalatxana", fiziki məhdudiyyətli şəxslərin əl işlərindən istifadə edərək, təkrar emal edilə bilən tullantılardan yeni, istifadə oluna bilən məhsullar yaradır. Bu müəssisə, fiziki məhdudiyyətləri olan insanlara iş imkanı yaradır və onların bacarıqlarını inkişaf etdirməyə kömək edir. Məqsədimiz təbiəti qorumaq və ətraf mühitə daha az zərər vurmaqdır.
                    </p>
                    <ul>
                        <li className="text-white text-lg">♻️ Kağız və plastik təkrar emalı</li>
                        <li className="text-white text-lg">♻️ Eko-dost məhsulların istehsalı</li>
                        <li className="text-white text-lg">♻️ Şüşə və metal tullantıların yenidən istifadə edilməsi</li>
                        <li className="text-white text-lg">♻️ Ekoloji təhsil və maarifləndirmə</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="right">
                    <h3 className="font-bold text-2xl text-white mb-2">Sosial mediada biz</h3>
                    <ul>
                        <li className="flex items-center text-white text-lg gap-2 hover:text-yellow-300 transition-all cursor-pointer">
                            <AiFillInstagram size={24} /> EcoTu.Emalatxana
                        </li>
                        <li className="flex items-center text-white text-lg gap-2 hover:text-blue-500 transition-all cursor-pointer mt-2">
                            <AiFillFacebook size={24} /> EcoTu.Emalatxana
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
