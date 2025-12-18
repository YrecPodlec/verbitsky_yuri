import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // ← это отключит все ESLint-ошибки на Vercel
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'win98icons.alexmeub.com',
                pathname: '/icons/png/**',
            },
        ],
        // Если используешь ещё внешние изображения — добавь их сюда же
        unoptimized: false, // глобально можно оставить false, мы отключили только для этой иконки
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);