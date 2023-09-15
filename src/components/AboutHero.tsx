type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold ">{title}</h1>
          <p className="py-6">{description}</p>
        </div>
      </div>
    </div>
  );
}
