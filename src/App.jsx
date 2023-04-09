import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ padding: "20px", height: "50vh", marginTop: "20vh" }}>
          <Stack 
            spacing={13}
            justifyContent="center"
            alignItems="center"
            sx={{height: "50vh"}}>
            <Stack 
              direction="row"
              justifyContent="center"
              alignItems="center">
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
            </Stack>
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              Test text qwe qwe qwe qwe 123 123 123 123 123 123 123
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </div>
  )
}

export default App
