import Layout from "../components/layout";
import { EventsProvider } from "../context/eventContext.js";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <EventsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </EventsProvider>
  );
}
