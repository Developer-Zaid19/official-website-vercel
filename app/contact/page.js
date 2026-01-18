export default function ContactPage() {
  return (
    <main className="min-h-screen bg-(--bg) px-4 py-12">
      <section className="max-w-3xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-(--hadding) mb-4">
          Contact Me
        </h1>

        <p className="text-(--text) mb-8 leading-relaxed">
          If you have any doubts about notes, blogs, or videos, or want to give suggestions, you can email us directly.
        </p>

        {/* Email Card */}
        <div className="border border-(--border) bg-linear-to-br from-slate-950 to-slate-900 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold text-(--text) mb-2">
            Email
          </h2>

          <p className="text-(--text)">
            📧{" "}
            <a
              href="mailto:developerzaid26@gmail.com"
              className="text-blue-600 underline hover:opacity-80"
            >
              developerzaid26@gmail.com
            </a>
          </p>

          <p className="mt-4 text-(--text)">
            
When sending an email, it would be better to write this in the subject:
          </p>

          <ul className="list-disc list-inside mt-2 space-y-1 text-(--text)">
            <li>Blog related doubt</li>
            <li>Notes suggestion</li>
            <li>Video topic request</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/10 mb-10"></div>

        {/* Guidelines */}
        <div className="bg-linear-to-br from-slate-950 to-slate-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-(--hadding) mb-3">
            Before you message
          </h2>

          <p className="text-(--text) mb-3">
            Please keep these things in mind:
          </p>

          <ul className="list-disc list-inside text-(--text) space-y-1">
            <li>Spam ya promotion ka reply nahi milega</li>
            <li>Spam or promotions will not be replied to.</li>
            <li>
              Questions that are already explained in the blog will not receive a reply.
            </li>
          </ul>

          <p className="mt-4 text-(--text)">
           😄 I try to answer genuine questions. Sure, it may take some time.
          </p>
        </div>

      </section>
    </main>
  );
}
