import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        id="section1"
        reverse={false}
        heading="AI Powered Café Search"
        description="Leverage our cutting-edge AI technology to discover the perfect café that suits your preferences and needs. Whether you're looking for a work-friendly spot, a cozy ambiance, or specific menu offerings, our AI engine has you covered. Simply type or speak your request, like 'Find work-friendly cafés with a warm ambiance,' and get personalized, accurate, and curated suggestions instantly. Transform the way you explore cafes, one intelligent search at a time."
        image="/recommendation.png" // Placeholder image
      />
      <Section
        id="section2"
        reverse={true}
        heading="Waitlist Transparency"
        description="Say goodbye to long, uncertain waits at your favorite café. With our real-time waitlist transparency, you can check live wait times before you leave home. Join the waitlist remotely and track your position in line with dynamic progress bars. Our system ensures you're always in the loop, helping you plan your visit better and avoid unnecessary delays. It's like having a personal assistant for your café outings."
        image="/waitlist.jpg" // Placeholder image
      />
      <Section
        id="section3"
        reverse={false}
        heading="AI Powered Menus"
        description="Revolutionize the way you explore menus with our AI-powered menu recommendations. Discover personalized suggestions tailored to your tastes, dietary needs, and cravings. Ask questions like 'What pairs best with my latte?' and receive intelligent recommendations that elevate your dining experience. Our dynamic menus also include upselling opportunities to help you try something new and exciting while enhancing your meal."
        image="/dynamicMenu.jpeg" // Placeholder image
      />
      <Section
        id="section4"
        reverse={true}
        heading="Collaborative carts"
        description="Enjoy a seamless group dining experience with our innovative collaborative carts. Easily create, share, and update group orders in real-time. Every participant can add their preferred items to the cart, ensuring everyone's needs are met. Once ready, generate a QR code for the waiter to instantly view and process the order. Whether you're dining with friends, family, or colleagues, collaborative carts simplify group dining like never before."
        image="/cart.jpeg" // Placeholder image
      />
      <CallToAction />
      <FAQ />
    </div>
  );
}
