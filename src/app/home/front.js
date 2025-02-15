import Image from 'next/image';
import AnimatedText from './text'; // Assuming your AnimatedText component is here

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-gray-300 py-16 relative overflow-hidden"> {/* Increased padding, overflow hidden */}
      
      <div className="container mx-auto relative z-10"> {/* Container with z-index */}
        <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden shadow-lg"> {/* Hero Image container */}
          <Image
            src="/Hero-Image.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Darker overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-3xl font-mono tracking-wider text-[#22EE44]">
              Welcome to Ayush Tyagi's Portfolio
            </h1>
          </div>
        </div>

        <div className="text-center mb-16"> {/* Increased margin */}
          <AnimatedText /> {/* Your animated text component */}
        </div>

        {/* Project Previews (You can add these back later) */}
        {/* ... */}

      </div>
    </section>
  );
};

export default HeroSection;