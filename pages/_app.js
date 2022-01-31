import { SnackbarProvider } from "notistack";
import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";

export default function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SnackbarProvider>
  );
}





