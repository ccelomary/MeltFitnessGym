import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  text: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, text, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="h-full border-white/60 bg-white/80 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
      <CardHeader>
        <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
