'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  // 실제 홈페이지(Production)에서만 집계. 미리보기·로컬은 제외
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7EQTX4W247"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7EQTX4W247');
          `,
        }}
      />
    </>
  );
}