import { Button } from "@/components/Button";
import Cards from "@/components/Card";
import FormInput from "@/components/FormInput";
import Header from "@/components/Header";
import Label from "@/components/Label";

export default function Home() {
  return (
    <div className="bg-stone-500 h-screen flex flex-col justify-center items-center gap-2">
      <Header text='Enter your Card Details' />
      <Cards />
      <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 w-[500px]">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label text="Card Holder Name" />
            <FormInput inputType="text" inputName="holderName" placeHolder="Card Holder Name" />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label text="Card Number" />
            <FormInput inputType="text" inputName="cardNumber" placeHolder="Card Number" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label text="Expiry Date" />
            <FormInput inputType="text" inputName="cardExpiry" placeHolder="MM/YY" />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label text="CVV" />
            <FormInput inputType="text" inputName="cvv" placeHolder="CVV" />
          </div>
        </div>
        <div className="w-full">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  )
}
