import { motion } from "framer-motion";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import RotatingBadge from "../components/RotatingBadge.jsx";
import NavBar from "../components/NavBar.jsx";
import TechStack from "../components/TechStack.jsx";
import profile from "../data/profile.json";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <NavBar />
      
      <section className="relative flex flex-1 items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-[minmax(0,350px)_1fr] xl:grid-cols-[minmax(0,400px)_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]"
          >
            <ImagePlaceholder
              src={profile.photo}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs sm:text-sm font-medium text-accent">
                {profile.role}
              </span>
              {profile.availability && (
                <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs sm:text-sm font-medium text-green-400">
                  {profile.availability}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl xl:text-6xl">
              {profile.headline}
            </h1>

            <p className="mt-4 sm:mt-6 max-w-full text-base sm:text-lg text-muted lg:mx-0 mx-auto">{profile.summary}</p>

            {profile.location && (
              <div className="mt-3 sm:mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-muted">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {profile.location}
              </div>
            )}

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-text px-6 py-3 text-sm sm:text-base font-medium text-bg transition-opacity hover:opacity-90"
              >
                Currículum ↗
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="link-underline text-sm sm:text-base font-medium text-text"
              >
                Contáctame
              </a>
              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="link-underline text-sm sm:text-base font-medium text-text"
                >
                  {profile.phone}
                </a>
              )}
            </div>

            <TechStack />
          </motion.div>
        </div>

        {/* Insignia rotatoria — reemplaza el "Hire Me" original, 100% editable */}
        <div className="pointer-events-auto absolute bottom-8 left-8 sm:bottom-12 sm:left-12 hidden lg:block">
          <RotatingBadge
            text="Disponible para trabajar • "
            centerLabel="Contáctame"
            href={`mailto:${profile.email}`}
          />
        </div>
      </section>
    </div>
  );
}
