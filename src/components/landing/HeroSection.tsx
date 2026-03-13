import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/tenant";

const HeroSection = () => {
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.whatsapp}?text=Hola!%20Quiero%20info%20sobre%20sus%20servicios`;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 brutalist-border text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Zap className="w-3 h-3 text-primary" />
            Sistemas digitales sin fricción
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-mono font-extrabold leading-[0.95] mb-6 tracking-tight">
            Tu negocio.
            <br />
            <span className="text-primary text-glow-green">Digital.</span>
            <br />
            <span className="text-secondary text-glow-cyan">Sin vueltas.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 font-sans">
            Pedidos online para hamburgueserías. Reservas para barberías.
            Todo directo a WhatsApp. Sin comisiones. Sin apps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity box-glow-green"
            >
              Ver planes
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 brutalist-border font-mono font-bold text-sm uppercase tracking-wider text-foreground hover:bg-muted transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
