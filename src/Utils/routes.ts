import { ElementType } from "react";

import { House, Signpost, SquaresFour } from "@/components/icons";

type Route = {
  href: string;
  label: string;
  icon: ElementType;
  subItems?: Omit<Route, "icon">[];
};

export const routes = [
  {
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    href: "/Dashboard",
    label: "Dashboard",
    icon: SquaresFour,
  },
  {
    href: "/servicebook",
    label: "Carta de Serviços",
    icon: Signpost,
    subItems: [
      {
        href: "/group/create",
        label: "Criar Grupo",
      },
    ],
  },
] satisfies Route[];
