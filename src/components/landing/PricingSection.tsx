import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PRICING, AGENCY_CONFIG } from "@/config/tenant";

const plans = [
  {
    key: "gastroflow" as const,
    name: "GastroFlow",
    description: "Para hamburgueserías y delivery",
    colorClass: "text-primary",
    borderClass: "border-primary/50",
    bgClass: "bg-primary",
    fgClass: "text-primary-foreground",
    glowClass: "box-glow-green",
    featured: true,
  },
  {
    key: "barbersync" as const,
    name: "BarberSync",
    description: "Para barberías y estudios",
    colorClass: "text-secondary",
    borderClass: "border-secondary/50",
    bgClass: "bg-secondary",
    fgClass: "text-secondary-foreground",
    glowClass: "box-glow-cyan",
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-mono font-extrabold mb-4">
          Precios claros.
        </h2>
        <p className="text-muted-foreground">Sin letra chica. Sin comisiones ocultas.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan, i) => {
          const pricing = PRICING[plan.key];
          const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.whatsapp}?text=Hola!%20Quiero%20contratar%20${plan.name}`;

          return (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-6 sm:p-8 bg-card border ${plan.borderClass} flex flex-col`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-wider">
                  Popular
                </div>
              )}

              <h3 className={`text-lg font-mono font-bold ${plan.colorClass} mb-1`}>
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-foreground">
                  {pricing.price}
                </span>
                <span className="text-muted-foreground text-sm ml-1">
                  {pricing.currency}{pricing.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pricing.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 ${plan.colorClass} flex-shrink-0`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 w-full px-6 py-4 ${plan.bgClass} ${plan.fgClass} font-mono font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity ${plan.glowClass}`}
              >
                Contratar
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default PricingSection;
