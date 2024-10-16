import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./components/three/scene"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Scene />
 
      {/* z-10 relative */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <section className="container mx-auto">
            <h2 className="text-5xl">
              SEUNGJUN LEE <br />
              FRONT-END DEVELOPER <br />
              BASED IN <br />
              METRO VANCOUVER
              <br />
            </h2>
          </section>
        </main>
      </div>
    </div>
  );
}
