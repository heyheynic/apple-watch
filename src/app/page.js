import Header from "@/components/Header";
import Main from "@/components/Main";


export default function Home() {
  return (
    <div className=" grid grid-rows-[auto,1fr] h-[90svh]">

      <header>
        <Header />
      </header>
      <main className=" self-center">
        <Main />
      </main>
    </div>
  );
}
