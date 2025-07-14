import Button from "@/components/Links/usarstockflow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:px-16 x1:px-20 px-8 pt-6">
      <div className="order-1 lg:order-2 pt-8">
        <Image src="/estoque.jpeg" alt="Inventário" width={600} height={600} />
      </div>
      <div className="lg:w-3/4 order-1  ">
        <div>
          <h1 className="text-3xl lg:text-6xl font-bold">
            Seu estoque, <br /> sob controle. <br /> De onde você estiver
          </h1>
          <p className="text-gray-500 lg:w-2/3">
            Cadastre produtos, acompanhe seu estoque e evite faltas. Tudo em um
            só lugar, direto do seu navegador.
          </p>
        </div>
        <div className="pt-4">
          <Button>Quero meu StockFlow</Button>
        </div>
      </div>
    </div>
  );
}
