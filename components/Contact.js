export default function Contact() {
  return (
    <>
      <section className="bg-gray-300 py-2">
        <div className="p-4">
          <div className="mt-2 w-10 h-0.5 bg-primary mb-2"></div>
          <h1 className="leading-none font-rubik text-3xl text-gray-900 uppercase">
            Contato
          </h1>
        </div>

        <div className="mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-6/12">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg px-2 rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                  <form
                    name="contact"
                    action="#"
                    method="POST"
                    data-netlify="true"
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
                        className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
      </section>
    </>
  );
}
