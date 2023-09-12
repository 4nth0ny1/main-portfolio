import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { GrGithub } from "react-icons/gr";

export default function Contact() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold ">Contact Me</h1>
          <div className="mt-8 flex justify-center gap-4 text-3xl">
            <Link href="mailto:acatullo4@gmail.com">
              <TfiEmail />
            </Link>
            <Link href="https://github.com/4nth0ny1">
              <GrGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
