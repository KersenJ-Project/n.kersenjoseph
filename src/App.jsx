import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";


export default function App() {
  return(
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen w-screem">
          <Navbar />
          <main className="flex w-screen">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  )
}
