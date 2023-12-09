'use client';

import { useState } from 'react';

import ComponentsLayout from '../components/layout';
import HorizontalLinearStepper from '@/components/progress_step/page';
import DropZone from '@/components/dropzone/DropZone';
import TableFile from '@/components/tablelistfile/TableListFile';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChoosePrinter from '@/components/ChoosePrinter/ChoosePrinter';
import ConfigProperties from '@/components/configproperties/ConfigProperties';
import Preview from '@/components/preview/preview';
import CircularWithValueLabel from '@/components/progressUploadFile/CircularProgressWithLabel';

const steps = [
  'Tải lên tài liệu cần in',
  'Chọn máy in',
  'Chọn thuộc tính in',
  'Bắt đầu in',
];

export default function Home() {
  // simulate upload and preview file
  //test upload file
  const [file, setFile] = useState<File | null>(null);

  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => {
    if (activeStep != 3)
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    else setActiveStep(0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  return (
    <>
      <ComponentsLayout>
        <div className='flex h-full flex-col gap-8 px-[20px] pb-4 pt-10'>
          <HorizontalLinearStepper activeStep={activeStep} />

          <div className='flex min-h-[420px] w-full flex-row gap-4'>
            {activeStep == 0 && <DropZone />}
            {activeStep == 1 && <ChoosePrinter />}
            {activeStep == 2 && <ConfigProperties />}
            {activeStep == 3 && <CircularWithValueLabel />}
            {(activeStep == 2 || activeStep == 3) && <Preview />}
            {(activeStep == 0 || activeStep == 1) && (
              <TableFile activeStep={activeStep} />
            )}
          </div>

          {activeStep != 3 ? (
            <div className='flex flex-row items-center justify-between'>
              <Button
                className='text-lg font-medium underline'
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Quay lại
              </Button>
              <Button
                className='rounded-lg bg-[#032A94] px-4 py-2 text-lg font-medium text-white'
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Hoàn thành' : 'Tiếp tục'}
              </Button>
            </div>
          ) : (
            <div className='flex justify-center'>
              <Button
                className=' rounded-lg bg-[#032A94] px-4 py-2 text-lg font-medium text-white'
                onClick={handleNext}
              >
                Xem nhật ký in
              </Button>
            </div>
          )}
        </div>
      </ComponentsLayout>
    </>
  );
}
