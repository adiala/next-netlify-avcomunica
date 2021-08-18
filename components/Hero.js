export default function Hero() {
  return (
    <div className="mb-5">
      <div className="h-1/2">
        <video autoPlay loop muted className="object-cover object-center h-full w-full">
          <source src="netv.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex md:container md:mx-auto">
        <div className="h-44 w-2 -my-10 ml-5 bg-primary z-40 md:h-32"></div>
        <div className="w-80 p-4 md:w-full">
          <h1 className="leading-none tracking-tighter font-rubik text-3xl font-bold text-gray-900 uppercase antialiased md:text-4xl">
            Para se comunicar bem,
            <br /> é preciso estratégia!
          </h1>
          <h1 className="leading-none mt-4 tracking-tighter font-rubik text-2xl md:text-2xl text-gray-700 antialiased">
            Seja na política, no mundo empresarial ou na vida pessoal.
          </h1>
        </div>
      </div>
    </div>
  );
}
