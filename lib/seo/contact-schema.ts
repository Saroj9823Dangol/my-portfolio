// Basic type definition for schema.org ContactPage
interface ContactPageSchema {
  "@context": "https://schema.org";
  "@type": "ContactPage";
  name: string;
  description: string;
  url: string;
  mainEntity: {
    "@type": "Person";
    name: string;
    email: string;
    telephone: string;
    url: string;
  };
}

export const contactPageSchema: ContactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Saroj Dangol",
  description:
    "Get in touch with Saroj Dangol for IT development services in Nepal.",
  url: "https://www.sarojdangol012.com.np/contact",
  mainEntity: {
    "@type": "Person",
    name: "Saroj Dangol",
    email: "hello@sarojdangol012.com.np",
    telephone: "+977-9823456789",
    url: "https://www.sarojdangol012.com.np",
  },
};
