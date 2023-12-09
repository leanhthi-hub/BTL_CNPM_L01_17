import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';
import Header from '@/components/headers/Header';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
