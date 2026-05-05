
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
    empleados: "",
    mensaje: "",
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

    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      website: "",
      empleados: "",
      mensaje: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre *</Label>
              <Input id="nombre" value={formData.nombre} onChange={(e) => handleInputChange("nombre", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellido">Apellido *</Label>
              <Input id="apellido" value={formData.apellido} onChange={(e) => handleInputChange("apellido", e.target.value)} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="pl-10" placeholder="tu@empresa.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono *</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="telefono" type="tel" value={formData.telefono} onChange={(e) => handleInputChange("telefono", e.target.value)} className="pl-10" placeholder="11 1234-5678" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website *</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="website" type="url" value={formData.website} onChange={(e) => handleInputChange("website", e.target.value)} required className="pl-10" placeholder="https://tuempresa.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="empleados">Número de Empleados</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Select value={formData.empleados} onValueChange={(value) => handleInputChange("empleados", value)}>
                <SelectTrigger className="pl-10">
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

          <div className="space-y-2">
            <Label htmlFor="mensaje">Mensaje</Label>
            <Textarea
              id="mensaje"
              value={formData.mensaje}
              onChange={(e) => handleInputChange("mensaje", e.target.value)}
              rows={4}
              className="text-gray-500 placeholder:text-gray-400"
              placeholder="¿Qué es lo que más complica en la operación? ¿Tienen un sistema implementado?"
            />
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
