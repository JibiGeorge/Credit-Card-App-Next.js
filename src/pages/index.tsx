import { Button } from "@/components/Button";
import Cards from "@/components/Card";
import FormInput from "@/components/FormInput";
import Header from "@/components/Header";
import Label from "@/components/Label";
import { formatCVC, formatCardNumber, formatExpirationDate } from "@/utils/utils";
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  holderName: string;
  cardNumber: string;
  cardExpiry: string;
  cvc: string;
}

export default function Home() {

  const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm<Inputs>();
  const [focused, setFocused] = useState<string>();

  const handleFocus = (e: any) => {
    setFocused(e.target.name)

  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert('Successfully Sumited');
    reset();
    setFocused(undefined);
  }

  const handleChange = (e: any) => {
    if (e.target.name === 'cardNumber') {
      e.target.value = formatCardNumber(e.target.value);
    } else if (e.target.name === 'cardExpiry') {
      e.target.value = formatExpirationDate(e.target.value);
    } else if (e.target.name === 'cvc') {
      e.target.value = formatCVC(e.target.value)
    }

    setValue(e.target.name, e.target.value);
  }

  return (
    <div className="bg-stone-500 h-screen flex flex-col justify-center items-center gap-2">
      <Header text='Enter your Card Details' />
      <Cards watch={watch} focused={focused} />
      <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 w-[500px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label text="Card Holder Name" />
            <FormInput inputType="text" inputName="holderName" placeHolder="Card Holder Name" register={register} handleOnChange={handleChange} handleOnFocus={handleFocus} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label text="Card Number" />
            <FormInput inputType="text" inputName="cardNumber" placeHolder="Card Number" register={register} handleOnChange={handleChange} handleOnFocus={handleFocus} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label text="Expiry Date" />
            <FormInput inputType="text" inputName="cardExpiry" placeHolder="MM/YY" register={register} handleOnChange={handleChange} handleOnFocus={handleFocus} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label text="CVV" />
            <FormInput inputType="text" inputName="cvc" placeHolder="CVC" register={register} handleOnChange={handleChange} handleOnFocus={handleFocus} />
          </div>
        </div>
        <div className="w-full">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  )
}
