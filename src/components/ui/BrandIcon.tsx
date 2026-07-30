import type { SVGProps } from "react";
import { Leaf, FlowerLotus, Coffee } from "@phosphor-icons/react";

export type BrandIconName = "leaf" | "hibiscus" | "cup" | "grain";

interface BrandIconProps extends SVGProps<SVGSVGElement> {
  name: BrandIconName;
}

// Decision 009 (MEMORY/DECISIONS.md) : Phosphor Icons, graisse "Thin" exclusivement.
// Aucune icône hibiscus dédiée n'existe chez Phosphor — FlowerLotus utilisée en
// substitut assumé. "grain" (céréale) n'a pas d'équivalent dédié non plus : Leaf
// réutilisée par cohérence plutôt que d'introduire une icône hors sujet.
const icons = {
  leaf: Leaf,
  hibiscus: FlowerLotus,
  cup: Coffee,
  grain: Leaf,
} as const;

function BrandIcon({ name, ...props }: BrandIconProps) {
  const Icon = icons[name];
  return <Icon weight="thin" {...props} />;
}

export default BrandIcon;
