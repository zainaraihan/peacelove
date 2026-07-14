'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (nextLocale: 'en' | 'zh') => {
    if (nextLocale === currentLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className={`flex items-center gap-2 text-[14px] font-semibold transition-opacity duration-300 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
      <button
        onClick={() => handleLocaleChange('en')}
        disabled={isPending}
        className={`hover:text-brand-primary transition-colors cursor-pointer focus:outline-none ${currentLocale === 'en' ? 'text-brand-primary' : 'text-brand-secondary'
          }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-brand-grey/40 select-none">|</span>
      <button
        onClick={() => handleLocaleChange('zh')}
        disabled={isPending}
        className={`hover:text-brand-primary transition-colors cursor-pointer focus:outline-none ${currentLocale === 'zh' ? 'text-brand-primary' : 'text-brand-secondary'
          }`}
        aria-label="Switch to Mandarin Chinese"
      >
        中文
      </button>
    </div>
  );
}
