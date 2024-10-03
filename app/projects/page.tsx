import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const projects = [
  {
    title: "Finance Tracker",
    description:
      "Web app to manage user transaction with multiple accounts and categories along with graphs to visualise data.",
    link: "#",
    stack: "Next, Typescript, Clerk, Drizzle, PostgresSQL, Hono",
    underDevelopment: false,
  },
  {
    title: "Codetail",
    description: "Website for a web development agency.",
    link: "https://codetail.tech",
    stack: "MERN, Three js, Tailwind",
    underDevelopment: false,
  },
  {
    title: "Seamless UI",
    description:
      "A component library made by me to be able to quickly utilize prebuilt components.",
    link: "#",
    stack: "Next, Typescript, Tailwind, Hono",
    underDevelopment: true,
  },
  {
    title: "Restaurant website",
    description: "A full stack restaurant model website.",
    link: "#",
    stack: "MERN, Zod, Typescript, Tailwind",
    underDevelopment: true,
  },
];

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  stack: string;
  underDevelopment: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  stack,
  underDevelopment,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition-transform duration-300 hover:scale-105"
    >
      <Card className="w-full shadow-md hover:shadow-lg transition-shadow cursor-pointer min-h-[300px]">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            {title}
            {underDevelopment && (
              <span className="ml-2 text-sm text-orange-500">
                (Under Development)
              </span>
            )}
          </CardTitle>
          <CardDescription className="text-gray-500">{stack}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </a>
  );
};

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            stack={project.stack}
            underDevelopment={project.underDevelopment}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
