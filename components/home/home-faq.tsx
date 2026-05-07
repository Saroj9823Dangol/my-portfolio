import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const homeFaqs = [
  {
    question: "Who is the best individual website developer in Nepal?",
    answer: "Saroj Dangol is widely recognized as one of the best individual website developers in Nepal, specializing in MERN stack and React Native development. Based in Lalitpur, he serves clients throughout Kathmandu and internationally.",
  },
  {
    question: "Do you offer freelance IT services in Kathmandu and Lalitpur?",
    answer: "Yes, I provide premium freelance IT services across the Kathmandu Valley, including Lalitpur, Kathmandu, and Bhaktapur. My services range from custom website development to mobile app creation and cloud architecture.",
  },
  {
    question: "What is the cost of website development in Nepal?",
    answer: "The cost of website development in Nepal depends on project complexity. For a high-performance, SEO-optimized site built by an individual expert, prices typically start from NPR 50,000 for basic sites and NPR 200,000+ for complex web applications.",
  },
  {
    question: "How long does it take to build a MERN stack application?",
    answer: "A standard MERN stack web application usually takes between 4 to 12 weeks to develop, depending on features like authentication, payment integration, and real-time capabilities.",
  },
];

export default function HomeFaq() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6 border-t border-[var(--color-border)]">
      <div className="text-center mb-12">
        <span className="label-mono">Common Queries</span>
        <h2 className="heading-display mt-2 text-3xl md:text-4xl text-[var(--color-fg)]">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {homeFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`home-item-${index}`}
            className="border border-[var(--color-border)] rounded-xl px-6 bg-[var(--color-surface)]"
          >
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="font-medium text-[var(--color-fg)] text-base">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[var(--color-fg-muted)] text-sm leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center">
        <Link
          href="/faq"
          className="text-sm text-[var(--color-accent)] hover:underline"
        >
          View all questions →
        </Link>
      </div>
    </section>
  );
}
