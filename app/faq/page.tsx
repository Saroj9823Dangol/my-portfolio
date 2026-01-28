import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { StructuredData } from "@/components/seo/structured-data";
import { faqSchema } from "@/lib/seo/schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = generateSEOMetadata({
  title: "FAQ - Frequently Asked Questions | Saroj Dangol",
  description:
    "Common questions about IT development services in Nepal. Learn about pricing, technologies, timelines, and how to work with Saroj Dangol.",
  keywords: [
    "IT developer FAQ Nepal",
    "web development cost Nepal",
    "hire developer Lalitpur",
    "app development pricing",
    "MERN stack developer questions",
  ],
  canonical: "https://www.sarojdangol012.com.np/faq",
});

const faqs = [
  {
    question: "What services do you offer as an IT developer in Nepal?",
    answer:
      "I offer comprehensive IT development services including Full Stack Web Development (MERN stack), Mobile App Development (React Native), Cloud Solutions (AWS), API Development, and Technical Consulting. I specialize in building scalable, high-performance applications for businesses in Kathmandu Valley and beyond.",
  },
  {
    question: "How much does it cost to develop a web application in Nepal?",
    answer:
      "The cost varies based on project complexity, features, and timeline. A basic website starts from NPR 50,000, while complex web applications can range from NPR 200,000 to NPR 1,000,000+. I provide detailed quotes after understanding your specific requirements.",
  },
  {
    question: "Do you work with clients outside Nepal?",
    answer:
      "Yes, I work with clients globally. While I'm based in Lalitpur, Nepal, I have experience working remotely with international clients. I'm available for both remote and on-site projects in the Kathmandu Valley.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), React Native for mobile development, Next.js for web applications, TypeScript, AWS cloud services, and modern DevOps practices. I'm also experienced with GraphQL, PostgreSQL, and various frontend frameworks.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "Development time depends on app complexity. A simple app takes 4-8 weeks, a medium complexity app takes 2-4 months, and complex apps with advanced features can take 4-6 months or more. I provide detailed timelines during project planning.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, I offer ongoing support and maintenance packages for all projects. This includes bug fixes, security updates, performance optimization, and feature enhancements. Support packages can be customized based on your needs.",
  },
  {
    question: "What is your development process?",
    answer:
      "My development process follows Agile methodology: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment, 5) Support & Maintenance. I maintain clear communication throughout and provide regular updates.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "Absolutely! I can help with code reviews, bug fixes, performance optimization, feature additions, technology upgrades, and complete project refactoring. I'm experienced in taking over and improving existing codebases.",
  },
  {
    question: "What makes you different from other developers in Nepal?",
    answer:
      "I bring 5+ years of professional experience, AWS certification, expertise in modern technologies, a strong focus on code quality and best practices, excellent communication skills, and a proven track record of delivering successful projects on time and within budget.",
  },
  {
    question: "How can I get started with a project?",
    answer:
      "Simply contact me through the contact form, email, or phone. We'll schedule a consultation to discuss your requirements, timeline, and budget. I'll then provide a detailed proposal and project plan for your review.",
  },
];

export default function FAQPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about working with me
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Feel free to reach out
              directly.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
