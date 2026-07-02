import { lab } from "@/data/site";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="container-content pt-20 pb-16 md:pt-28 md:pb-20"
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-ink">
          <span className="gradient-text">MIND</span> Lab
        </h1>
        <p className="text-lg text-ink-secondary leading-relaxed mt-5">
          {lab.description}
        </p>
        <p className="mt-5 text-sm text-ink-muted">
          We are recruiting &mdash;{" "}
          <a
            href="#join"
            className="text-brand-purple hover:underline font-medium"
          >
            Interested in joining? Get in touch.
          </a>
        </p>
      </div>
    </section>
  );
}
