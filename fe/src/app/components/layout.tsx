import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/headers/Header';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
