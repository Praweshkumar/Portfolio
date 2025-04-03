const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/Praweshkumar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
            <a href="https://www.linkedin.com/in/prawesh-kumar-838674226/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;