import Layout from "../components/layout";
import { EventsProvider } from "../context/eventContext.js";
import { CoursesProvider } from "../context/CoursesProvider";
import "../styles/globals.css";
import { UsersProvider } from "../context/userContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <EventsProvider>
      <CoursesProvider>
        <UsersProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UsersProvider>
      </CoursesProvider>
    </EventsProvider>
  );
}
