import ContactForm from "./contact-form";
import ContactLinks from "./contact-links";

export default function Contact() {
  return (
    <div id="contact" className="w-full min-h-[calc(100vh-42px)] py-8 flex flex-col items-start justify-start gap-8">
      <h1 className="text-4xl">
        Contact
      </h1>
      <div className="hidden lg:flex flex-row w-full flex-1 gap-8 min-h-0">
        <div className="w-full bg-card border">
          <ContactLinks />
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="flex-1 bg-card border flex flex-col items-center justify-center min-h-0">
            <ContactForm />
          </div>
          <div className="w-full py-10 flex items-center justify-center bg-secondary border shrink-0">
            <h2 className="text-3xl text-secondary-foreground">Thanks for reading!</h2>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex lg:hidden flex-col w-full gap-8">
        <div className="flex flex-row gap-8">
          <div className="w-full bg-card border">
            <ContactLinks />
          </div>
          <div className="w-full bg-card border flex flex-col items-center justify-center">
            <ContactForm />
          </div>
        </div>
        <div className="w-full py-10 flex items-center justify-center bg-secondary border">
          <h2 className="text-3xl text-secondary-foreground">Thanks for reading!</h2>
        </div>
      </div>
      <div className="flex sm:hidden flex-col w-full gap-8">
        <div className="bg-card border">
          <ContactLinks />
        </div>
        <div className="w-full py-10 flex items-center justify-center bg-secondary border">
          <h2 className="text-3xl text-secondary-foreground">Thanks for reading!</h2>
        </div>
      </div>
    </div>
  );
}