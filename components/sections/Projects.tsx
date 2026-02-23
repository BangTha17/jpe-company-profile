import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-secondary uppercase tracking-wide text-sm font-semibold">
            Recent Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Proyek Terbaru Kami
          </h2>
        </div>

        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <div className="relative w-full h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-6 group-hover:translate-y-0 transition duration-300">
                <p className="text-sm text-white/80">{project.category}</p>

                <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-primary font-semibold"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              Lihat Semua Proyek
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
