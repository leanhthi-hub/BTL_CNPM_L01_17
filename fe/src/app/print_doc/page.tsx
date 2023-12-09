'use client';

import * as React from 'react';
import { useState } from 'react';
import Footer from '@/components/footer/Footer';
import Header from '@/components/headers/Header';
import HomePage from '@/components/homepage/HomePage';

import ComponentsLayout from '../components/layout';
import HorizontalLinearStepper from '@/components/progress_step/page';
import DropZone from '@/components/dropzone/DropZone';
import TableFile from '@/components/tablelistfile/TableListFile';

export default function Home() {
  // simulate upload and preview file
  //test upload file
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
    <ComponentsLayout>
        <HorizontalLinearStepper />
        <div className='flex'>
            <DropZone />
            <TableFile file={file}/>
        </div>
    </ComponentsLayout>
    </>
  );
}
