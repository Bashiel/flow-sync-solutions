import { motion } from "framer-motion";
import { ShoppingCart, CalendarCheck, MessageCircle, Smartphone } from "lucide-react";

const services = [
  {
    title: "GastroFlow",
    subtitle: "Pedidos online para hamburgueserías",
    color: "primary" as const,
    glowClass: "box-glow-green",
    textGlow: "text-glow-green",
    icon: ShoppingCart,
    steps: [
      { icon: Smartphone, text: "Tu cliente ve el menú" },
      { icon: ShoppingCart, text: "Arma su pedido" },
      { icon: MessageCircle, text: "Lo recibís en WhatsApp" },
    ],
  },
  {
    title: "BarberSync",
    subtitle: "Reservas online para barberías",
    color: "secondary" as const,
    glowClass: "box-glow-cyan",
    textGlow: "text-glow-cyan",
    icon: CalendarCheck,
    steps: [
      { icon: Smartphone, text: "Tu cliente ve tu perfil" },
      { icon: CalendarCheck, text: "Elige fecha y hora" },
      { icon: MessageCircle, text: "Te llega por WhatsApp" },
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-mono font-extrabold text-center mb-16"
      >
        Dos productos.
        <br />
        <span className="text-muted-foreground">Un sistema.</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`p-6 sm:p-8 bg-card border border-border hover:${svc.glowClass} transition-shadow`}
          >
            <div className="flex items-center gap-3 mb-4">
              <svc.icon className={`w-6 h-6 text-${svc.color}`} />
              <h3 className={`text-xl font-mono font-bold text-${svc.color} ${svc.textGlow}`}>
                {svc.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm mb-8">{svc.subtitle}</p>

            <div className="space-y-4">
              {svc.steps.map((step, j) => (
                <div key={j} className="flex items-center gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center border border-${svc.color}/30 bg-${svc.color}/5`}>
                    <step.icon className={`w-4 h-4 text-${svc.color}`} />
                  </div>
                  <span className="text-sm font-mono">{step.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
