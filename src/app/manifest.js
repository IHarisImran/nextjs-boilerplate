export default function manifest() {
    return {
      name: 'NextJS Boilerplate',
      short_name: 'NextJS Boilerplate',
      description: '...',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
          sizes: '512x512',
          type: 'image/png',
        }
      ],
    }
  }