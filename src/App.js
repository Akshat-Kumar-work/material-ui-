import { Typography } from '@mui/material';
import NavBar from "./components/navBar";
import './App.css';
import { createTheme , ThemeProvider} from '@mui/material/styles';
import HeroSection from './components/HeroSection';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});



function App() {
  return (
<ThemeProvider theme={theme}>
    <NavBar/>
    <HeroSection/>
</ThemeProvider>
  );
}

export default App;
