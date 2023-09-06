import { ElementType } from "react";

import { House, Signpost, Sparkle, SquaresFour } from "@/components/icons";

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
    href: "/dashboard",
    label: "Dashboard",
    icon: SquaresFour,
  },
  {
    href: "/servicebook",
    label: "Carta de Serviços",
    icon: Signpost,
    subItems: [
      {
        href: "/group",
        label: "Grupos",
      },
      {
        href: "/adminservicebook",
        label: "Admin. Grupos",
      },
    ],
  },
  {
    href: "/servicebook/serviceorder",
    label: "Meus Serviços",
    icon: Sparkle,
    subItems: [
      {
        href: "/myservices",
        label: "Meus Serviços",
      },
      {
        href: "/responsible",
        label: "Atribuídos a mim",
      },
      {
        href: "/status",
        label: "Serviços por Status",
      },
    ],
  },
] satisfies Route[];
