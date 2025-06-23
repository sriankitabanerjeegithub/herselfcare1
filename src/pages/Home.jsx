import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative flex flex-col justify-center items-center text-center min-h-screen w-full bg-cover bg-center p-4"
        style={{ backgroundImage: "url('../images/positive2.webp')" }}
      >
        <div className="absolute inset-0 bg-white opacity-1"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white italic mb-2"
          >
            <u></u>
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black italic mt-2 max-w-xl px-2 mx-auto"
          >
            
          </motion.p>
        </div>
      </div>

      {/* Empowering Early Detection */}
      <section className="py-10 px-4 text-center bg-white w-full">
        <p className="text-xl md:text-2xl italic mb-4">Empowering Early Detection</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">
          <span className="border-b-4 border-black">Enhancing</span>,{" "}
          <span className="text-[#f707b3]">peace of mind</span>
        </h2>
        <p className="text-lg md:text-xl italic max-w-2xl mx-auto">
          Early detection can save lives, and our Breast Cancer Prediction &
          Awareness Platform is here to help you take control of your health.
          By analyzing key medical data, our tool provides quick and easy risk
          assessments, empowering you to make informed decisions. Along with
          prediction, we offer valuable resources, expert blogs, and a hospital
          search feature to guide you on your journey. Prioritize your well-being
          today—because awareness and action are the first steps toward a healthier
          future!
        </p>
      </section>

      {/* Scrolling Image Section */}
      <section
        className="relative w-full overflow-hidden flex flex-col items-center py-10 bg-center bg-cover"
        style={{ backgroundImage: "url('../images/positive.jpeg')" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 italic text-white">Our Visual Message</h2>
        <motion.div
          className="flex gap-6 w-max px-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[
            "../images/image1.jpeg",
            "../images/image5.png",
            "../images/image6.jpeg",
            "../images/image3.jpeg",
            "../images/image8.jpeg",
            "../images/image7.jpeg",
            "../images/image9.jpeg",
            "../images/image10.jpeg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Health message"
              className="w-28 h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 object-cover rounded-2xl shadow-xl flex-shrink-0"
            />
          ))}
        </motion.div>
        <p className="mt-10 max-w-3xl text-center text-white text-base sm:text-lg md:text-xl italic px-4">
          Through powerful imagery and motion, we aim to raise awareness,
          inspire action, and foster hope. Each photo tells a story of courage,
          care, and the unwavering support available in the fight against breast
          cancer. Our visual message is a reminder that early detection,
          community strength, and compassionate care can change lives.
        </p>
      </section>

      {/* Priority Section */}
      <section className="py-10 px-4 text-center bg-white w-full">
        <p className="text-xl md:text-2xl italic mb-4">Be sure, Be safe</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">
          <span className="border-b-4 border-black">Your Health</span>,{" "}
          <span className="text-[#f707b3]">Your Priority</span>
        </h2>
        <p className="text-lg md:text-xl italic max-w-2xl mx-auto">
          Our Breast Cancer Prediction & Awareness Platform helps assess
          breast cancer risk by analyzing medical data and providing quick predictions.
          It offers a user-friendly experience, along with resources for education and
          hospital search. Take a proactive step toward early detection and stay
          informed about your health!
        </p>
      </section>

      {/* Testimonials Section */}
      <section
        className="relative w-full bg-center bg-cover py-10"
        style={{ backgroundImage: "url('../images/flower.jpeg')" }}
      >
        <div className="bg-white/50 p-4 text-center italic">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">A good word means a lot</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-2">Client testimonial</h3>
          <p className="text-lg mb-8">It’s always the word of mouth that’s the best advice.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                text: "I found this platform incredibly helpful and informative. The predictions gave me peace of mind.",
                image: "../images/girls.jpeg",
              },
              {
                name: "Climily Carter",
                text: "A fantastic tool for early detection and awareness. Highly recommended!",
                image: "../images/girls1.jpeg",
              },
              {
                name: "Michael Lee",
                text: "This website provided me with valuable insights and reassurance.",
                image: "../images/girls2.jpeg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 pt-10 rounded-lg shadow-lg relative flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full absolute -top-8 border-4 border-white"
                />
                <p className="italic mt-8 text-center">“{testimonial.text}”</p>
                <h4 className="font-bold mt-2">- {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
