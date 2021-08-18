export default function Contact() {
  return (
    <div className="bg-background px-4">
      <section className="container mx-auto lg:grid lg:grid-cols-2 gap-7 py-8">
        <div className="">
          <div className="mt-2 w-10 h-0.5 bg-primary mb-2 ml-4"></div>
          <h1 className="leading-none font-rubik text-3xl lg:text-4xl text-gray-900 uppercase px-4 mb-2">
            Contato
          </h1>
          <p className="px-4 mb-2 font-rubik font-medium antialiased text-gray-900 leading-relaxed tracking-tighter text-lg">
            Identificou algum serviço que esteja precisando?
          </p>
          <p className="pl-4 lg:pr-24 mb-4 lg:mb-8 font-roboto antialiased text-gray-900 leading-relaxed tracking-tight text-base">
            Estamos à disposição para ajudá-lo ou esclarecer qualquer dúvida!
            Basta entrar em contato conosco, que retornaremos o mais rápido
            possível.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-full">
              <div className="relative flex flex-col min-w-0 h-full w-full mb-6 px-2 rounded-lg">
                <div className="flex-auto p-5 lg:px-10 lg:py-0">
                  <form
                    name="contact"
                    action="#"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-black font-rubik text-md mb-2"
                        htmlFor="full-name"
                      >
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Nome Completo"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-black font-rubik text-md mb-2"
                        htmlFor="email"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-black font-rubik text-md mb-2"
                        htmlFor="message"
                      >
                        Mensagem
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        name="message"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Escreva uma mensagem..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className=" w-full text-rubik bg-primary text-gray-900 active:bg-gray-700 text-base font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded bg-contact bg-cover"></div>
      </section>
    </div>
  );
}
