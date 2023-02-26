import React from "react";
import { Box } from "@mui/system";
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'sibi.jpg',
  },
  {
    imgPath:
      'mentor.jpg',
  },
  {
    imgPath:
      'logo512.png',
  },
];

const LeftSlideShow = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 440, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'transparent',
        }}
      >
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 265,
                  width:350,
                  display: 'block',
                  overflow: 'hidden',
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default LeftSlideShow;