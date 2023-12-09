import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import data from './data.json';

interface Printer {
  id: number;
  name: string;
  image: string;
}

export default function SelectVariants() {
  const [selectedPrinter, setSelectedPrinter] = React.useState<number | ''>('');
  const [fileImg, setFileImg] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedPrinterId = event.target.value as number | '';
    setSelectedPrinter(selectedPrinterId);

    // Check if the selected value is not an empty string
    if (selectedPrinterId !== '') {
      // Find the selected printer in the data array
      const selectedPrinterData = data.find(
        (printer) => printer.id === Number(selectedPrinterId)
      );

      // If an image is available for the selected printer, set it in the state
      if (selectedPrinterData) {
        setFileImg(selectedPrinterData.image);
      } else {
        setFileImg(''); // Clear the image if no printer is selected
      }
    } else {
      // Clear the image if no printer is selected
      setFileImg('');
    }
  };

  return (
    <div>
      <FormControl variant='filled' className='block w-full'>
        <InputLabel id='printer-select-label'>Select Printer</InputLabel>
        <Select
          labelId='printer-select-label'
          id='printer-select'
          value={selectedPrinter.toString()}
          onChange={handleChange}
          className='w-full'
        >
          <MenuItem value=''>
            <em>Chọn máy in</em>
          </MenuItem>
          {data.map((printer) => (
            <MenuItem key={printer.id} value={printer.id}>
              {printer.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {fileImg && (
        <img
          src={fileImg}
          alt='printer chosen'
          loading='lazy'
          style={{ marginTop: '10px', maxWidth: '100%' }}
        />
      )}
    </div>
  );
}
