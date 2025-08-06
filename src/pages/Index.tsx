import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Zap, Building2, Rocket, Brain, Settings, Users, Mail, Phone, Globe, User } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Heytuna.Cloud
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#quienes-somos" className="text-gray-600 hover:text-blue-600 transition-colors">Quiénes Somos</a>
            <a href="#productos" className="text-gray-600 hover:text-blue-600 transition-colors">Productos</a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
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
                  ERP Inteligente y Flexible
                </Badge>
                <h1 className="text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Heytuna.Cloud:
                  </span>
                  <br />
                  tu ERP inteligente y flexible para crecer sin límites
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transformamos la forma en que las PYMES acceden a un sistema de gestión de primer nivel. 
                  Olvídate de las barreras de entrada y las implementaciones lentas.
                </p>
              </div>
              <Button 
                onClick={() => setShowContactForm(true)}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Solicitar Demo
              </Button>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-600 to-green-600 text-white border-0 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <MessageSquare className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold">"HeyTuna, decime mis ventas del mes y cómo se comparan con el año pasado"</h3>
                    <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                      <p className="text-sm opacity-90">Conversación inteligente con tu ERP</p>
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
          <h2 className="text-3xl font-bold mb-8 text-gray-800">¿Quiénes Somos?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            En Heytuna.Cloud, transformamos la forma en que las PYMES acceden a un sistema de gestión de primer nivel. 
            Olvídate de las barreras de entrada, las implementaciones lentas y las soluciones rígidas. 
            Con nosotros, obtendrás un ERP conversacional e inteligente, diseñado para impulsar tu negocio y adaptarse a tus necesidades reales.
          </p>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="quienes-somos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="quienes-somos" className="text-lg py-3">
                <Users className="mr-2 h-5 w-5" />
                Quiénes Somos
              </TabsTrigger>
              <TabsTrigger value="productos" className="text-lg py-3">
                <Settings className="mr-2 h-5 w-5" />
                Productos
              </TabsTrigger>
              <TabsTrigger value="contacto" className="text-lg py-3">
                <Mail className="mr-2 h-5 w-5" />
                Contacto
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quienes-somos" id="quienes-somos">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Nuestra Misión</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    En Heytuna.Cloud, nos dedicamos a eliminar los obstáculos que enfrentan las PYMES en su camino hacia la digitalización. Con Heytuna podés:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">💸</div>
                        <p className="text-sm text-gray-700">
                          Acceder a un ERP completo sin necesidad de elevadas inversiones iniciales.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <p className="text-sm text-gray-700">
                          Implementar rápidamente Odoo con un sistema CORE listo para usar en días, no meses.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">🧩</div>
                        <p className="text-sm text-gray-700">
                          Combinar las ventajas de un sistema estandarizado con personalizaciones específicas.
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
                      1. CORE Odoo: Estandarizado, Modular y Siempre en Evolución
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Hemos desarrollado un sistema base (CORE) de Odoo completo y listo para usar en pocos días. 
                      Este CORE está diseñado para cubrir las funcionalidades esenciales de cualquier empresa.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Reducción de costos futuros</h4>
                        <p className="text-sm text-gray-600">Cada mejora se integra en el CORE, beneficiando a todos.</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Go-to-Market acelerado</h4>
                        <p className="text-sm text-gray-600">Implementa tu ERP en cuestión de días.</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Mejora continua</h4>
                        <p className="text-sm text-gray-600">Siempre actualizado con las últimas funcionalidades.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Brain className="mr-3 h-8 w-8 text-green-600" />
                      2. Conexión AI: Tu ERP Conversacional e Inteligente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Desde el inicio, nuestro sistema está preparado para integrar las últimas capacidades de inteligencia artificial. 
                      Te ofrecemos un ERP que no solo gestiona tus datos, sino que también entiende el contexto.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Zap className="h-5 w-5 text-yellow-500 mt-1" />
                          <p className="text-sm text-gray-600">Conexión directa a fuentes de datos para análisis profundos</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MessageSquare className="h-5 w-5 text-blue-500 mt-1" />
                          <p className="text-sm text-gray-600">Agentes para consultas inteligentes sobre información histórica</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Settings className="h-5 w-5 text-purple-500 mt-1" />
                          <p className="text-sm text-gray-600">Asistencia contextual dentro del mismo Odoo</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Rocket className="h-5 w-5 text-green-500 mt-1" />
                          <p className="text-sm text-gray-600">Modelos de IA específicos para tu negocio</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">3. Personalización Eficiente: A Medida, sin Complicaciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Entendemos que cada negocio es único. Adoptamos un enfoque realista y rentable para la personalización, 
                      identificando tus necesidades críticas desde el inicio y abordándolas como desarrollos específicos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="contacto" id="contacto">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">
                    ¿Listo para Transformar tu Negocio con un ERP Inteligente y Flexible?
                  </CardTitle>
                  <p className="text-lg text-gray-600">
                    Contáctanos hoy mismo y descubre cómo Heytuna.Cloud puede impulsar tu crecimiento.
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
                Solicitar Demo
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
