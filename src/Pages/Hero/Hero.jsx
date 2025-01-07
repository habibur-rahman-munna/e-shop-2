import image from "../../assets/hero.png";
import CustomBtn from "../../Components/CustomeBtn"; 
const Hero = () => {
  return (

    <div className="main-container">
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-6">Your journey to greatness starts here</p>
        <div className="flex justify-center"><CustomBtn link="product" className="w-40 py-3">Get Started</CustomBtn></div>
      </div>
    </section>
    </div>
  );
};

export default Hero;

