import { hostname } from 'os'
import { RemotePattern } from './node_modules/next/dist/shared/lib/image-config.d'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  experimental: {
    ppr: `incremental`,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: `bottom-right`,
  },
}

export default nextConfig
