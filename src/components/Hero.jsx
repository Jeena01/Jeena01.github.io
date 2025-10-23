import HeroImage from "../assets/reading goose.png"
export default function Hero(){


    return (
    <section className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center m-8">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-10 lg:px-20">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
            Hi! I'm Jeena!
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            I love whimsy, bringing my ideas to life and being a silly goose.
          </p>
          {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get to know m
          </button> */}
        </div>

        {/* Image Section */}
        <div className="w-full max-w-500 lg:max-w-500 md:w-1/2 flex justify-center mb-6 md:mb-0 p-8 lg:px-25 m-9">
          <img src={HeroImage} alt="Reading Goose" className="w-3/4 md:w-full rounded-full shadow-lg" />
        </div>

      </div>
    </section>
  );
}