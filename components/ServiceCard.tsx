import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  text: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, text, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="h-full border-white/10 bg-[#0f1422] transition hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_40px_rgba(227,28,44,0.25)]">
      <CardHeader>
        <div className="mb-4 inline-flex rounded-md bg-primary/20 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="uppercase text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-300">{text}</p>
      </CardContent>
    </Card>
  );
}
