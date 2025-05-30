import { Bebas_Neue } from "next/font/google";


const bebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <main>
      <h1>Bebas Neue</h1>
      <p className={`${bebasFont.className}`}>This is some random text.</p>

     
    </main>
  );
};

export default Home;

//lukacho ui = https://ui.lukacho.com/
//npm i clsx tailwind-merge framer-motion @tabler/icons-react
//http://localhost:3000/accordion