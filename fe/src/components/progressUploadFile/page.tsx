import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', width: '14rem', height: '14rem' }}>
      <CircularProgress 

      variant="determinate" 
      {...props} 
      style={{ width: '14rem', height: '14rem', color: props.value === 100 ? 'green' : 'blue' }}
    ></CircularProgress>
      

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          
        }}
      >
        <Typography
  variant="caption"
  component="div"
  color={props.value === 100 ? 'success.main' : 'text.secondary'}
  sx={{
    fontSize: '1.4rem',
    '&::after': {
      
      color: 'success.main',
      display: 'inline-block',
      marginLeft: '0.5em', 
    },
  }}
>
<div>
    complete
  </div>
  <div>
    { props.value != 100 ? `${Math.round(props.value)}%` :'100% ✔' }
  </div>
</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress}  />;
}