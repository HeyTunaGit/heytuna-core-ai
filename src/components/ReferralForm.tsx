import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface Props {
  lang: "es" | "en";
}

const ReferralForm = ({ lang }: Props) => {
  const [data, setData] = useState({
    refNombre: "",
    refTelefono: "",
    esCliente: "no",
    empNombre: "",
    empTelefono: "",
    empEmail: "",
    empWebsite: "",
  });

  const t = lang === "en"
    ? {
      yourData: "Your details",
      name: "Full name *",
      phone: "Phone",
      isClient: "Are you an Odoo client?",
      yes: "Yes",
      no: "No",
      companyData: "Referred company details",
      email: "Email",
      website: "Website",
      submit: "Send referral",
      success: "Referral sent! We will contact you soon.",
    }
    : {
      yourData: "Tus datos",
      name: "Nombre y apellido *",
      phone: "Teléfono",
      isClient: "¿Sos cliente de Odoo?",
      yes: "Sí",
      no: "No",
      companyData: "Datos de la empresa a referir",
      email: "Email",
      website: "Website",
      submit: "Enviar referido",
      success: "¡Referido enviado! Nos contactaremos pronto.",
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.refNombre || !data.empNombre) {
      toast.error(lang === "en" ? "Please complete required fields" : "Por favor completá los campos obligatorios");
      return;
    }
    console.log("Referral:", data);
    toast.success(t.success);
    setData({ refNombre: "", refTelefono: "", esCliente: "no", empNombre: "", empTelefono: "", empEmail: "", empWebsite: "" });
  };

  const set = (k: string, v: string) => setData((p) => ({ ...p, [k]: v }));

  return (
    <form onSubmit={submit} className="space-y-8">
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">{t.yourData}</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="refNombre">{t.name}</Label>
            <Input id="refNombre" value={data.refNombre} onChange={(e) => set("refNombre", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="refTelefono">{t.phone}</Label>
            <Input id="refTelefono" value={data.refTelefono} onChange={(e) => set("refTelefono", e.target.value)} />
          </div>
        </div>
        <div className="space-y-2">
          <Label>{t.isClient}</Label>
          <RadioGroup value={data.esCliente} onValueChange={(v) => set("esCliente", v)} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="si" id="si" />
              <Label htmlFor="si" className="font-normal">{t.yes}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="font-normal">{t.no}</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">{t.companyData}</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="empNombre">{t.name}</Label>
            <Input id="empNombre" value={data.empNombre} onChange={(e) => set("empNombre", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empTelefono">{t.phone}</Label>
            <Input id="empTelefono" value={data.empTelefono} onChange={(e) => set("empTelefono", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empEmail">{t.email}</Label>
            <Input id="empEmail" type="email" value={data.empEmail} onChange={(e) => set("empEmail", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empWebsite">{t.website}</Label>
            <Input id="empWebsite" type="url" value={data.empWebsite} onChange={(e) => set("empWebsite", e.target.value)} />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
        {t.submit}
      </Button>
    </form>
  );
};

export default ReferralForm;
