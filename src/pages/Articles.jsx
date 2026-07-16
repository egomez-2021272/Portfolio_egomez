import { motion } from "framer-motion";
import NavBar from "../components/NavBar.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import articles from "../data/articles.json";

export default function Articles() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <NavBar />
      
      <section className="flex-1 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl lg:max-w-6xl">
          <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            {articles.title}
          </h1>

          {articles.featured.length > 0 && (
            <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2">
              {articles.featured.map((article, i) => (
                <motion.a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group block overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-surface"
                >
                  <ImagePlaceholder
                    src={article.image}
                    alt={article.title}
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="p-4 sm:p-5">
                    <h2 className="font-display text-base sm:text-lg font-semibold">
                      {article.title}
                    </h2>
                    {article.description && (
                      <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted">
                        {article.description}
                      </p>
                    )}
                    {article.readTime && (
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-accent">
                        {article.readTime}
                      </p>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          <h2 className="mt-12 sm:mt-16 font-display text-xl sm:text-2xl lg:text-3xl font-bold">
            Todos los artículos
          </h2>
          <div className="mt-6 sm:mt-8 divide-y divide-border border-t border-border">
            {articles.all.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 sm:gap-6 py-4 sm:py-6"
              >
                <ImagePlaceholder
                  src={article.image}
                  alt={article.title}
                  className="h-16 w-24 sm:h-20 sm:w-28 flex-shrink-0 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-display text-base sm:text-lg font-medium transition-colors group-hover:text-accent">
                    {article.title}
                  </h3>
                  {article.date && (
                    <p className="mt-1 text-xs sm:text-sm text-muted">{article.date}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
