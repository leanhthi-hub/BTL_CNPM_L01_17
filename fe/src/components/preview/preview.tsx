import { Box, Typography, Container, Button } from '@mui/material'
import React, { useState } from 'react'
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer'
import { blue, grey } from '@mui/material/colors'
import Divider from '@mui/material/Divider'

interface PreviewProps {
    file: File;
  }

  const Preview: React.FC<PreviewProps> = ({ file }) => {
    const doc = [
        {
            uri: URL.createObjectURL(file),
            fileType: file.type,

        }
    ];
    const [config, setConfig] = useState(false)
    return (
                <Container>
                    <Typography variant='h5'
                        sx={{
                            color: blue[500],
                            textShadow: `1px 1px 1px` + grey[900]
                        }}
                    >{file.name}</Typography>
                    <DocViewer
                        documents={doc}
                        // config={{
                        //     header: {
                        //         disableHeader: true,
                        //         disableFileName: true,
                        //         retainURLParams: false,
                        //     },
                        //     pdfZoom: {
                        //         defaultZoom: 2.0,
                        //         zoomJump: 0.3,
                        //     }
                        // }
                        // }

                        pluginRenderers={DocViewerRenderers} />
                </Container>
    )
};
export default Preview;