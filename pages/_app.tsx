import { Provider } from 'react-redux';
import type { AppProps  } from 'next/app';
import { store } from '../store/store';
import Header from '../components/header'
import '../styles/Header.scss';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Provider store={store}>
          <Header />
        <Component {...pageProps} />
      </Provider>
  );
}

export default CustomApp;