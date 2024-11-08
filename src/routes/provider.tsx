import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import queryClient from "../api/react-query";
import Header from "../components/header";
import store, { persistor } from "../store";
import { NuqsAdapter } from "nuqs/adapters/react";
import { Toaster } from "react-hot-toast";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <NextUIProvider>
              <NuqsAdapter>
                <Header />
                {children}
                <Toaster />
              </NuqsAdapter>
            </NextUIProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;
