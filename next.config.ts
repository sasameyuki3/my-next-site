import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // <--- この1行を追加してください
  
  // もし <Image> タグを使う予定があるなら、以下も追加しておくとエラーを防げます
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

