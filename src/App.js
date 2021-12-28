import { Button, Paper, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';

function App() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        // backgroundImage:
        //   'url(https://static.wixstatic.com/media/5c9ae1_ca3a9ae131d0409fade14021f7c40e23~mv2.gif)',
        height: '100vh',
      }}
    >
      <Typography
        variant="h1"
        sx={{ color: 'white', fontFamily: 'Arial', textAlign: 'center' }}
      ></Typography>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        <Grid item xs={6}>
          <Paper sx={{ padding: '10px' }} elevation={3}>
            <form >
              <TextField
                id="data"
                label="Data"
                name="data"
                variant="outlined"
                size="small"
                sx={{ width: '100%', margin: '10px 0' }}
                value="Welcome to Block"

              />
              <Typography>Previous Hash: 1</Typography>
              <TextField
                id="hash"
                label="Hash"
                name="hash"
                variant="outlined"
                size="small"
                sx={{ width: '100%', margin: '10px 0' }}
                value="hash asdgadf gadfga tg agdg tgadtrg"

              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: 'black', fontFamily: 'Arial' }}
                >
                  Genesis Block Time
                </Typography>
                <Button variant="contained" color="primary">
                  Mine
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'center', marginTop: '40px' }}
      >
        <Grid item xs={4}>
          <Paper sx={{ padding: '10px' }} elevation={3}>
            <form>
              <TextField
                id="data"
                name="data"
                label="Data"
                variant="outlined"
                size="small"
                value="Welcome to Block"
                sx={{ width: '100%', margin: '10px 0' }}
              />

              <Button
                variant="contained"
                color="success"
                sx={{ width: '100%' }}
              >
                Add Block
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
