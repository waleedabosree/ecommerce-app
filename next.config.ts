import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",
        port: "",
        pathname: "/Route-Academy-categories/**",
      },
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",
        port: "",
        pathname: "/Route-Academy-products/**", // 👈 lowercase "products"
      },
    ],
  },
};

export default nextConfig;
