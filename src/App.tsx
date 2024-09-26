import MainNavbar from "./components/MainNavbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuperHerosPage from "./pages/SuperHerosPage";
import RQSuperHeroPage from "./pages/RQSuperHeroPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  // ** declare and define component state and variables
  const queryClient = new QueryClient();

  // ** return component ui
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHerosPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroPage />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
