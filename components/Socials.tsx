import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

const socials = [
  { icon: <FiGithub />, path: "https://github.com/Noname1122Q" },
  { icon: <FiLinkedin />, path: "https://in.linkedin.com/" },
  { icon: <FiInstagram />, path: "https://www.instagram.com/uttam_jangir1122/" },
  { icon: <FiYoutube />, path: "https://www.youtube.com/" },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
