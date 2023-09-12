import Head from "next/head";
import Hero from "../components/Hero";
import ProjectList from "~/components/ProjectList";
import Navbar from "~/components/Navbar";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);

  const aboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projectClick = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const header = {
    title: "Welcome to my portfolio",
    description:
      "A full stack developer looking for opportunities from freelance to full-time. My favorite technologies are ReactJS based. Check out my portfolio.",
  };

  const about = {
    title: "About me",
    description:
      "A full stack developer looking for opportunities from freelance to full-time. My favorite technologies are ReactJS based. Check out my portfolio.",
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar handleAboutClick={aboutClick} handleProjectClick={projectClick} />
      <main className="flex min-h-screen flex-col items-center ">
        <Hero title={header.title} description={header.description} />
        <div ref={aboutRef}>
          <Hero title={about.title} description={about.description} />
        </div>
        <div ref={projectRef}>
          <ProjectList />
        </div>
      </main>
    </>
  );
}
