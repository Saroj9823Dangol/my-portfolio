"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";

export function CVContent() {
  const handleDownload = () => {
    // Open CV in new tab
    window.open("/Saroj_Dangol_CV.pdf", "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-xl p-8 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center"
          style={{ boxShadow: "0 0 30px rgba(52, 211, 153, 0.3)" }}
        >
          <FileText size={48} className="text-white" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-display text-3xl text-foreground mb-3"
        >
          Download My CV
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-body text-muted-foreground mb-8 leading-relaxed"
        >
          Get a comprehensive overview of my professional experience, skills,
          and achievements in PDF format.
        </motion.p>

        {/* Download Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={handleDownload}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-terminal text-sm rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={20} />
          Download CV (PDF)
        </motion.button>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 pt-8 border-t border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle
                size={20}
                className="text-green-500 mt-0.5 flex-shrink-0"
              />
              <div>
                <h4 className="font-terminal text-sm text-foreground mb-1">
                  Complete Profile
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  Full work history and education
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle
                size={20}
                className="text-green-500 mt-0.5 flex-shrink-0"
              />
              <div>
                <h4 className="font-terminal text-sm text-foreground mb-1">
                  Skills Overview
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  Technical expertise and tools
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle
                size={20}
                className="text-green-500 mt-0.5 flex-shrink-0"
              />
              <div>
                <h4 className="font-terminal text-sm text-foreground mb-1">
                  Contact Info
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  Professional contact details
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 font-terminal text-xs text-muted-foreground"
        >
          PDF will open in a new tab • Last updated: December 2024
        </motion.p>
      </motion.div>
    </div>
  );
}
