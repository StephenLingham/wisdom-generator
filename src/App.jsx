import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh">
          <Paper
            elevation={3}
            sx={{ padding: "20px", height: "50vh" }}>
            <Stack
              spacing={13}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "50vh" }}>
              <Button
                variant="contained"
                sx={{
                  textTransform: 'none',
                  width: "300px",
                  height: "120px",
                  fontSize: "1.7em",
                  borderRadius: "15px"
                }}>
                Generate Postmodern Wisdom
              </Button>
              <Typography
                variant="h2"
                sx={{ textAlign: "center" }}>
                Test text qwe qwe qwe qwe 123 123 123 123 123 123 123
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </div>
  )
}

export default App
