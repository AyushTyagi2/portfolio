import Image from 'next/image'; // For optimized image loading
import DeveloperJourney from './type';
const PortfolioSection = () => {
  return (
    <section id = "contributions"className="bg-gray-900 text-gray-300 py-20">
      <div className="container mx-auto px-4">
       

        {/* Skills */}
        <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-montserrat"> {/* Gradient heading */}
          Skills
        </h1> {/* Align left */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* React Skill Card */}
          <div className="bg-gray-800 p-6 rounded-lg relative"> {/* Relative for positioning border */}
            <div className="absolute inset-0  rounded-lg"></div> {/* Blue border */}
            
            <h3 className="text-xl font-semibold mb-2 text-center">React</h3> {/* Center the title */}
            <p className="text-center"> {/* Center the description */}
              Proficient in building complex UI components and single-page applications.
            </p>
            <div className="flex justify-center mb-4"> {/* Center the image */}
              <Image src="/react-logo.jpeg" className ="rounded-full"alt="React Logo" width={160} height={160} /> {/* Increased size */}
            </div>
          </div>

          {/* Node.js Skill Card */}
          <div className="bg-gray-800 p-6 rounded-lg">
            
            <h3 className="text-xl font-semibold mb-2 text-center">Node.js</h3> {/* Center the title */}
            <p className="text-center"> {/* Center the description */}
              Experienced in developing scalable backend services and RESTful APIs.
            </p>
            <div className="flex justify-center mb-4"> {/* Center the image */}
              <Image src="/node.png" alt="Node.js Logo" className ="rounded-full" width={160} height={160} /> {/* Increased size */}
            </div>
          </div>

          {/* More Technologies Skill Card */}
          <div className="bg-gray-800 p-6 rounded-lg">
             
            <h3 className="text-xl font-semibold mb-2 text-center">Firebase</h3> {/* Center the title */}
            <p className="text-center"> {/* Center the description */}
            Mastered database technologies including Firestore, Realtime Database, and Firebase Authentication.
            </p>
            <div className="flex justify-center mb-4"> {/* Center the image */}
              <Image src="/firebase.jpeg" alt="More Technologies" className ="rounded-full" width={160} height={160} /> {/* Increased size */}
            </div>
          </div>

        </div>
      </div>

        {/* Achievements */}
        <div className="mb-12 pt-10">
        <h2 className="text-center text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-montserrat">
          Achievements
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">ML Hackathon</h3>
              <p>I, along with my team, won an ML hackathon by developing a Python-based app aimed at managing traffic and reducing pollution output. Our solution leveraged machine learning algorithms to analyze real-time traffic data, predict congestion patterns, and suggest optimized routes for vehicles. By integrating environmental factors such as emission levels and fuel consumption, our app provided eco-friendly route recommendations to minimize carbon footprints</p>
              </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Hackathon Rush</h3>
              <p>I won my college's Overnight Hackathon twice in a row, demonstrating my ability to think critically and develop innovative solutions under tight deadlines. Competing against top teams, I collaborated to design and implement impactful projects, leveraging my expertise in full-stack development and rapid prototyping.</p>
            </div>
          </div>
        </div>

        {/* Developer Journey */}
       

        
      </div>
    </section>
  );
};

export default PortfolioSection;