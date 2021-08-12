import React from "react";
import Logo from "@components/Logo";

export default function Footer(props) {
  return (
    <footer className="bg-gray-200 border-b-4 border-primary">
      <div className="flex flex-col mx-auto justify-between justify-items-center space-y-4 pt-8 px-4 mt-8">
        <div className="w-60 mx-auto">
          <Logo />
        </div>
        <hr className="border-t-2 border-gray-300 w-full lg:w-1/2 mx-auto" />
        <div className="mx-auto flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 font-rubik text-base text-gray-800 uppercase">
          <a
            href={"/blog"}
            className="mx-auto hover:text-primary cursor-pointer"
          >
            Blog
          </a>
          <a
            href={props.urlServicos}
            className="mx-auto hover:text-primary cursor-pointer"
          >
            Serviços
          </a>
          <a
            href={props.urlClientes}
            className="mx-auto  hover:text-primary cursor-pointer"
          >
            Clientes e Portfolio
          </a>
          <a
            href={props.urlPerfil}
            className="mx-auto hover:text-primary cursor-pointer"
          >
            Perfil
          </a>
        </div>
        <div className="flex flex-row space-x-4 lg:space-x-8 mx-auto">
          {/* Início do Botão Linkedin */}
          <a
            href="https://www.linkedin.com/company/av-comunica"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-gray-600 hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 34 34"
              >
                <path
                  d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </a>
          {/* Fim do Botão Linkedin */}
          {/* Início do Botão Facebook */}
          <a
            href="https://www.facebook.com/assessoriaavcomunicacao"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-gray-600 hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 36 36"
              >
                <path
                  d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
                  fill="currentColor"
                ></path>
                <path
                  d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </a>
          {/* Fim do Botão Facebook */}
          {/* Início do Botão Instagram */}
          <a
            href="https://www.instagram.com/av_comunicacao/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-gray-600 hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </a>
          {/* Fim do Botão Instagram */}
          {/* Início do Botão Twitter */}
          <a
            href="https://twitter.com/av_comunicacao"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-gray-600 hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </a>
          {/* Fim do Botão Twitter */}
        </div>
        <p className="mx-auto text-center font-rubik text-sm lg:text-sm text-gray-800 uppercase">
          Copyright © {new Date().getFullYear()} Adriana Vasconcelos Comunicação
          Estratégica
        </p>
      </div>
    </footer>
  );
}
