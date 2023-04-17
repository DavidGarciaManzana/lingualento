const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    webpack(config) {
        config.resolve.alias['@'] = path.join(__dirname, 'src')
        return config
    },
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en'
    }
}
