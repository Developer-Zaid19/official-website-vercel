/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/notes/pdf/:id",
        destination: `http://10.85.227.246:5000/note-pdf/${":id"}.pdf`,
      },
      {
        source: "/notes/img/:id",
        destination: `http://10.85.227.246:5000/notes-img/${":id"}`,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
