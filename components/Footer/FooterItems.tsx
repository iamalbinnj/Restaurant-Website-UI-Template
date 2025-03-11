"use client";

import Link from "next/link";

interface FooterSection {
  title: string;
  links: string[];
}

const footerLinks: FooterSection[] = [
  {
    title: "Services",
    links: ["Branding", "Design", "Marketing", "Advertisement"],
  },
  {
    title: "Company",
    links: ["About us", "Contact", "Jobs", "Press kit"],
  },
  {
    title: "Legal",
    links: ["Terms of use", "Privacy policy", "Cookie policy"],
  },
];

const FooterItems: React.FC = () => {
  return (
    <>
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h6 className="text-lg font-semibold mb-3">{section.title}</h6>
          <ul className="space-y-2 text-sm">
            {section.links.map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-primary">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterItems;
