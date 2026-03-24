import React from "react";

const SUBJECT_ROWS = [
  {
    subject: "English",
    direction: "left",
    topics: [
      "Tenses",
      "Active Passive",
      "Synonyms",
      "Antonyms",
      "Error Detection",
      "Cloze Test",
    ],
  },
  {
    subject: "History",
    direction: "right",
    topics: [
      "Delhi Sultanate",
      "Mughals",
      "Revolt 1857",
      "Bhakti Movement",
      "Maratha Empire",
    ],
  },
  {
    subject: "Geography",
    direction: "left",
    topics: [
      "Rivers of India",
      "Climate",
      "Soil Types",
      "Monsoon",
      "Mountains",
    ],
  },
  {
    subject: "Polity",
    direction: "right",
    topics: [
      "Fundamental Rights",
      "DPSP",
      "Parliament",
      "President",
      "संविधान",
    ],
  },
];

function TickerRow({ subject, topics, direction = "left" }) {
  const duplicatedTopics = [...topics, ...topics];
  const animationClass =
    direction === "right" ? "subjects-ticker-track-right" : "subjects-ticker-track-left";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 px-2 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent sm:w-20" />

      <div
        className={[
          "subjects-ticker-group group flex w-max min-w-full shrink-0 items-center",
          animationClass,
        ].join(" ")}
        role="list"
        aria-label={`${subject} topics`}
      >
        {duplicatedTopics.map((topic, index) => (
          <button
            key={`${subject}-${topic}-${index}`}
            type="button"
            aria-label={`${subject} topic: ${topic}`}
            className="mx-1.5 inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-zinc-100 transition-all duration-300 hover:scale-105 hover:border-sky-400/40 hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:mx-2 sm:px-4"
            onClick={() => console.log(`${subject}: ${topic}`)}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SubjectsTickerSection() {
  return (
    <>
      <section className="relative py-16 px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              Explore Key Topics
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
              Smooth, distraction-free subject streams designed to feel premium while keeping
              topic discovery quick and effortless.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {SUBJECT_ROWS.map((row) => (
              <TickerRow
                key={row.subject}
                subject={row.subject}
                topics={row.topics}
                direction={row.direction}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .subjects-ticker-group:hover {
          animation-play-state: paused;
        }

        .subjects-ticker-track-left,
        .subjects-ticker-track-right {
          will-change: transform;
          animation-duration: 24s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .subjects-ticker-track-left {
          animation-name: subjects-ticker-left;
        }

        .subjects-ticker-track-right {
          animation-name: subjects-ticker-right;
        }

        @keyframes subjects-ticker-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes subjects-ticker-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (max-width: 640px) {
          .subjects-ticker-track-left,
          .subjects-ticker-track-right {
            animation-duration: 30s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .subjects-ticker-track-left,
          .subjects-ticker-track-right {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
