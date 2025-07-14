import Card from "@/components/Home/cardsInfo";

export default function DashboardPage() {
  return (
    <div className="p-[30px]">
      <Card text1="R$4535" text2="Earned this month"></Card>
      <Card text1="563" text2="New Clients" />
      <Card text1="1245" text2="New Sales" />
    </div>
  );
}
