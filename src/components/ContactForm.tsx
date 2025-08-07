
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, Globe, Users } from "lucide-react";

interface ContactFormProps {
  onClose?: () => void;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    website: "",
    empleados: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.website) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("¡Solicitud de demo enviada exitosamente! Nos contactaremos contigo pronto.");
    
    if (onClose) {
      onClose();
    }

    // Reset form
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      website: "",
      empleados: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre *</Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => handleInputChange("nombre", e.target.value)}
                required
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellido">Apellido *</Label>
              <Input
                id="apellido"
                value={formData.apellido}
                onChange={(e) => handleInputChange("apellido", e.target.value)}
                required
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="pl-10 border-gray-300 focus:border-blue-500"
                placeholder="tu@empresa.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono (opcional)</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="telefono"
                type="tel"
                value={formData.telefono}
                onChange={(e) => handleInputChange("telefono", e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500"
                placeholder="11 1234-5678"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website *</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                required
                className="pl-10 border-gray-300 focus:border-blue-500"
                placeholder="https://tuempresa.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="empleados">Número de Empleados (opcional)</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Select value={formData.empleados} onValueChange={(value) => handleInputChange("empleados", value)}>
                <SelectTrigger className="pl-10 border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="Selecciona el tamaño de tu empresa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 empleados</SelectItem>
                  <SelectItem value="11-50">11-50 empleados</SelectItem>
                  <SelectItem value="51-200">51-200 empleados</SelectItem>
                  <SelectItem value="201-500">201-500 empleados</SelectItem>
                  <SelectItem value="500+">Más de 500 empleados</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Solicitar Demo Gratuita
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
