// app/components/Contact.tsx (or similar server component path)
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
            <span className="wavy-letter">G</span>
            <span className="wavy-letter">e</span>
            <span className="wavy-letter">t</span>&nbsp;
            <span className="wavy-letter">I</span>
            <span className="wavy-letter">n</span>&nbsp;
            <span className="wavy-letter">T</span>
            <span className="wavy-letter">o</span>
            <span className="wavy-letter">u</span>
            <span className="wavy-letter">c</span>
            <span className="wavy-letter">h</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-transparent dark:bg-white/5 dark:border-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 font-light">
                I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can work together to bring your
                ideas to life!
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <Link
                  href="mailto:saroj9823dangol@gmail.com"
                  className="flex items-center gap-3 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm sm:text-base font-medium">
                    saroj9823dangol@gmail.com
                  </span>
                </Link>
                <a
                  referrerPolicy="no-referrer"
                  target="__blank"
                  href="tel:+9779863485599"
                  className="flex items-center gap-3 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm sm:text-base font-medium">
                    +977 9863485599
                  </span>
                </a>
              </div>
              <div className="flex justify-center space-x-6">
                <a
                  referrerPolicy="no-referrer"
                  target="__blank"
                  href="https://github.com/Saroj9823Dangol"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a
                  referrerPolicy="no-referrer"
                  href="https://www.linkedin.com/in/er-saroj-dangol-9492bb216"
                  target="_blank"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
            <a
              href="mailto:saroj9823dangol@gmail.com"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white py-3 rounded-full transition-all duration-300 font-medium"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
