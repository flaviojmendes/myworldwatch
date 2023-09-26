import { Divider, Link } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="w-full bg-brown m-0 flex f-title text-white">
          <h1 className="font-bold text-[24px] m-0 ml-2">
            <a href="/">My World Watch</a>
          </h1>
          <div className="grow"></div>
          <a href="/about" className="m-auto mr-2">
            About
          </a>
        </div>
        <div className="w-full h-full bg-green px-5">
          <div className="m-auto mt-5 p-5 rounded-md container min-h-[300px] bg-yellow f-title">
            <h1 className="text-center text-5xl text-brown mb-10">About</h1>

            <p>
              For those many people that for some reason can't get to know other
              places physically: <strong>My World Watch</strong> is a portal
              where you can feel the vibe of different places around the world
              and feel more connected.
            </p>
            <hr className="m-auto my-5 border-black w-1/2" />
            <p>
              Para todas as pessoas que por qualquer motivo não possam conhecer
              outros lugares fisicamente: O <strong>My World Watch</strong> é um
              portal onde você pode sentir a energia de diferentes lugares do
              mundo e sentir conectado(a).
            </p>
            <hr className="m-auto my-5 border-black w-1/2" />
            <h2 className="text-center font-bold">
              <Link  style={{ textDecoration: 'none' }} href="https://github.com/flaviojmendes" isExternal={true}>
                ❤️ @flaviojmendes
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
