import AppProvider from "./routes/provider";
import AppRouter from "./routes/router";

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
