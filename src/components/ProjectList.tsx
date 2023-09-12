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
  ];

  return (
    <>
      <h2 className="text-center text-5xl font-bold">Project List</h2>
      <div className="join join-vertical mt-8 gap-8">
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
