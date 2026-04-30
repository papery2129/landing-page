// src/components/sections/Projects.tsx

import { landingData } from "@/data/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const { projects } = landingData;

  return (
    <section id="proyectos" className="w-full max-w-6xl px-6 py-24 mx-auto border-t">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">{projects.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {projects.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.items.map((project) => (
          <Card key={project.id} className="flex flex-col h-full hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <a 
                  href={project.link} 
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label={`Ver detalles de ${project.title}`}
                >
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
              <CardDescription className="text-base text-balance mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between gap-6">
              <div className="bg-muted/50 p-4 rounded-lg border border-muted">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-primary mr-2">Impacto:</span> 
                  {project.impact}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-background">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}