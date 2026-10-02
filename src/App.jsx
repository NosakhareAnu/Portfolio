import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RevealOnScroll from './components/RevealOnScroll';
import ScrollToLocation from './components/ScrollToLocation';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectPage from './pages/ProjectPage';
import './styles/global.css';

function App() {
  return (
    <>
      <ScrollToLocation />
      <RevealOnScroll />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
