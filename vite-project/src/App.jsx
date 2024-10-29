import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <main className=" max-w-7xl mx-auto">
      <h1 className=" text-2xl text-white ">
        <Navbar />
        <Hero />
      </h1>
    </main>
  );
};

export default App;
