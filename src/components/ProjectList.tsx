import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  const cards = [
    {
      id: 1,
      imageSrc: "/workout.jpg",
      imageAlt: "workout.jpg",
      title: "Local Gym",
      description: "Click the button to listen on Spotiwhy app.",
      githubLink: "",
      deployLink: "",
    },
    {
      id: 2,
      imageSrc: "/dealership.jpg",
      imageAlt: "dealership.jpg",
      title: "Car Dealership",
      description: "Click the button to listen on Spotiwhy app.",
      githubLink: "",
      deployLink: "",
    },
    {
      id: 3,
      imageSrc: "/coffee.jpg",
      imageAlt: "coffee.jpg",
      title: "Coffee Shop",
      description: "Click the button to listen on Spotiwhy app.",
      githubLink: "",
      deployLink: "",
    },
    {
      id: 4,
      imageSrc: "/todos.jpg",
      imageAlt: "todos.jpg",
      title: "Manage It",
      description: "Click the button to listen on Spotiwhy app.",
      githubLink: "https://github.com/4nth0ny1/t3-manage-it",
      deployLink: "https://t3-manage-it.vercel.app/",
    },
    {
      id: 5,
      imageSrc: "/reddit.jpg",
      imageAlt: "reddit.jpg",
      title: "Simple Reddit",
      description: "Click the button to listen on Spotiwhy app.",
      githubLink: "https://github.com/4nth0ny1/reddit-front-2",
      deployLink: "",
    },
    {
      id: 6,
      imageSrc: "/crm.jpg",
      imageAlt: "crm.jpg",
      title: "Ruby on Rails CRM",
      description: "Click the button to listen on Spotiwhy app.",
      githubLink: "https://github.com/4nth0ny1/rails-crm",
      deployLink: "",
    },
  ];

  return (
    <>
      <h2 className="text-center text-5xl font-bold">Project List</h2>
      <div className="xs:w-[100%] join join-vertical mt-8 gap-8">
        {cards.map((card) => {
          return (
            <ProjectItem
              key={card.id}
              id={card.id}
              imageAlt={card.imageAlt}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              githubLink={card.githubLink}
              deployLink={card.deployLink}
            />
          );
        })}
      </div>
    </>
  );
}
