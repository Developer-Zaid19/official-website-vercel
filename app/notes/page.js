import notes from "./../content/notes.json";

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-(--bg) px-4 py-12">
      <section className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-(--text) mb-4">
          Free Notes (PDF)
        </h1>

        <p className="text-(--sectext) mb-10 max-w-3xl">
          Here you&apos;ll find free PDF notes on programming and coding that support my YouTube videos.
        </p>

        {/* Notes List */}
        <div className="grid gap-6 sm:grid-cols-2">
          {notes.map((note) => (
            <div
              key={note.id}
              className="border border-black/10 rounded-xl p-5 hover:shadow-md transition bg-white"
            >
              <h3 className="text-lg font-semibold text-(--text) mb-1">
                {note.title}
              </h3>

              <p className="text-sm text-(--sectext) mb-4">
                Category: <span className="font-medium">{note.category}</span>
              </p>

              <a
                href={`/notes/${note.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                📄 Download PDF
              </a>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
