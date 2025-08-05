"use client";

import { Mail, Linkedin, Instagram, FileDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-8 md:py-6 w-full overflow-x-hidden">
      <div className="flex flex-col items-center gap-8 text-center w-full max-w-[100vw]">
        <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
        <p className="mx-auto max-w-md text-base text-muted-foreground md:max-w-2xl md:text-lg">
          Thanks for taking the time to look at my portfolio! Feel free to reach
          out to me.
        </p>

        <div className="flex flex-col gap-4 w-full max-w-sm md:flex-row md:max-w-2xl md:justify-center">
          <a
            href="mailto:nikith290699@gmail.com"
            className="w-full md:w-auto"
          >
            <Button
              variant="outline"
              className="w-full md:w-auto flex gap-2 justify-center"
            >
              <Mail size={16} />
              Email Me
            </Button>
          </a>
          <a href="tel:+17736696575" className="w-full md:w-auto">
            <Button
              variant="outline"
              className="w-full md:w-auto flex gap-2 justify-center"
            >
              <Phone size={16} />
              Call Me
            </Button>
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/sri-nikith-11b92036a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMfc6qz3aQD%2BgHMOu%2BzHw3Q%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://docs.google.com/document/d/1tK90mcSDkPn76ivYgHqZs10m34MKvE7w/edit?usp=drive_link&ouid=112370990940083133449&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FileDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
