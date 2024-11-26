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
    ],
  },
}

export default nextConfig
