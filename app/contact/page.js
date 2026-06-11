"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa6";

const contactInfo = [
  { icon: "📧", label: "Email",    val: "developerzaid26@gmail.com", href: "mailto:developerzaid26@gmail.com" },
  { icon: "📍", label: "Location", val: "Lucknow, India",            href: null },
  { icon: "💼", label: "Portfolio",val: "developerzaid.vercel.app",   href: "https://developerzaid.vercel.app" },
];

const socials = [
  { icon: <FaYoutube />,   label: "YouTube",   href: "https://youtube.com/@Developer-zaid",            color: "hover:text-red-500  hover:border-red-500" },
  { icon: <FaInstagram />, label: "Instagram",  href: "https://instagram.com/dvlprzaid",                color: "hover:text-pink-500 hover:border-pink-500" },
  { icon: <FaLinkedin />,  label: "LinkedIn",   href: "https://www.linkedin.com/in/developer-zaid29",   color: "hover:text-blue-400 hover:border-blue-400" },
  { icon: <FaGithub />,    label: "GitHub",     href: "https://github.com/Developer-Zaid19",            color: "hover:text-gray-300 hover:border-gray-400" },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const submithandle = async (formData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (!result.success) {
      alert("We are trying to reply faster");
    } else {
      alert("I will contact you soon!");
      reset();
    }
  };

  return (
    <main className="min-h-screen px-4 sm:px-8 lg:px-16 py-14">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="sec-label mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p className="text-(--text-muted) text-base max-w-lg mx-auto leading-relaxed">
            Have a question, need help with coding, or want to collaborate? I'm just a message away!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Info text */}
            <div className="glass rounded-2xl p-7 sm:p-9">
              <h2 className="text-2xl font-bold text-(--text) mb-4">
                Let's <span className="text-(--maincolor)">Connect</span>
              </h2>
              <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
                Need help with{" "}
                <span className="text-(--maincolor) font-semibold">coding</span>,
                website, app development, or any tech project? Email me or fill the form —
                I'll get back to you as soon as possible. I build scalable, fast, and modern
                solutions for real-world{" "}
                <span className="text-(--maincolor) font-semibold">problems</span>.
              </p>

              {/* Contact info cards */}
              <div className="mt-7 space-y-3">
                {contactInfo.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[rgba(0,188,255,0.04)] border border-(--border) hover:border-(--maincolor) hover:shadow-[0_0_12px_var(--mainglow)] transition-all duration-300"
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[3px] text-(--text-muted) mb-0.5">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                          className="text-sm font-medium text-(--text) hover:text-(--maincolor) transition-colors duration-300">
                          {c.val}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-(--text)">{c.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="glass rounded-2xl p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[3px] text-(--maincolor) mb-5">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl border border-(--border) text-(--text-muted) text-sm font-medium transition-all duration-300 ${s.color}`}
                  >
                    <span className="text-lg">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-7 sm:p-10"
          >
            <h2 className="text-xl font-bold text-(--text) mb-7">Send a Message</h2>

            <form className="space-y-5" onSubmit={handleSubmit(submithandle)}>

              {/* Name */}
              <div>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 3, message: "Min 3 characters" },
                    maxLength: { value: 15, message: "Max 15 characters" },
                  })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-(--border) rounded-xl px-5 py-3.5 outline-none focus:border-(--maincolor) focus:shadow-[0_0_15px_var(--mainglow)] transition-all placeholder:text-(--text-muted) text-(--text) text-sm"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    minLength: { value: 5, message: "Min 5 characters" },
                    maxLength: { value: 50, message: "Max 50 characters" },
                  })}
                  type="email"
                  placeholder="Email or Phone"
                  className="w-full bg-transparent border border-(--border) rounded-xl px-5 py-3.5 outline-none focus:border-(--maincolor) focus:shadow-[0_0_15px_var(--mainglow)] transition-all placeholder:text-(--text-muted) text-(--text) text-sm"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 5, message: "Min 5 characters" },
                    maxLength: { value: 500, message: "Max 500 characters" },
                  })}
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full bg-transparent border border-(--border) rounded-xl px-5 py-3.5 outline-none focus:border-(--maincolor) focus:shadow-[0_0_15px_var(--mainglow)] transition-all placeholder:text-(--text-muted) text-(--text) text-sm resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm bg-(--maincolor) text-slate-950 hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>

            </form>

            {/* Direct email */}
            <div className="mt-6 pt-5 border-t border-(--border) text-center">
              <p className="text-xs text-(--text-muted) mb-3">Or reach me directly</p>
              <a
                href="mailto:developerzaid26@gmail.com"
                className="text-sm font-medium text-(--maincolor) hover:glow-text transition-all duration-300"
              >
                developerzaid26@gmail.com
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}