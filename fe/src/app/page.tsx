'use client';

import * as React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/headers/Header';
import HomePage from '@/components/homepage/HomePage';

import ComponentsLayout from './components/layout';

export default function Home() {
  // simulate upload and preview file
  //test upload file

  return (
    <>
      <ComponentsLayout>
        <HomePage />
      </ComponentsLayout>
    </>
  );
}
