import "../styles/globals.css";
import { CoursesProvider } from "../context/CoursesProvider";

function MyApp({ Component, pageProps }) {
  return (
    <CoursesProvider>
      <Component {...pageProps} />
    </CoursesProvider>
  );
}

export default MyApp;
