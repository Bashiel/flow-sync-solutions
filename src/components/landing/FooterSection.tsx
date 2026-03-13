import { AGENCY_CONFIG } from "@/config/tenant";

const FooterSection = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
      <span className="font-bold text-foreground">{AGENCY_CONFIG.name}</span>
      <span>{AGENCY_CONFIG.tagline}</span>
      <a
        href={`https://wa.me/${AGENCY_CONFIG.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        WhatsApp →
      </a>
    </div>
  </footer>
);

export default FooterSection;
