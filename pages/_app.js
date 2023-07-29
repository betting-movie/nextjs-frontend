import { theme } from "@/src/SDK/theme";
import "@/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}
