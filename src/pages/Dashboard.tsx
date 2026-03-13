import { Link } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, CalendarCheck, Settings, LogOut, BarChart3, Users } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/tenant";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Resumen", active: true },
  { icon: ShoppingCart, label: "Pedidos" },
  { icon: CalendarCheck, label: "Reservas" },
  { icon: Users, label: "Clientes" },
  { icon: BarChart3, label: "Métricas" },
  { icon: Settings, label: "Config" },
];

const statCards = [
  { label: "Pedidos hoy", value: "—", color: "text-primary" },
  { label: "Reservas hoy", value: "—", color: "text-secondary" },
  { label: "Ingresos (est.)", value: "—", color: "text-foreground" },
  { label: "Clientes activos", value: "—", color: "text-foreground" },
];

const Dashboard = () => (
  <div className="min-h-screen flex bg-background">
    {/* Sidebar */}
    <aside className="hidden md:flex flex-col w-56 border-r border-border bg-card p-4">
      <Link to="/" className="font-mono font-extrabold text-sm mb-8 tracking-tight">
        {AGENCY_CONFIG.name}<span className="text-primary">.</span>
      </Link>

      <nav className="flex-1 space-y-1">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-mono transition-colors ${
              item.active
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <button className="flex items-center gap-3 px-3 py-2.5 text-sm font-mono text-muted-foreground hover:text-destructive transition-colors">
        <LogOut className="w-4 h-4" />
        Salir
      </button>
    </aside>

    {/* Main content */}
    <div className="flex-1 flex flex-col">
      {/* Top bar mobile */}
      <header className="md:hidden flex items-center justify-between px-4 py-4 border-b border-border">
        <Link to="/" className="font-mono font-extrabold text-sm">
          {AGENCY_CONFIG.name}<span className="text-primary">.</span>
        </Link>
        <span className="text-xs font-mono text-muted-foreground">Dashboard</span>
      </header>

      <main className="flex-1 p-4 sm:p-8">
        <h1 className="text-2xl font-mono font-extrabold mb-2">Dashboard</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Panel de administración — conectá tu backend para ver datos reales.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat) => (
            <div key={stat.label} className="p-4 bg-card border border-border">
              <p className="text-xs font-mono text-muted-foreground mb-1">{stat.label}</p>
              <p className={`text-2xl font-mono font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Placeholder panels */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-card border border-border min-h-[200px] flex items-center justify-center">
            <p className="text-sm font-mono text-muted-foreground">[ Últimos pedidos ]</p>
          </div>
          <div className="p-6 bg-card border border-border min-h-[200px] flex items-center justify-center">
            <p className="text-sm font-mono text-muted-foreground">[ Próximas reservas ]</p>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Dashboard;
