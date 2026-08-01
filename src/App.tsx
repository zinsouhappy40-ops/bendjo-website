import AppRouter from "./router/AppRouter";

interface AppProps {
  location?: string;
}

function App({ location }: AppProps) {
  return <AppRouter location={location} />;
}

export default App;
