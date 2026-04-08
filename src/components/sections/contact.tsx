import ContactForm from "./contact-form";
import ContactLinks from "./contact-links";

export default function Contact() {
  return (
    <div id="contact" className="w-full h-[calc(100vh-42px)] py-8 flex flex-col items-start justify-start gap-8">
      <h1 className="text-4xl">
        Contact
      </h1>
      <div className="flex flex-row items-center justify-center w-full h-full gap-8">
        <div className="w-full h-full bg-card border">
          <ContactLinks />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <div className="w-full h-full bg-card border flex flex-col items-center justify-center">
            <ContactForm />
          </div>
          <div className="w-full py-10 flex flex-col items-center justify-center bg-secondary border">
            <h2 className="text-3xl text-secondary-foreground">Thanks for reading!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}