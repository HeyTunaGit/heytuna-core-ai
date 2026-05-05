import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  MessageSquare, Building2, Users, Mail, Globe, Boxes, Layers, Sparkles, Monitor,
  ShoppingBag, Hammer, Briefcase, Truck, Gift, CheckCircle2, HandHeart,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ReferralForm from "@/components/ReferralForm";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useSearchParams } from "react-router-dom";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState("contacto");
  const [searchParams, setSearchParams] = useSearchParams();
  const langParam = searchParams.get("lang");
  const storedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
  const lang: "es" | "en" =
    langParam === "en" || langParam === "es"
      ? (langParam as "es" | "en")
      : storedLang === "en"
      ? "en"
      : "es";

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const t = lang === "en"
    ? {
      nav: { inicio: "Home", quienes: "About Us", industrias: "Industries", referidos: "Referrals", contacto: "Free Odoo Trial" },
      cta: "Request Demo",
      modalTitle: "Request Demo",
      hero: {
        badge: "Official Odoo Partner",
        title1: "HeyTuna —",
        title2: "Official Odoo Partners",
        desc: "Odoo experts passionate about the growth of SMEs. We are a senior technical and functional team, also SME owners and Odoo users—we get the complexity of Argentina.",
        bullets: [
          "We adapt Odoo to your needs",
          "We use AI in every aspect of the implementation",
          "We support you through growth and business changes",
          "We are your local support",
          "We won't let go of your hand",
          "Flexible and transparent",
        ],
      },
      odoo: {
        title: "What is Odoo?",
        desc: "Odoo is an integral management system for companies, designed to cover every need of your business — from sales and inventory to accounting and HR.",
        f1t: "Modular", f1d: "Activate only what you need, when you need it.",
        f2t: "Total Integration", f2d: "All your areas connected in a single platform.",
        f3t: "Customization", f3d: "Adapts to the way your company really works.",
        f4t: "Modern Interface", f4d: "Intuitive UX so your team adopts it from day one.",
        oneStopTitle: "From single-purpose software…",
        oneStopDesc: "(Each line is a connector that costs you time)",
        allInOne: "…to one all-in-one solution!",
        tags: ["Integrated apps", "Intuitive", "Scalable"],
      },
      about: {
        title: "About Us",
        p1: "HeyTuna is an Official Odoo Partner specialized in ERP implementations for commercial and distribution companies in Argentina. Our methodology is designed to ensure operational continuity during the transition, minimize risks, and achieve real adoption from the first go-live.",
        p2: "Implementing an ERP is not a tech project; it's a critical operational decision. Most failures don't come from the tool, but from execution. At HeyTuna we partner with businesses that need full continuity and can't pause their growth—that's the premise of our methodology.",
        cta: "Want to boost your operation with Odoo? Request a Demo.",
      },
      ind: {
        title: "Industries we specialize in",
        cols: ["Use Case", "Key Modules", "Critical Functionality", "KPI Impacted"],
        items: [
          {
            name: "Retail", icon: ShoppingBag,
            rows: [
              ["Omnichannel Sales", "Sales, eCommerce, Inventory", "Real-time stock sync between physical stores, warehouse and web.", "Total Sales"],
              ["Customer Loyalty", "CRM, Marketing, Loyalty", "Lead/customer management, rewards programs, personalized coupons and audience segmentation.", "Retention (LTV)"],
              ["Inventory Management", "Purchasing, Inventory", "Dashboards and intelligence for purchasing, replenishment and channel-based distribution.", "Inventory Turnover"],
            ],
          },
          {
            name: "Construction & Manufacturing", icon: Hammer,
            rows: [
              ["Discrete Production", "Manufacturing (MRP), PLM, Quality", "Multilevel BoM management and real-time work orders.", "OEE (Overall Effectiveness)"],
              ["Asset Maintenance", "Maintenance, IoT, Fleet", "Preventive maintenance based on operating hours or IoT cycles.", "Downtime"],
              ["Engineer-to-Order", "Sales, Projects, PLM", "Direct link between engineering drawings and warehouse supplies.", "Delivery Lead Time"],
            ],
          },
          {
            name: "Professional Services", icon: Briefcase,
            rows: [
              ["Project Management", "Projects, Timesheets", "Profitability control per project and milestone tracking.", "Billable Utilization"],
              ["Customer Support", "Helpdesk, Documents", "External ticket management linked to SLAs.", "SLA Compliance"],
              ["Service Sales", "Sales, Subscriptions", "Recurring billing automation for maintenance or advisory services.", "MRR / Churn"],
            ],
          },
          {
            name: "Distribution & Logistics", icon: Truck,
            rows: [
              ["Warehouse Management (WMS)", "Inventory, Barcode", "Picking route optimization, scan receiving and cross-docking.", "Picking Speed"],
              ["Multi-warehouse Distribution", "Inventory, Purchasing", "Push/Pull rules to move goods between centers.", "Fill Rate"],
              ["Lot Traceability", "Inventory, Purchasing", "Full lot and serial number tracking for recalls or warranties.", "Stock Accuracy"],
            ],
          },
        ],
      },
      ref: {
        title: "Referral Program",
        desc: "Refer a company that needs a management system and earn up to 5% of the implementation value.",
      },
      contact: {
        headerTitle: "Ready to transform your business with a smart, flexible ERP?",
        headerSubtitle: "Contact us today and discover how HeyTuna can boost your growth.",
      },
    }
    : {
      nav: { inicio: "Inicio", quienes: "Quiénes Somos", industrias: "Industrias", referidos: "Referidos", contacto: "Prueba Gratis Odoo" },
      cta: "Solicitar Demo",
      modalTitle: "Solicitar Demo",
      hero: {
        badge: "Partner Oficial de Odoo",
        title1: "HeyTuna —",
        title2: "Partners Oficiales de Odoo",
        desc: "Expertos en Odoo apasionados por el crecimiento de las PyMEs. Somos un equipo técnico y funcional senior, también dueños de pymes y usuarios de Odoo: entendemos la complejidad de Argentina.",
        bullets: [
          "Adaptamos Odoo a tus necesidades",
          "Utilizamos IA en todos los aspectos de la implementación",
          "Te acompañamos en el crecimiento y en los cambios del negocio",
          "Somos tu soporte local",
          "No te soltamos la mano",
          "Somos flexibles y transparentes",
        ],
      },
      odoo: {
        title: "¿Qué es Odoo?",
        desc: "Odoo es un sistema de gestión integral para empresas diseñado para cubrir todas las necesidades de una compañía, desde las ventas y el inventario hasta la contabilidad y los recursos humanos.",
        f1t: "Modular", f1d: "Activá solo lo que necesitás, cuando lo necesitás.",
        f2t: "Integración Total", f2d: "Todas tus áreas conectadas en una sola plataforma.",
        f3t: "Personalización", f3d: "Se adapta a cómo realmente trabaja tu empresa.",
        f4t: "Interfaz Moderna", f4d: "UX intuitiva para que tu equipo lo adopte desde el día uno.",
        oneStopTitle: "De un software de un solo uso…",
        oneStopDesc: "(Cada línea representa un conector que consume tiempo)",
        allInOne: "¡A una solución todo en uno!",
        tags: ["Aplicaciones integradas", "Intuitivo", "Escalable"],
      },
      about: {
        title: "Quiénes Somos",
        p1: "HeyTuna es Partner Oficial de Odoo con especialización en implementaciones ERP para empresas comerciales y de distribución en Argentina. Nuestra metodología está diseñada para asegurar la continuidad operativa del negocio durante la transición, minimizar riesgos y lograr una adopción real del sistema desde el primer go-live.",
        p2: "Implementar un ERP no es un proyecto tecnológico; es una decisión operativa crítica. Gran parte de los fracasos no radican en la herramienta, sino en su ejecución. En HeyTuna acompañamos a negocios que requieren continuidad total y no pueden pausar su crecimiento — esa es la premisa de nuestra metodología.",
        cta: "¿Buscás potenciar tu operación con Odoo? Solicitá una Demo.",
      },
      ind: {
        title: "Industrias en las que nos especializamos",
        cols: ["Caso de Uso", "Módulos Clave", "Funcionalidad Crítica", "KPI Impactado"],
        items: [
          {
            name: "Retail", icon: ShoppingBag,
            rows: [
              ["Venta Omnicanal", "Ventas, eCommerce, Inventario", "Sincronización de stock en tiempo real entre tiendas físicas, almacén y web.", "Ventas Totales"],
              ["Fidelización de Clientes", "CRM, Marketing, Lealtad", "Gestión de prospectos, clientes, programas de recompensas, cupones personalizados y segmentación.", "Retención (LTV)"],
              ["Gestión de Inventario", "Compras, Inventario", "Paneles e inteligencia para compras, reposiciones y distribución por canales.", "Inventory Turnover"],
            ],
          },
          {
            name: "Construcción y Manufactura", icon: Hammer,
            rows: [
              ["Producción Discreta", "Fabricación (MRP), PLM, Calidad", "Gestión de Listas de Materiales (BoM) multinivel y órdenes de trabajo en tiempo real.", "OEE (Efectividad Global)"],
              ["Mantenimiento de Activos", "Mantenimiento, IoT, Flota", "Mantenimiento preventivo basado en horas de funcionamiento o ciclos IoT.", "Tiempo de Inactividad"],
              ["Ingeniería a Pedido", "Ventas, Proyectos, PLM", "Vínculo directo entre planos de ingeniería y suministros de almacén.", "Lead Time de Entrega"],
            ],
          },
          {
            name: "Servicios Profesionales", icon: Briefcase,
            rows: [
              ["Gestión de Proyectos", "Proyectos, Partes de Horas", "Control de rentabilidad por proyecto y seguimiento de hitos de entrega.", "Utilización Facturable"],
              ["Soporte al Cliente", "Helpdesk, Documentos", "Gestión de tickets vinculados a SLAs.", "SLA Compliance"],
              ["Venta de Servicios", "Ventas, Suscripciones", "Automatización de facturación recurrente por mantenimiento o asesoría.", "MRR / Churn"],
            ],
          },
          {
            name: "Distribución y Logística", icon: Truck,
            rows: [
              ["Gestión de Almacén (WMS)", "Inventario, Código de Barras", "Optimización de rutas de picking, recepción por escaneo y cross-docking.", "Picking Speed"],
              ["Distribución Multidepósito", "Inventario, Compras", "Reglas Push/Pull para mover mercadería entre centros.", "Fill Rate"],
              ["Trazabilidad de Lotes", "Inventario, Compras", "Seguimiento total de lotes y números de serie para recall o garantías.", "Precisión de Stock"],
            ],
          },
        ],
      },
      ref: {
        title: "Programa de Referidos",
        desc: "Referí a una empresa amiga que necesite un sistema de gestión y llevate hasta el 5% del valor de la implementación.",
      },
      contact: {
        headerTitle: "¿Listo para transformar tu negocio con un ERP inteligente y flexible?",
        headerSubtitle: "Contáctanos hoy mismo y descubre cómo HeyTuna puede impulsar tu crecimiento.",
      },
    };

  const setLang = (next: "es" | "en") => {
    const sp = new URLSearchParams(searchParams);
    sp.set("lang", next);
    setSearchParams(sp, { replace: true });
    try { localStorage.setItem("lang", next); } catch {}
  };

  const handleNavigation = (section: string) => {
    if (section === "inicio") {
      document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "que-es-odoo") {
      document.getElementById("que-es-odoo")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("main-tabs")?.scrollIntoView({ behavior: "smooth" });
      setActiveTab(section);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Heytuna.Cloud
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex space-x-6">
              <button onClick={() => handleNavigation("inicio")} className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.inicio}</button>
              <button onClick={() => handleNavigation("quienes-somos")} className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.quienes}</button>
              <button onClick={() => handleNavigation("industrias")} className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.industrias}</button>
              <button onClick={() => handleNavigation("referidos")} className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.referidos}</button>
              <button onClick={() => handleNavigation("contacto")} className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.contacto}</button>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-2 rounded-full hover:bg-accent" aria-label={lang === "en" ? "Change language" : "Cambiar idioma"}>
                  <Globe className="h-5 w-5 text-gray-600" />
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-40">
                <div className="flex flex-col">
                  <button onClick={() => setLang("es")} className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-accent" aria-label="Español">
                    <span>Español</span><span>🇪🇸</span>
                  </button>
                  <button onClick={() => setLang("en")} className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-accent" aria-label="English">
                    <span>English</span><span>🇬🇧</span>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-4 py-2">
                {t.hero.badge}
              </Badge>
              <h1 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {t.hero.title1}
                </span>
                <br />
                {t.hero.title2}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">{t.hero.desc}</p>
              <Button
                onClick={() => setShowContactForm(true)}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                {t.cta}
              </Button>
            </div>
            <Card className="bg-gradient-to-br from-blue-600 to-green-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8 space-y-3">
                {t.hero.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                    <p className="text-base">{b}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qué es Odoo */}
      <section id="que-es-odoo" className="py-16 px-4 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.odoo.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.odoo.desc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { i: Boxes, t: t.odoo.f1t, d: t.odoo.f1d, c: "blue" },
              { i: Layers, t: t.odoo.f2t, d: t.odoo.f2d, c: "green" },
              { i: Sparkles, t: t.odoo.f3t, d: t.odoo.f3d, c: "purple" },
              { i: Monitor, t: t.odoo.f4t, d: t.odoo.f4d, c: "orange" },
            ].map(({ i: Icon, t: title, d, c }) => (
              <Card key={title} className="border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center bg-${c}-100`}>
                    <Icon className={`h-6 w-6 text-${c}-600`} />
                  </div>
                  <h3 className="font-semibold text-gray-800">{title}</h3>
                  <p className="text-sm text-gray-600">{d}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">{t.odoo.oneStopTitle}</h4>
                <p className="text-sm text-gray-500 italic">{t.odoo.oneStopDesc}</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-green-600 text-white">
              <CardContent className="p-8 text-center space-y-4">
                <h4 className="font-bold text-xl">{t.odoo.allInOne}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {t.odoo.tags.map((tag) => (
                    <Badge key={tag} className="bg-white/20 hover:bg-white/30 text-white border-0">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section id="main-tabs" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
              <TabsTrigger value="quienes-somos" className="text-base py-3">
                <Users className="mr-2 h-4 w-4" />
                {t.nav.quienes}
              </TabsTrigger>
              <TabsTrigger value="industrias" className="text-base py-3">
                <Building2 className="mr-2 h-4 w-4" />
                {t.nav.industrias}
              </TabsTrigger>
              <TabsTrigger value="referidos" className="text-base py-3">
                <Gift className="mr-2 h-4 w-4" />
                {t.nav.referidos}
              </TabsTrigger>
              <TabsTrigger
                value="contacto"
                className="text-base py-3 data-[state=active]:bg-blue-900 data-[state=active]:text-white data-[state=inactive]:text-blue-900 hover:text-blue-900"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t.nav.contacto}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quienes-somos" id="quienes-somos">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <HandHeart className="h-7 w-7 text-blue-600" />
                    {t.about.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{t.about.p1}</p>
                  <p className="text-gray-700 leading-relaxed">{t.about.p2}</p>
                  <div className="pt-4">
                    <Button
                      onClick={() => setShowContactForm(true)}
                      className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      {t.about.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="industrias" id="industrias">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">{t.ind.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-10">
                  {t.ind.items.map(({ name, icon: Icon, rows }) => (
                    <div key={name} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                      </div>
                      <div className="overflow-x-auto rounded-lg border">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-blue-50">
                              {t.ind.cols.map((c) => (
                                <TableHead key={c} className="font-semibold text-gray-700">{c}</TableHead>
                              ))}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {rows.map((r, i) => (
                              <TableRow key={i}>
                                <TableCell className="font-medium">{r[0]}</TableCell>
                                <TableCell>{r[1]}</TableCell>
                                <TableCell className="text-sm text-gray-600">{r[2]}</TableCell>
                                <TableCell><Badge variant="secondary" className="bg-green-100 text-green-700">{r[3]}</Badge></TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="referidos" id="referidos">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Gift className="h-7 w-7 text-green-600" />
                    {t.ref.title}
                  </CardTitle>
                  <p className="text-gray-600 mt-2">{t.ref.desc}</p>
                </CardHeader>
                <CardContent>
                  <ReferralForm lang={lang} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contacto" id="contacto">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">{t.contact.headerTitle}</CardTitle>
                  <p className="text-lg text-gray-600">{t.contact.headerSubtitle}</p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <Card className="w-full max-w-lg my-8">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {t.modalTitle}
                <Button variant="ghost" size="sm" onClick={() => setShowContactForm(false)}>✕</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm onClose={() => setShowContactForm(false)} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
