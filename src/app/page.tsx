import content from "./content.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-32 max-w-2xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-5xl font-semibold">{content.name}</h1>
              <p className="text-xl font-regular text-gray-900 dark:text-gray-100">
                {content.current.title} at{" "}
                <a
                  href={content.current.company.url}
                  className="text-gray-900 dark:text-gray-100 underline decoration-gray-400 dark:decoration-gray-600 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-colors inline-flex items-center font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.current.company.name}
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </p>
            </div>
            <p className="text-xl font-regular text-gray-900 dark:text-gray-100">
              {content.description}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-md uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
              Links
            </h2>
            <div className="flex gap-4">
              <a
                href={`mailto:${content.social.email}`}
                className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:underline dark:decoration-gray-600 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-colors"
              >
                Email
              </a>
              <a
                href={content.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:underline dark:decoration-gray-600 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-colors"
              >
                X
              </a>
              <a
                href={content.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:underline dark:decoration-gray-600 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={content.social.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold bg-gradient-to-r from-red-500 via-orange-500 via-green-500  via-blue-500 to-purple-500 text-transparent bg-clip-text hover:underline hover:decoration-pink-500 transition-colors"
              >
                Blog posts
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
