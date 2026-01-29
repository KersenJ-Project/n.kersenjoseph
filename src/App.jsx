import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import NavBar from './components/NavBar';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';



export default function App(){
    return(
        <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen w-screen">
          <NavBar />
          <main className='flex flex-grow items-center justify-center w-screen bg-sky-50'>
              <ScrollToTop />
              <AppRoutes />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </I18nextProvider>
    )
}