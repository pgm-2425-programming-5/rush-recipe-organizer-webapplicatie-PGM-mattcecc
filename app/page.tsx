"use client";

import { useRouter } from "next/navigation";
import Navbar from "./components/NavBar";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div className="home-container">
      <Navbar />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Organiseer je favoriete recepten!</h1>
        <button onClick={() => router.push("/recepten")}>
          Ga naar recepten
        </button>
      </main>
    </div>
  );
};

export default Home;
