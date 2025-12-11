"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Github, Linkedin, Twitter, Rocket } from "lucide-react";

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitting(false);
      alert(
        "Failed to send message. Please try again or contact me directly via email."
      );
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-neptune-cyan to-cosmic-blue flex items-center justify-center"
        >
          <Rocket size={40} className="text-background" />
        </motion.div>
        <h3 className="font-display text-2xl text-neptune-cyan mb-4">
          Message Launched!
        </h3>
        <p className="font-body text-muted-foreground">
          Your transmission has been sent across the galaxy. I&apos;ll respond
          as soon as it reaches my terminal!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-xl p-6"
        >
          <h3 className="font-display text-xl text-neptune-cyan mb-6">
            Send a Transmission
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-terminal text-sm text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg font-body text-foreground focus:border-neptune-cyan focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="font-terminal text-sm text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg font-body text-foreground focus:border-neptune-cyan focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="font-terminal text-sm text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg font-body text-foreground focus:border-neptune-cyan focus:outline-none transition-colors resize-none h-32"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-neptune-cyan to-cosmic-blue text-background font-display tracking-wider rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⠋</span>
                  Launching...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <div className="glass rounded-xl p-6">
            <h3 className="font-display text-xl text-neptune-cyan mb-4">
              Direct Channels
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:hello@sarojdangol012.com"
                className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <Mail className="text-neptune-cyan" />
                <div>
                  <p className="font-terminal text-sm text-muted-foreground">
                    Email
                  </p>
                  <p className="font-body text-foreground group-hover:text-neptune-cyan transition-colors">
                    hello@sarojdangol012.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="font-display text-xl text-neptune-cyan mb-4">
              Social Satellites
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/Saroj9823Dangol",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/er-saroj-dangol-9492bb216",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-secondary/30 rounded-lg hover:bg-neptune-cyan/10 hover:border-neptune-cyan border border-transparent transition-all"
                >
                  <social.icon size={24} className="text-neptune-cyan" />
                  <span className="font-terminal text-xs text-muted-foreground">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="mt-4 space-y-2">
              <a
                href="https://facebook.com/saroz.dangol.7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-neptune-cyan/10 transition-colors text-sm"
              >
                <span className="font-terminal text-neptune-cyan">
                  Facebook
                </span>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01a78d9a0751fb1801"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-neptune-cyan/10 transition-colors text-sm"
              >
                <span className="font-terminal text-neptune-cyan">
                  Upwork Profile
                </span>
              </a>
            </div>
          </div>

          {/* Fun fact */}
          <div className="glass rounded-xl p-6 border-neptune-cyan/30">
            <p className="font-terminal text-sm text-neptune-cyan">
              💡 Fun fact: Messages sent here travel at the speed of light
              (approximately).
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
