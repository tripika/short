export default defineAppConfig({
  title: 'Kerko - Short URL',
  email: 'sink.cool@miantiao.me',
  github: 'https://github.com/tripika/shortk',
  twitter: 'https://twitter.com/valonbadivuku',
  description: 'Kerko - A Simple Link Shortener',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
