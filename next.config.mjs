/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 启用严格模式, 辅助我们编写代码, 如果用到了过时的函数 方法 和 属性,会提示已过期
  productionBrowserSourceMaps: true,
  env: {
    NAME: "xiaogeng",
    NEXT_PUBLIC_BASE_URL: `http://localhost:9999`,
  },
  // basePath: '/nextjs-blog',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.music.126.net",
      },
    ],
  },
};

export default nextConfig;
