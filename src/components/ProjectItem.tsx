import { CgWebsite } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

type CardProps = {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  githubLink: string;
  deployLink: string;
};

export default function ProjectItem({
  id,
  imageAlt,
  imageSrc,
  title,
  description,
  githubLink,
  deployLink,
}: CardProps) {
  // test

  return (
    <div className="card join-item w-[900px] shadow-xl lg:card-side">
      <div className="w-[50%]">
        <img src={imageSrc} alt={imageAlt} className="h-[300px]" />
      </div>
      <div className="card-body w-[50%]">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href="https://main-portfolio-gold-three.vercel.app/">
            <CgWebsite className="text-3xl" />
          </Link>
          <Link href="https://github.com/4nth0ny1">
            <FiGithub className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
