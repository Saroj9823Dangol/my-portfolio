// app/components/DownloadCV.tsx (Server Component)
import { Download, Linkedin } from "lucide-react";

const DownloadCV = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-transparent dark:from-cyan-500/10 dark:to-purple-500/10 backdrop-blur-sm overflow-hidden relative rounded-xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-cyan-500/5 dark:to-purple-500/5 animate-pulse"></div>
            <div className="p-6 sm:p-8 md:p-12 text-center relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 rounded-full flex items-center justify-center">
                  <Download className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
                <span className="wavy-letter">D</span>
                <span className="wavy-letter">o</span>
                <span className="wavy-letter">w</span>
                <span className="wavy-letter">n</span>
                <span className="wavy-letter">l</span>
                <span className="wavy-letter">o</span>
                <span className="wavy-letter">a</span>
                <span className="wavy-letter">d</span>&nbsp;
                <span className="wavy-letter">M</span>
                <span className="wavy-letter">y</span>&nbsp;
                <span className="wavy-letter">R</span>
                <span className="wavy-letter">e</span>
                <span className="wavy-letter">s</span>
                <span className="wavy-letter">u</span>
                <span className="wavy-letter">m</span>
                <span className="wavy-letter">e</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                Get a detailed overview of my 3+ years of experience in
                full-stack development, skills, and achievements. B.Sc. Computer
                Engineering graduate with AWS certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/Saroj_Dangol_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white px-6 sm:px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-cyan-500/25 font-medium flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/er-saroj-dangol-9492bb216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-900 px-6 sm:px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;
