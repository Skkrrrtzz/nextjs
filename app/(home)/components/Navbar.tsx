import Link from "next/link";
import React from "react";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
export default function Navbar() {
  const socials = [
    {
      Name: "Github",
      Url: "https://github.com/kertz",
      Icon: SiGithub,
    },
    {
      Name: "Linkedin",
      Url: "https://linkedin.com/in/kertz",
      Icon: SiLinkedin,
    },
    {
      Name: "Github",
      Url: "https://facebook.com/kertz",
      Icon: SiFacebook,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-4xl font-bold underline underline-offset-8">Kertz</h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Url} key={index} aria-label={social.Name}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
