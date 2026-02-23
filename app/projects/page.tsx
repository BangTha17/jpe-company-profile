"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  const PROJECT_PER_PAGE = 3;

  const [currentPage, setCurrentPage] = useState(1);

  // pagination logic
  const totalPages = Math.ceil(projects.length / PROJECT_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECT_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + PROJECT_PER_PAGE,
  );

  return (
    <section className="container-custom pt-32 pb-20">
      {/* Back Navigation */}
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-sm text-gray-600 mb-12 transition-all duration-300"
      >
        <ArrowLeft
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span className="transition-colors duration-300 group-hover:text-primary">
          Back to Home
        </span>
      </Link>
      {/* TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Projects</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Selected engineering and industrial projects handled by PT Jaya
          Perkasa Engitech.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-24">
        {currentProjects.map((project, i) => (
          <div
            key={project.id}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE (KOTAK) */}
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>

            {/* TEXT */}
            <div>
              <span className="text-sm text-primary font-semibold">
                {project.category}
              </span>

              <h2 className="text-2xl font-bold mt-2 mb-4">{project.title}</h2>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 mt-16">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-10 h-10 rounded-lg border transition ${
              currentPage === i + 1
                ? "bg-primary text-white border-primary"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
