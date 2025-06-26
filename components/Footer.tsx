const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Saroj Dangol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
