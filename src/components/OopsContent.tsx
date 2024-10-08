import { motion } from 'framer-motion';

const OopsContent = () => {
  return (
    <motion.div 
      className="max-w-2xl mx-auto p-8 bg-white rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-red-500 mt-10">
        Oops... looks like you clicked something.
      </h1>
      
      <p className="mb-8 text-lg">
        It seems you've stumbled upon a page that doesn't quite exist yet. Don't worry, though – it's all part of the adventure! This website is a <strong className="text-blue-600">project showcase</strong>, not a real company. <strong className="text-blue-600">Marketron might sound cool, but it's just a figment of our imagination</strong>.
      </p>
      
      <p className="mb-8 text-lg">
        While Marketron isn't real, <strong className="text-blue-600">I certainly am!</strong> I'm <strong className="text-blue-600">Oriol Mont Creus</strong>, the creator of this project. If you're curious about my work or want to see more of my projects, feel free to check out my website and social media.
      </p>
      
      <div className="flex justify-center space-x-4">
        <a 
          href="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-center"
        >
          Go back
        </a>
        <a 
          href="https://bento.me/omont-dev" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-center"
        >
          Visit my Bento.me
        </a>
      </div>
    </motion.div>
  );
};

export default OopsContent;