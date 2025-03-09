import localFont from 'next/font/local'

export const sfPro = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro',
}) 