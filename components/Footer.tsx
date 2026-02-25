import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#070a11] py-12 text-slate-200">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-black uppercase text-white">Melt Fitness Gym</h3>
          <p className="mt-3 text-sm text-slate-300">United Arab Emirates · Built for serious transformations.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-secondary" /> +971 XX XXX XXXX</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> info@meltfitnessgym.com</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> Dubai, UAE</p>
        </div>
        <div className="flex items-start gap-4">
          <a aria-label="Instagram" href="#" className="rounded-md bg-white/10 p-3 transition hover:bg-primary"><InstagramLogoIcon /></a>
          <a aria-label="LinkedIn" href="#" className="rounded-md bg-white/10 p-3 transition hover:bg-secondary hover:text-black"><LinkedInLogoIcon /></a>
        </div>
      </div>
    </footer>
  );
}
