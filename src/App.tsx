import "./App.css";
import { Navbar, Footer } from "./components";
import { AppRouter } from "./AppRouter";


function App() {

  return (
    <main className="flex flex-col items-center mx-auto justify-center h-100vh">
      <Navbar />
      <AppRouter/>
      <Footer />
    </main>
  );
}

export default App;
