type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <div className="hero flex min-h-screen flex-row justify-start">
      <div className="hero-content text-start">
        <h1 className="text-title font-bold ">{title}</h1>
        <p className="py-6">{description}</p>
      </div>
    </div>
  );
}
