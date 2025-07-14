import A from "../Links/A";

export default function Maisopçoes() {
  return (
    <div className=" lg:hidden">
      <button></button>
      <div className="hidden">
        <nav className="flex lg:space-x-3 items-center ">
          <A href="/Funcionalidades">Funcionalidades</A>
          <A href="Precos">Preços</A>
          <A href="/login">Fazer login</A>
        </nav>
      </div>
    </div>
  );
}
