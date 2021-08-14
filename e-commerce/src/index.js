import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query'
import {BasketProvider} from './Contexts/BasketContext'
import {ChakraProvider} from '@chakra-ui/react'
import {FavoritesProvider} from './Contexts/FavoritesContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <BasketProvider>
            <FavoritesProvider>
              <App/>
            </FavoritesProvider>
          </BasketProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

