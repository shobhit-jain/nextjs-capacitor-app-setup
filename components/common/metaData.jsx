export const MetaData = () => (
  <>
    <link rel="icon" href={`/favicon.ico`} />

    <link rel="apple-touch-icon" sizes="57x57" href={`/img/favicon/apple-icon-57x57.png`} />
    <link rel="apple-touch-icon" sizes="60x60" href={`/img/favicon/apple-icon-60x60.png`} />
    <link rel="apple-touch-icon" sizes="72x72" href={`/img/favicon/apple-icon-72x72.png`} />
    <link rel="apple-touch-icon" sizes="76x76" href={`/img/favicon/apple-icon-76x76.png`} />
    <link rel="apple-touch-icon" sizes="114x114" href={`/img/favicon/apple-icon-114x114.png`} />
    <link rel="apple-touch-icon" sizes="120x120" href={`/img/favicon/apple-icon-120x120.png`} />
    <link rel="apple-touch-icon" sizes="144x144" href={`/img/favicon/apple-icon-144x144.png`} />
    <link rel="apple-touch-icon" sizes="152x152" href={`/img/favicon/apple-icon-152x152.png`} />
    <link rel="apple-touch-icon" sizes="180x180" href={`/img/favicon/apple-icon-180x180.png`} />

    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href={`/img/favicon/android-icon-192x192.png`}
    />
    <link rel="icon" type="image/png" sizes="32x32" href={`/img/favicon/favicon-32x32.png`} />
    <link rel="icon" type="image/png" sizes="96x96" href={`/img/favicon/favicon-96x96.png`} />
    <link rel="icon" type="image/png" sizes="16x16" href={`/img/favicon/favicon-16x16.png`} />

    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content={`/img/favicon/ms-icon-144x144.png`} />

    <meta name="theme-color" content="#333333" />

    <link rel="manifest" href={`/tabs/feed/manifest.json`} />

    {/* block: Google site verification and analytics implementation and google tag manager */}
    {/* <script
      dangerouslySetInnerHTML={{
        __html: `
              if (window.location.hostname === "app.shobhit.work") {
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NDMZR38');
            }
          `,
      }}
    /> */}

    {/* <meta name="google-site-verification" content="yfebxrXpl1x76ycTUWqTwP9xuDDth8iXDselpmnv5ng" /> */}

    {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script> */}

    {/* <script
      dangerouslySetInnerHTML={{
        __html: `
              if (window.location.hostname === "app.shobhit.work") {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-175470607-1');
              }
          `,
      }}
    /> */}
    {/* block: End */}
  </>
);

export default MetaData;
