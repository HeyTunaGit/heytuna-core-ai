
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Zap, Building2, Rocket, Brain, Settings, Users, Mail, Phone, Globe, User } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useSearchParams } from "react-router-dom";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState("quienes-somos");
  const [searchParams, setSearchParams] = useSearchParams();
  const langParam = searchParams.get("lang");
  const storedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
  const lang: "es" | "en" = langParam === "en" || langParam === "es" ? (langParam as "es" | "en") : (storedLang === "en" ? "en" : "es");
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);
  const t = (lang === "en"
    ? {
      nav: { inicio: "Home", quienes: "About Us", productos: "Products", contacto: "Contact" },
      cta: "Request Demo",
      modalTitle: "Request Demo",
      hero: {
        badge: "Smart, flexible ERP",
        title2: "your smart, flexible ERP to scale without limits",
        desc: "We transform how SMEs access a top-tier management system. Forget entry barriers and slow implementations.",
        prompt: "“HeyTuna, tell me my sales for this month and how they compare to last year”",
        promptSub: "Intelligent conversation with your ERP"
      },
      about: {
        title: "About Us",
        desc: "At Heytuna.Cloud, we transform how SMEs access a top-tier management system. Forget entry barriers, slow implementations and rigid solutions. Get a conversational, intelligent ERP designed to power your business and adapt to your real needs."
      },
      qs: {
        missionTitle: "Our Mission",
        missionDesc: "At Heytuna.Cloud, we remove the obstacles SMEs face on their path to digitalization. With Heytuna you can:",
        card1: "Access a complete ERP without large upfront investments.",
        card2: "Implement Odoo fast with a ready‑to‑use CORE system in days, not months.",
        card3: "Combine the benefits of a standardized system with specific customizations."
      },
      products: {
        coreTitle: "1. Odoo CORE: Standardized, Modular, and Always Evolving",
        coreDesc: "We have developed a base Odoo system (CORE) that is complete and ready to use in a few days. This CORE is designed to cover the essential functionalities of any company.",
        feature1Title: "Lower future costs",
        feature1Desc: "Every improvement is integrated into the CORE, benefiting everyone.",
        feature2Title: "Accelerated go‑to‑market",
        feature2Desc: "Deploy your ERP in a matter of days.",
        feature3Title: "Continuous improvement",
        feature3Desc: "Always up to date with the latest features.",
        aiTitle: "2. AI Connection: Your Conversational, Intelligent ERP",
        aiDesc: "From day one, our system is ready to integrate the latest AI capabilities. We offer you an ERP that not only manages your data, but also understands the context.",
        aiPoints: [
          "Direct connection to data sources for deep analysis",
          "Agents for smart queries over historical information",
          "Contextual assistance right inside Odoo",
          "AI models tailored to your business"
        ],
        customTitle: "3. Efficient Customization: Tailored without Hassle",
        customDesc: "We know every business is unique. We take a realistic, cost‑effective approach to customization, identifying your critical needs from the start and addressing them as specific developments."
      },
      contact: {
        headerTitle: "Ready to transform your business with a smart, flexible ERP?",
        headerSubtitle: "Contact us today and discover how Heytuna.Cloud can boost your growth."
      }
    }
    : {
      nav: { inicio: "Inicio", quienes: "Quiénes Somos", productos: "Productos", contacto: "Contacto" },
      cta: "Solicitar Demo",
      modalTitle: "Solicitar Demo",
      hero: {
        badge: "ERP Inteligente y Flexible",
        title2: "tu ERP inteligente y flexible para crecer sin límites",
        desc: "Transformamos la forma en que las PYMES acceden a un sistema de gestión de primer nivel. Olvídate de las barreras de entrada y las implementaciones lentas.",
        prompt: "“HeyTuna, decime mis ventas del mes y cómo se comparan con el año pasado”",
        promptSub: "Conversación inteligente con tu ERP"
      },
      about: {
        title: "¿Quiénes Somos?",
        desc: "En Heytuna.Cloud, transformamos la forma en que las PYMES acceden a un sistema de gestión de primer nivel. Olvídate de las barreras de entrada, las implementaciones lentas y las soluciones rígidas. Con nosotros, obtendrás un ERP conversacional e inteligente, diseñado para impulsar tu negocio y adaptarse a tus necesidades reales."
      },
      qs: {
        missionTitle: "Nuestra Misión",
        missionDesc: "En Heytuna.Cloud, nos dedicamos a eliminar los obstáculos que enfrentan las PYMES en su camino hacia la digitalización. Con Heytuna podés:",
        card1: "Acceder a un ERP completo sin necesidad de elevadas inversiones iniciales.",
        card2: "Implementar rápidamente Odoo con un sistema CORE listo para usar en días, no meses.",
        card3: "Combinar las ventajas de un sistema estandarizado con personalizaciones específicas."
      },
      products: {
        coreTitle: "1. CORE Odoo: Estandarizado, Modular y Siempre en Evolución",
        coreDesc: "Hemos desarrollado un sistema base (CORE) de Odoo completo y listo para usar en pocos días. Este CORE está diseñado para cubrir las funcionalidades esenciales de cualquier empresa.",
        feature1Title: "Reducción de costos futuros",
        feature1Desc: "Cada mejora se integra en el CORE, beneficiando a todos.",
        feature2Title: "Go-to-Market acelerado",
        feature2Desc: "Implementa tu ERP en cuestión de días.",
        feature3Title: "Mejora continua",
        feature3Desc: "Siempre actualizado con las últimas funcionalidades.",
        aiTitle: "2. Conexión AI: Tu ERP Conversacional e Inteligente",
        aiDesc: "Desde el inicio, nuestro sistema está preparado para integrar las últimas capacidades de inteligencia artificial. Te ofrecemos un ERP que no solo gestiona tus datos, sino que también entiende el contexto.",
        aiPoints: [
          "Conexión directa a fuentes de datos para análisis profundos",
          "Agentes para consultas inteligentes sobre información histórica",
          "Asistencia contextual dentro del mismo Odoo",
          "Modelos de IA específicos para tu negocio"
        ],
        customTitle: "3. Personalización Eficiente: A Medida, sin Complicaciones",
        customDesc: "Entendemos que cada negocio es único. Adoptamos un enfoque realista y rentable para la personalización, identificando tus necesidades críticas desde el inicio y abordándolas como desarrollos específicos."
      },
      contact: {
        headerTitle: "¿Listo para Transformar tu Negocio con un ERP Inteligente y Flexible?",
        headerSubtitle: "Contáctanos hoy mismo y descubre cómo Heytuna.Cloud puede impulsar tu crecimiento."
      }
    }
  );
  const setLang = (next: "es" | "en") => {
    const sp = new URLSearchParams(searchParams);
    sp.set("lang", next);
    setSearchParams(sp, { replace: true });
    try { localStorage.setItem("lang", next); } catch {}
  };

  const handleNavigation = (section: string) => {
    if (section === "inicio") {
      document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to tabs section and set active tab
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
              <button onClick={() => handleNavigation("productos")} className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.productos}</button>
              <button onClick={() => handleNavigation("contacto")} className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.contacto}</button>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="p-2 rounded-full hover:bg-accent"
                  aria-label={lang === "en" ? "Change language" : "Cambiar idioma"}
                >
                  <Globe className="h-5 w-5 text-gray-600" />
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-40">
                <div className="flex flex-col">
                  <button onClick={() => setLang("es")} className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-accent" aria-label="Español">
                    <span>Español</span>
                    <span>🇪🇸</span>
                  </button>
                  <button onClick={() => setLang("en")} className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-accent" aria-label="English">
                    <span>English</span>
                    <span>🇬🇧</span>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-4 py-2">
                  {t.hero.badge}
                </Badge>
                <h1 className="text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Heytuna.Cloud:
                  </span>
                  <br />
                  {t.hero.title2}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t.hero.desc}
                </p>
              </div>
              <Button 
                onClick={() => setShowContactForm(true)}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                {t.cta}
              </Button>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-600 to-green-600 text-white border-0 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <MessageSquare className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold">{t.hero.prompt}</h3>
                    <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                      <p className="text-sm opacity-90">{t.hero.promptSub}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">{t.about.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t.about.desc}
          </p>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section id="main-tabs" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="quienes-somos" className="text-lg py-3">
                <Users className="mr-2 h-5 w-5" />
                {t.nav.quienes}
              </TabsTrigger>
              <TabsTrigger value="productos" className="text-lg py-3">
                <Settings className="mr-2 h-5 w-5" />
                {t.nav.productos}
              </TabsTrigger>
              <TabsTrigger value="contacto" className="text-lg py-3">
                <Mail className="mr-2 h-5 w-5" />
                {t.nav.contacto}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quienes-somos" id="quienes-somos">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">{t.qs.missionTitle}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {t.qs.missionDesc}
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">💸</div>
                        <p className="text-sm text-gray-700">
                          {t.qs.card1}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <p className="text-sm text-gray-700">
                          {t.qs.card2}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">🧩</div>
                        <p className="text-sm text-gray-700">
                          {t.qs.card3}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="productos" id="productos">
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Building2 className="mr-3 h-8 w-8 text-blue-600" />
                      {t.products.coreTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {t.products.coreDesc}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">{t.products.feature1Title}</h4>
                        <p className="text-sm text-gray-600">{t.products.feature1Desc}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">{t.products.feature2Title}</h4>
                        <p className="text-sm text-gray-600">{t.products.feature2Desc}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">{t.products.feature3Title}</h4>
                        <p className="text-sm text-gray-600">{t.products.feature3Desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Brain className="mr-3 h-8 w-8 text-green-600" />
                      {t.products.aiTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {t.products.aiDesc}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Zap className="h-5 w-5 text-yellow-500 mt-1" />
                          <p className="text-sm text-gray-600">{t.products.aiPoints[0]}</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MessageSquare className="h-5 w-5 text-blue-500 mt-1" />
                          <p className="text-sm text-gray-600">{t.products.aiPoints[1]}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Settings className="h-5 w-5 text-purple-500 mt-1" />
                          <p className="text-sm text-gray-600">{t.products.aiPoints[2]}</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Rocket className="h-5 w-5 text-green-500 mt-1" />
                          <p className="text-sm text-gray-600">{t.products.aiPoints[3]}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">{t.products.customTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {t.products.customDesc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="contacto" id="contacto">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">
                    {t.contact.headerTitle}
                  </CardTitle>
                  <p className="text-lg text-gray-600">
                    {t.contact.headerSubtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {t.modalTitle}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowContactForm(false)}
                >
                  ✕
                </Button>
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
