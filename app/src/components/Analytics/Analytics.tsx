import Script from 'next/script'
import React from 'react'

function Analytics() {
  return (
    <>
      <Script
      // Replace NEXT_PUBLIC_GA_TRACKING at env.prd to link with the correct Measurement ID
        src={`https://www.googletagmanager.com/gtag/js?id=G-5MPNGX8WE5`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5MPNGX8WE5');
        `}
      </Script>
    </>
  )
}

export default Analytics





