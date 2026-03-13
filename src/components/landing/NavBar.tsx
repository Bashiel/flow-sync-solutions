import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { AGENCY_CONFIG } from "@/config/tenant";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="font-mono font-extrabold text-lg tracking-tight">
          {AGENCY_CONFIG.name}<span className="text-primary">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-mono">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Servicios</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Precios</a>
          <Link to="/dashboard" className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
            Dashboard
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="sm:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-border bg-background px-4 py-4 space-y-3 font-mono text-sm">
          <a href="#services" onClick={() => setOpen(false)} className="block text-muted-foreground">Servicios</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block text-muted-foreground">Precios</a>
          <Link to="/dashboard" onClick={() => setOpen(false)} className="block text-primary font-bold">Dashboard →</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
