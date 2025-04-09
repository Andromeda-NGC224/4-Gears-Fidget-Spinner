import Header from './components/Header/Header';
import GeometrySection from './sections/GeometrySection/GeometrySection';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StepsToDevelopSection from './sections/StepsToDevelopSection/StepsToDevelopSection';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <GeometrySection />
      <StepsToDevelopSection />
      <Footer />
    </main>
  );
}
