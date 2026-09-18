import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { MobileBottomNav } from "./components/layout/MobileBottomNav";
import Home from "./pages/Home";
import Ministerios from "./pages/Ministerios";
import MinistryDetail from "./pages/MinistryDetail";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";
import Eventos from "./pages/Eventos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sobre"
            element={
              <PlaceholderPage
                title="Sobre a igreja"
                description="Nossa história, valores e o propósito que nos move — conteúdo completo em breve."
              />
            }
          />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/ministerios/:slug" element={<MinistryDetail />} />
                    <Route path="/eventos" element={<Eventos />} />
          <Route
            path="/cultos"
            element={
              <PlaceholderPage
                title="Cultos"
                description="Horários, formatos e como assistir aos nossos cultos online."
              />
            }
          />
          <Route
            path="/conecte-se"
            element={
              <PlaceholderPage
                title="Conecte-se"
                description="Encontre um pequeno grupo e formas de se envolver com a igreja."
              />
            }
          />
          <Route
            path="/visite-nos"
            element={
              <PlaceholderPage
                title="Visite-nos"
                description="Tudo o que você precisa saber para planejar sua primeira visita."
              />
            }
          />
          <Route
            path="/contribua"
            element={
              <PlaceholderPage
                title="Contribua"
                description="Formas de contribuir com dízimos e ofertas."
              />
            }
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomNav />
    </BrowserRouter>
  );
}

export default App;
