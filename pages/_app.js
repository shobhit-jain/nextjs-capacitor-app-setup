import Head from 'next/head';

import 'tailwindcss/tailwind.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '../styles/global.css';
import '../styles/variables.css';
import MetaData from '../components/common/metaData';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>App | shobhit.work</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <MetaData />
        <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
