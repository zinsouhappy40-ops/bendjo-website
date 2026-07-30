import { buildWhatsAppMessage } from "../../utils/buildWhatsAppMessage";
import type { CartItem } from "../../types/Cart";
import Button from "../ui/Button";

const whatsappNumber = "2290162014161";

interface WhatsAppOrderCTAProps {
  items: CartItem[];
}

function WhatsAppOrderCTA({ items }: WhatsAppOrderCTAProps) {
  const isUnavailable = items.length === 0;

  function handleOrder() {
    if (isUnavailable) return;

    const message = encodeURIComponent(buildWhatsAppMessage(items));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <Button type="button" variant="ink" className="w-full" disabled={isUnavailable} onClick={handleOrder}>
        Commander via WhatsApp
      </Button>
      <p className="mt-3 text-xs leading-5 text-ink/70">
        Votre sélection sera envoyée à BenDjo dans un message WhatsApp.
      </p>
    </div>
  );
}

export default WhatsAppOrderCTA;
