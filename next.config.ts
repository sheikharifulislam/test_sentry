import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const isCI = process.env.CI === "true";

const nextConfig: NextConfig = {
    /* config options here */
    productionBrowserSourceMaps: isCI,
};

export default withSentryConfig(nextConfig, {
    // Only print logs for uploading source maps in CI
    silent: !isCI,

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
    telemetry: false,

    // Disable Sentry Webpack config in development mode.
    disableSentryWebpackConfig: true,

    // org: "test-2iz",
    // project: "test_sentry",
});
