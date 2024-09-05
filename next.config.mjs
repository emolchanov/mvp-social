// @ts-check
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const pureNextConfig = {
  output: 'standalone',
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    typedRoutes: false,
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  images: {
    remotePatterns: [
      {
        /**
         * @note
         * a list of trusted CDNs must be specified
         */
        hostname: '*',
      },
    ],
  },

  async rewrites() {
    return [];
  },
};

/**
 * `BundleAnalyzer` HOF
 */
const nextConfigWithBundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
  openAnalyzer: true,
})(pureNextConfig);

export default nextConfigWithBundleAnalyzer;
