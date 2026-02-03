/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/notes/:id",
        destination: "https://devzaidbackend.onrender.com/api/content/notes/:id",
      },
    ];
  },
};

export default nextConfig;
