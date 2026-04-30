import { landingData } from "@/data/content";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const { footer } = landingData;

  return (
    <footer className="w-full border-t bg-muted/40 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Marca */}
        <div>
          <h3 className="font-bold text-xl mb-4">{footer.brand}</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            {footer.description}
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${footer.contact.email}`} className="hover:text-primary transition-colors">
                {footer.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{footer.contact.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{footer.contact.location}</span>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes / Enlaces */}
        <div>
          <h4 className="font-semibold mb-4">Redes</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footer.socials.map((social) => (
              <li key={social.name}>
                <a href={social.url} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {footer.brand}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}