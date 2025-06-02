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

// magic ui = open source animated component library
// npx shadcn@latest init
//npx shadcn@latest add "https://magicui.design/r/bento-grid"
//http://localhost:3000/dock