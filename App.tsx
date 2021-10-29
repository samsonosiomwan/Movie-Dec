import React from 'react';
import _APP from './_App';
import {RecoilRoot} from 'recoil'
import { QueryClient, QueryClientProvider } from "react-query";


export default function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
    <RecoilRoot>
      <_APP />
    </RecoilRoot>
    </QueryClientProvider>
  );
}


