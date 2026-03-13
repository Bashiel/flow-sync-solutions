import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  ChefHat,
  Settings,
  LogOut,
  Menu,
  X,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Pencil,
} from "lucide-react";
import { AGENCY_CONFIG } from "@/config/tenant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

// ── Types ──
type Section = "metricas" | "menu" | "config";

// ── Mock data ──
const weekSales = [
  { day: "Lun", ventas: 42000 },
  { day: "Mar", ventas: 58000 },
  { day: "Mié", ventas: 35000 },
  { day: "Jue", ventas: 72000 },
  { day: "Vie", ventas: 98000 },
  { day: "Sáb", ventas: 150000 },
  { day: "Dom", ventas: 120000 },
];

const chartConfig = {
  ventas: { label: "Ventas", color: "hsl(var(--primary))" },
};

const initialProducts = [
  { id: 1, name: "Smash Doble", price: 6500, active: true },
  { id: 2, name: "Papas Cheddar & Bacon", price: 4200, active: true },
  { id: 3, name: "Gaseosa 500ml", price: 2000, active: false },
];

const sidebarNav: { icon: typeof BarChart3; label: string; section: Section }[] = [
  { icon: BarChart3, label: "Métricas", section: "metricas" },
  { icon: ChefHat, label: "Mi Menú", section: "menu" },
  { icon: Settings, label: "Configuración", section: "config" },
];

// ── Sub-views ──

function MetricasView() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Ventas del Día
            </CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-mono font-extrabold text-primary text-glow-green">
              $150.000
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-primary" /> +12% vs ayer
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Pedidos Hoy
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-mono font-extrabold text-secondary text-glow-cyan">
              24
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-secondary" /> +8% vs ayer
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Ticket Promedio
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-mono font-extrabold text-foreground">
              $6.250
            </p>
            <p className="text-xs text-muted-foreground mt-1">Basado en 24 pedidos</p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly chart */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            Ventas de la Semana
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[260px] w-full">
            <BarChart data={weekSales} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12, fontFamily: "JetBrains Mono" }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11, fontFamily: "JetBrains Mono" }}
                width={50}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value) => `$${Number(value).toLocaleString("es-AR")}`}
                  />
                }
              />
              <Bar dataKey="ventas" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}

function MenuView() {
  const [products, setProducts] = useState(initialProducts);

  const toggleActive = (id: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-mono font-bold">Mi Menú</h2>
        <Button size="sm" className="font-mono text-xs">
          + Agregar producto
        </Button>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {products.map((p) => (
          <Card key={p.id} className="border-border bg-card">
            <CardContent className="p-4 flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="font-mono font-bold text-sm truncate">{p.name}</p>
                <p className="font-mono text-primary text-sm">${p.price.toLocaleString("es-AR")}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Pencil className="h-3.5 w-3.5" />
                </Button>
                <Switch checked={p.active} onCheckedChange={() => toggleActive(p.id)} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop table */}
      <Card className="border-border bg-card hidden md:block">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="font-mono text-xs uppercase tracking-wider">Producto</TableHead>
              <TableHead className="font-mono text-xs uppercase tracking-wider">Precio</TableHead>
              <TableHead className="font-mono text-xs uppercase tracking-wider text-center">Estado</TableHead>
              <TableHead className="font-mono text-xs uppercase tracking-wider text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id} className="border-border">
                <TableCell className="font-mono font-medium">{p.name}</TableCell>
                <TableCell className="font-mono text-primary">
                  ${p.price.toLocaleString("es-AR")}
                </TableCell>
                <TableCell className="text-center">
                  <Switch checked={p.active} onCheckedChange={() => toggleActive(p.id)} />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="font-mono text-xs gap-1.5">
                    <Pencil className="h-3 w-3" /> Editar Precio
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function ConfigView() {
  return (
    <div className="space-y-6 max-w-lg">
      <h2 className="text-lg font-mono font-bold">Configuración del Local</h2>

      <Card className="border-border bg-card">
        <CardContent className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="logo" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              URL del Logo
            </Label>
            <Input
              id="logo"
              placeholder="https://mi-logo.com/logo.png"
              defaultValue=""
              className="font-mono text-sm bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              WhatsApp para Pedidos
            </Label>
            <Input
              id="whatsapp"
              placeholder="5491123456789"
              defaultValue="5491198765432"
              className="font-mono text-sm bg-background"
            />
            <p className="text-xs text-muted-foreground">Código de país + número, sin espacios ni guiones.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="storename" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Nombre del Local
            </Label>
            <Input
              id="storename"
              placeholder="Mi Burguesería"
              defaultValue="Smash House"
              className="font-mono text-sm bg-background"
            />
          </div>

          <Button className="w-full font-mono text-sm">Guardar Cambios</Button>
        </CardContent>
      </Card>
    </div>
  );
}

// ── Main Dashboard ──

const Dashboard = () => {
  const [section, setSection] = useState<Section>("metricas");
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderSection = () => {
    switch (section) {
      case "metricas":
        return <MetricasView />;
      case "menu":
        return <MenuView />;
      case "config":
        return <ConfigView />;
    }
  };

  const handleNav = (s: Section) => {
    setSection(s);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-56 border-r border-border bg-card p-4 shrink-0">
        <Link to="/" className="font-mono font-extrabold text-sm mb-8 tracking-tight">
          {AGENCY_CONFIG.name}<span className="text-primary">.</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {sidebarNav.map((item) => (
            <button
              key={item.section}
              onClick={() => setSection(item.section)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-mono transition-colors ${
                section === item.section
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 text-sm font-mono text-muted-foreground hover:text-destructive transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Salir
        </Link>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-card border-r border-border p-4 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="font-mono font-extrabold text-sm tracking-tight">
                {AGENCY_CONFIG.name}<span className="text-primary">.</span>
              </Link>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <nav className="flex-1 space-y-1">
              {sidebarNav.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNav(item.section)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-mono transition-colors ${
                    section === item.section
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-mono text-muted-foreground hover:text-destructive transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Salir
            </Link>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <button className="md:hidden" onClick={() => setMobileOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-sm font-mono font-bold uppercase tracking-wider">
              {sidebarNav.find((i) => i.section === section)?.label}
            </h1>
          </div>
          <span className="text-xs font-mono text-muted-foreground hidden sm:block">
            GastroFlow · Smash House
          </span>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
