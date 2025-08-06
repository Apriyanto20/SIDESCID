// app/page.tsx
export const metadata = {
  title: 'Sistem Informasi Desa Cidugaleun Digital',
  description: 'Desa Cidugaleun Digital - Sistem Informasi Desa',
};

import HomeClient from './components/HomeClient';

export default function HomePage() {
  return <HomeClient />;
}
