import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 w-full h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full">
        <div className="slideshow-container w-full h-full relative">
          {/* Slideshow gambar bisa ditambahkan di sini */}
        </div>
        <div className="flex flex-col justify-center items-start space-y-4 h-full p-8">
          <h2 className="text-lg font-bold">I’m available for every opportunity!</h2>
          <p className="text-gray-600">Interested in working with me? Need help on your project? Or just wanna say hi? I’d love to hear you about that.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-500"><i className="fab fa-github"></i></a>
            <a href="#" className="text-black hover:text-gray-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-black hover:text-gray-500"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
