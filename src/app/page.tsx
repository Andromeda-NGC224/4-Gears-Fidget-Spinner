import Footer from './components/Footer/Footer';
import GeometrySection from './components/GeometrySection/GeometrySection';
import Header from './components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home() {
  return (
    <main>
      <Header />
      <GeometrySection />
      <Footer />
    </main>
  );
}
