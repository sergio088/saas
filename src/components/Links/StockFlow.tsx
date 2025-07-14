import Link from "next/link";

export default function StockFlow() {
  return (
    <div className="flex items-center space-x-1 p-5">
      <span className="bg-blue-600 h-4 w-4 rounded"></span>
      <Link href="/">StockFlow</Link>
    </div>
  );
}
