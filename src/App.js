import './App.css';

import { ChakraProvider } from '@chakra-ui/react'

// SITE COMPONENTS
import SHeader from './components/SHeader';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <SHeader/>
    </ChakraProvider>
  )
}

export default App;
