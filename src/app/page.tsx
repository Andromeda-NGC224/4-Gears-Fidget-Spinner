import Header from './components/Header/Header';
import GeometrySection from './sections/GeometrySection/GeometrySection';
import StepsToDevelopSection from './sections/StepsToDevelopSection/StepsToDevelopSection';
import HowItWorkSection from './sections/HowItWorkSection/HowItWorkSection';
import ExercisesSection from './sections/ExercisesSection/ExercisesSection';
import ReviewsSection from './sections/ReviewsSection/ReviewsSection';
import Footer from './components/Footer/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <main>
      <Header />
      <GeometrySection />
      <StepsToDevelopSection />
      <HowItWorkSection />
      <ExercisesSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
