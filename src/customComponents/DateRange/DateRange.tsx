import { Box, TextField } from '@mui/material';
import { addDays } from 'date-fns';
import React from 'react';
import { DateRangePicker } from 'react-date-range';

export default function DateRange() {
  const [state, setState] = React.useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const [showCalender, setShowCalender] = React.useState(false);

  const handleSelect = (ranges: any) => {
    console.log(ranges);
    setState([ranges.selection])
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

  const toggleCalender = () => {
    setShowCalender(!showCalender);
  };

  return (
    <div className='date-range-wrapper'>
      <div className='date-range-picker'>
        <h5 className='filter-label'>Date Range</h5>
        <div className='date-input-fields' onClick={toggleCalender}>
          <TextField size='small' value={state[0].startDate} />
          <span className='spliter'> - </span>
          <TextField size='small' value={state[0].endDate} />
        </div>
      </div>
      {showCalender &&
        <Box sx={{ position: 'relative', top: 200, left: 0, zIndex: 100, border: 'solid 1px black', borderRadius: '0.35rem' }}>
          <DateRangePicker
            onChange={handleSelect}
            // showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </Box>
      }
    </div>
  )
}