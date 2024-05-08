import { useEffect } from "react";
import { useState } from "react";


const Hero = () => {

    const backgrounds = ['bg-basketball', 'bg-bicycle', 'bg-esgrima', 'bg-football', 'bg-running'];
    const [backgroundIndex, setBackgroundIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setBackgroundIndex((prevIndex) => {
          const nextIndex = prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1;
          return nextIndex;
        });
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, []);


    return (
        <section className={"h-[95vh] w-full transition-all "  + backgrounds[backgroundIndex] + " bg-no-repeat bg-center bg-cover"}>
            <div className={"hero min-h-screen transition-all bg-black/60"} >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl text-white font-bold font-open">Dale importancia a tus logros con portamedallas</h1>
                        <button className="btn btn-outline btn-accent">Comprar ahora</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero