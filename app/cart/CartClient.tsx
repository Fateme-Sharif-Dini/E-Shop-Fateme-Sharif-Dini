"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
console.log(cartTotalAmount);

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center font-Sahel">
        <div className="text-2xl">سبد خرید شما خالی است.</div>
        <div>
          <Link
            href={"/"}
            className="
          text-slate-500 flex items-center gap-1 mt-2
          "
          >
            <span>خرید</span>
            <MdArrowBack />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="سبد خرید" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">محصول</div>
        <div className="justify-self-center">قیمت</div>
        <div className="justify-self-center">تعداد</div>
        <div className="justify-self-end">جمع کل</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>

      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="">
          <Button label="خالی کردن سبد خرید" onClick={() => {handleClearCart()}} small outline />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>مجموع خرید</span>
            <span>{cartTotalAmount}</span>
          </div>
          <p className="text-slate-500">
            مالیات و حمل و نقل در هنگام پرداخت محاسبه می شود.
          </p>
          <Button label="پرداخت" onClick={() => {}} />
          <Link
            href={"/"}
            className="
          text-slate-500 flex items-center gap-1 mt-2
          "
          >
            <span>افزودن به سبد خرید</span>
            <MdArrowBack />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
