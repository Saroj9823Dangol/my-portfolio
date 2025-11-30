"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, Send, Sparkles, Zap } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactPortal() {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Form container animation
      gsap.from(formContainerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: formContainerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Contact info animation
      gsap.from(contactInfoRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      const subject = `Message from ${name}`;
      const body = `Hi Saroj,%0D%0A%0D%0A${message}%0D%0A%0D%0ABest regards,%0D%0A${name}%0D%0A${email}`;

      window.location.href = `mailto:hello@sarojdangol012.com.np?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Contact.init()
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? Let's collaborate and build
            something extraordinary together.
          </p>
        </div>

        {/* Portal container */}
        <div className="relative">
          {/* Floating elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-float-enhanced"></div>
          <div
            className="absolute -bottom-10 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-25 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Main form container */}
          <div
            ref={formContainerRef}
            className="relative glass-dark backdrop-blur-xl border border-white/10 overflow-hidden rounded-lg shadow-glow"
          >
            <div className="relative z-10 p-5 bg-transparent">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
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
                      required
                      className="glass-dark border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 h-14 text-lg transition-smooth group-hover:border-cyan-400/50"
                      placeholder="Enter Your Name"
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
                      required
                      className="glass-dark border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/50 h-14 text-lg transition-smooth group-hover:border-purple-400/50"
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
                    required
                    rows={6}
                    className="glass-dark border-white/20 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/50 text-lg transition-smooth group-hover:border-pink-400/50 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                  />
                </div>

                {/* Submit button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="relative px-12 py-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-cyan-500 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-lg transition-smooth hover:scale-105 shadow-glow hover:shadow-glow-purple disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group magnetic rounded-lg"
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                    <span className="relative z-10 flex items-center">
                      <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      Launch Message
                    </span>
                  </Button>
                </div>
              </form>

              {/* Contact info */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div
                  ref={contactInfoRef}
                  className="grid md:grid-cols-3 gap-8 text-center"
                >
                  <div className="group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow-cyan">
                      <span className="text-white font-bold">@</span>
                    </div>
                    <div className="text-gray-300">
                      hello@sarojdangol012.com.np
                    </div>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow-purple">
                      <span className="text-white font-bold">#</span>
                    </div>
                    <div className="text-gray-300">Lalitpur, Nepal</div>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow-cyan">
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
        <div className="text-center mt-20 text-white">
          <p>
            © 2025 Saroj Dangol • Crafted with passion and lots of coffee ☕
          </p>
        </div>
      </div>
    </section>
  );
}
