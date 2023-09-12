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
    <div className="xs:flex-col card join-item flex shadow-xl lg:card-side md:w-[900px] md:flex-row ">
      <div className="md:w-[50%]">
        <img src={imageSrc} alt={imageAlt} className="md:h-[300px]" />
      </div>
      <div className="card-body md:w-[50%]">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            href={
              deployLink
                ? deployLink
                : "https://main-portfolio-gold-three.vercel.app/"
            }
          >
            <CgWebsite className="text-3xl" />
          </Link>
          <Link href={githubLink ? githubLink : "https://github.com/4nth0ny1"}>
            <FiGithub className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
