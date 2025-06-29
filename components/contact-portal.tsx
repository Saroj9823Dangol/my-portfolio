"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, Send, Sparkles, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ContactPortal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (portalRef.current) {
        const rect = portalRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div
        ref={portalRef}
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.3) 0%, rgba(147, 51, 234, 0.2) 25%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)`,
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CONTACT PORTAL
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to build something extraordinary? Let's connect and turn your
            vision into reality.
          </p>
        </div>

        {/* Portal container */}
        <div className="relative">
          {/* Floating elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-bounce"></div>
          <div
            className="absolute -bottom-10 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-25 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Main form container */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 animate-pulse"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl"></div>

            <div className="relative z-10 p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name field */}
                  <div className="relative group">
                    <label className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 rounded-xl h-14 text-lg transition-all duration-300 group-hover:bg-white/10"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative group">
                    <label className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-purple-400" />
                      Your Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/50 rounded-xl h-14 text-lg transition-all duration-300 group-hover:bg-white/10"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="relative group">
                  <label className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2 text-pink-400" />
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/50 rounded-xl text-lg transition-all duration-300 group-hover:bg-white/10 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                  />
                </div>

                {/* Submit button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative px-12 py-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-cyan-500 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-lg rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group"
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          Sending to the void...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                          Launch Message
                        </>
                      )}
                    </span>
                  </Button>
                </div>
              </form>

              {/* Contact info */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">@</span>
                    </div>
                    <div className="text-gray-300">
                      mail.sarojdangol@gmail.com
                    </div>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">#</span>
                    </div>
                    <div className="text-gray-300">Lalitpur, Nepal</div>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">⚡</span>
                    </div>
                    <div className="text-gray-300">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-gray-500">
          <p>
            © 2024 Alex Johnson • Crafted with passion and lots of coffee ☕
          </p>
        </div>
      </div>
    </section>
  );
}
