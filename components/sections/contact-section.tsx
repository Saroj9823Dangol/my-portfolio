"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send");

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  const inputClass = "w-full px-4 py-3 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm";
  const labelClass = "block text-sm font-medium text-[var(--color-fg-muted)] mb-1.5";
  const errorClass = "mt-1 text-xs text-red-400";

  return (
    <div className="pt-16">
      <section className="py-24 max-w-6xl mx-auto px-6">
        <span className="label-mono">Get in Touch</span>
        <h1 className="heading-display mt-2 text-4xl md:text-5xl text-[var(--color-fg)]">
          Let&apos;s Build Something
        </h1>
        <p className="mt-4 text-lg text-[var(--color-fg-muted)] max-w-xl">
          Have a project in mind? Fill out the form and I&apos;ll get back to you within 24 hours.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitStatus === "success" ? (
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
                <div className="text-[var(--color-accent)] font-mono text-sm mb-2">Message sent</div>
                <h3 className="heading-display text-2xl text-[var(--color-fg)]">Thanks for reaching out!</h3>
                <p className="mt-2 text-[var(--color-fg-muted)] text-sm">I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-6 text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className={inputClass}
                    {...register("name")}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className={errorClass}>{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className={inputClass}
                    {...register("email")}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project inquiry, collaboration, etc."
                    className={inputClass}
                    {...register("subject")}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && <p id="subject-error" className={errorClass}>{errors.subject.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                    {...register("message")}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && <p id="message-error" className={errorClass}>{errors.message.message}</p>}
                </div>

                {submitStatus === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[var(--color-accent)] text-black font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-base font-semibold text-[var(--color-fg)] mb-4">Direct contact</h2>
              <a
                href="mailto:hello@sarojdangol012.com.np"
                className="flex items-center gap-3 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
              >
                <Mail size={16} className="text-[var(--color-accent)]" aria-hidden="true" />
                hello@sarojdangol012.com.np
              </a>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[var(--color-fg)] mb-4">Profiles</h2>
              <div className="space-y-3">
                <a
                  href="https://github.com/Saroj9823Dangol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                >
                  <Github size={16} aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/er-saroj-dangol-9492bb216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                >
                  <Linkedin size={16} aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01a78d9a0751fb1801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Upwork
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="font-mono text-xs text-[var(--color-accent)] mb-1">Response time</p>
              <p className="text-sm text-[var(--color-fg-muted)]">
                I typically respond within 24 hours on business days. For urgent inquiries, email directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
