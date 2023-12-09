import { Box, Button, Container, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

import { file_pdf } from '@/assets';

interface PreviewProps {
  file: File;
}

const Preview: React.FC<PreviewProps> = () => {
  //   const doc = [
  //     {
  //       uri: URL.createObjectURL(file),
  //       fileType: file.type,
  //     },
  //   ];
  //   const [config, setConfig] = useState(false);
  return (
    // <Container>
    //     <Typography variant='h5'
    //         sx={{
    //             color: blue[500],
    //             textShadow: `1px 1px 1px` + grey[900]
    //         }}
    //     >{file.name}</Typography>
    //     <DocViewer
    //         documents={doc}
    //         // config={{
    //         //     header: {
    //         //         disableHeader: true,
    //         //         disableFileName: true,
    //         //         retainURLParams: false,
    //         //     },
    //         //     pdfZoom: {
    //         //         defaultZoom: 2.0,
    //         //         zoomJump: 0.3,
    //         //     }
    //         // }
    //         // }

    //         pluginRenderers={DocViewerRenderers} />
    // </Container>
    <>
      <div className='flex w-full flex-col items-center gap-4 bg-[#F4F7FD] p-3 text-3xl font-medium'>
        <div>Xem trước</div>
        <Image src={file_pdf} alt='' />
      </div>
    </>
  );
};
export default Preview;
