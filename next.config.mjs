/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Stamped once per build (i.e. per deploy) and shown as "Last updated" on the home page
const buildDate = new Date().toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/Boise',
})

const nextConfig = {
  output: 'export',
  env: {
    NEXT_PUBLIC_BUILD_DATE: buildDate,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
}

export default nextConfig
