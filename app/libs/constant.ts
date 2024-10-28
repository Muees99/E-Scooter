import { NavLinkProps, FooterLinkProps } from "../@types";

export const NAVLINKS: NavLinkProps[] = [
  { id: 1, link: "home", label: "Home" },
  { id: 2, link: "products", label: "Products" },
  { id: 3, link: "gallery", label: "Gallery" },
  { id: 4, link: "about-us", label: "About us" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  QuickLinks: [
    {
      id: 1,
      link: "mailto:mueesalabi294@gmail.com",
      label: "mueesalabi294@gmail.com",
    },
    {
      id: 2,
      link: "",
      label: " Careers",
    },
    { id: 3, link: "tel:+2348101097866", label: "Meet the Team" },
  ],
  resources: [
    { id: 1, link: "", label: "FQA Features" },
    {
      id: 2,
      link: "",
      label: "Workshop",
    },
    { id: 3, link: "", label: "Orders & Tracking" },
  ],
  legals: [
    { id: 1, link: "", label: "Copyright Privacy" },
    { id: 2, link: "", label: " Policy Disclaimer  " },
    { id: 3, link: "", label: "Terms & Conditions" },
  ],
  link: "",
  label: "",
};
