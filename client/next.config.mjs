/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: "teacherToken",
    local: "http://localhost:5000/api",
    img: "http://localhost:5000",
  },
};

export default nextConfig;
