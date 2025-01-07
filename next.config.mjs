/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // This enables static site export
    images: {
      unoptimized: true, // Ensures images are compatible with static export
    },
  };
  
  export default nextConfig;
  