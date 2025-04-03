import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'
import "@radix-ui/themes/styles.css";

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
