
import './App.scss'

import { ThemeProvider } from './ThemeProvider';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <Body></Body>
      </ThemeProvider>
    </>
  )
}

export default App
