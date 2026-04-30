import { landingData } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export function TechStack() {
  const { techStack } = landingData;

  return (
    <section id="stack" className="w-full max-w-6xl px-6 py-24 mx-auto border-t">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">{techStack.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {techStack.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {techStack.categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-6 border-b pb-2 w-full text-center md:text-left">
              {category.name}
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}