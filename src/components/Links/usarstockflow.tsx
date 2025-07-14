import Link from "next/link";

interface botaoprops {
  children: React.ReactNode;
}

export default function Button({ children }: botaoprops) {
  return (
    <div className="w-full lg:w-fit">
      <Link
        href="/cadastro"
        className="bg-blue-600 px-2 py-2 flex justify-center items-center w-full lg:w-fit text-white rounded hover:bg-blue-700"
      >
        {children}
      </Link>
    </div>
  );
}
