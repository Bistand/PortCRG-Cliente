import Layout from "../components/layout";
import { EventsProvider } from "../context/eventContext.js";
import { CoursesProvider } from "../context/CoursesProvider";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <EventsProvider>
      <CoursesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CoursesProvider>
    </EventsProvider>
  );
}
