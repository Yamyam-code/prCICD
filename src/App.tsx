import { ChakraProvider } from '@chakra-ui/react';
import Product from './components/Product';

function App() {
  return (
    <ChakraProvider>
      <Product />
    </ChakraProvider>
  );
}

export default App;
