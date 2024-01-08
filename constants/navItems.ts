import { StaticImport } from "next/dist/shared/lib/get-img-props";
import home from "../public/Home.svg";
import orders from "../public/orders.svg";
import products from "../public/products.svg";
import delivery from "../public/delivery.svg";
import marketing from "../public/marketplace.svg";
import analytics from "../public/analytics.svg";
import payments from "../public/payments.svg";
import tools from "../public/tools.svg";
import discounts from "../public/discounts.svg";
import audience from "../public/audience.svg";
import appearance from "../public/appearance.svg";
import plugins from "../public/plugins.svg";

export interface NavItem {
  name: string;
  link: string;
  icon: string | StaticImport;
}

export const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/",
    icon: home,
  },
  {
    name: "Orders",
    icon: orders,
    link: "/orders",
  },
  {
    name: "Products",
    icon: products,
    link: "/products",
  },
  {
    name: "Delivery",
    icon: delivery,
    link: "/delivery",
  },
  {
    name: "Marketing",
    icon: marketing,
    link: "/marketing",
  },
  {
    name: "Analytics",
    icon: analytics,
    link: "/analytics",
  },
  {
    name: "Payments",
    icon: payments,
    link: "/payments",
  },
  {
    name: "Tools",
    icon: tools,
    link: "/tools",
  },
  {
    name: "Discounts",
    icon: discounts,
    link: "/discounts",
  },
  {
    name: "Audience",
    icon: audience,
    link: "/audience",
  },
  {
    name: "Appearance",
    icon: appearance,
    link: "/appearance",
  },
  {
    name: "Plugins",
    icon: plugins,
    link: "/plugins",
  },
];
