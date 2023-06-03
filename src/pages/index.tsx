import Cards from "@/components/Card";
import Card from "@/components/Card";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-stone-500 h-screen flex flex-col justify-center items-center gap-2">
      <Header text='Enter your Card Details'/>
      <Cards/>
    </div>
  )
}
