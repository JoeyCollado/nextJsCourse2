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

// shadcn = powerful ui component library
// https://ui.shadcn.com/