import '@/styles/globals.css'
import Nav from "../components/Nav";
import { Provider, createClient } from 'urql'
import { StateContext } from '@/lib/context';

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });


export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}
