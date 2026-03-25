import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./translations/en.json",
  }
});

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withNextIntl(nextConfig);
