import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

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
          <Route
            path="/ministerios"
            element={
              <PlaceholderPage
                title="Ministérios"
                description="Conheça em detalhes cada ministério e como fazer parte."
              />
            }
          />
          <Route
            path="/eventos"
            element={
              <PlaceholderPage title="Eventos" description="Agenda completa de eventos da igreja." />
            }
          />
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
    </BrowserRouter>
  );
}

export default App;
