export default function Hero() {
  return (
    <div className="md:container mx-auto mb-5">
      <div className="h-1/2">
        {/* <span
          id="blackOverlay"
          className="absolute w-full h-2/4 bg-background bg-opacity-60 z-10"
        ></span> */}
        <video autoPlay loop muted className="object-cover h-full w-full">
          <source src="netv.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex">
        <div className="h-44 w-2 -my-10 ml-5 bg-primary z-40"></div>
        <div className="w-80 p-4">
          <h1 className="leading-none tracking-tighter font-rubik text-3xl font-bold text-black uppercase antialiased">
            Para se comunicar bem,
            <br /> é preciso estratégia!
          </h1>
          <h1 className="leading-none mt-4 tracking-tighter font-roboto text-2xl text-black antialiased">
            Seja na política, no mundo empresarial ou na vida pessoal.
          </h1>
        </div>
      </div>
    </div>
  );
}
