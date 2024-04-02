/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  // TODO: for now until landing page => change later
  async redirects() {
    return [
      {
        source: "/",
        destination: "/test",
        permanent: false,
      },
    ];
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
};

// Begin Sentry integration
import { withSentryConfig } from "@sentry/nextjs";

const sentryOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  silent: true, // Suppresses source map uploading logs during build
  org: "gamescribe",
  project: "gamescribe",
};

const nextConfigEnhanced = withSentryConfig(config, sentryOptions, {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  widenClientFileUpload: true, // Upload a larger set of source maps for prettier stack traces (increases build time)
  transpileClientSDK: true, // Transpiles SDK to be compatible with IE11 (increases bundle size)
  tunnelRoute: "/monitoring", // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers. (increases server load)
  hideSourceMaps: true, // Hides source maps from generated client bundles
  disableLogger: true, // Automatically tree-shake Sentry logger statements to reduce bundle size
  automaticVercelMonitors: true, // Enables automatic instrumentation of Vercel Cron Monitors.
});

export default nextConfigEnhanced;
