import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">دسته بندی های فروشگاه</h3>
            <Link href="#">گوشی های همراه</Link>
            <Link href="#">لپتاپ ها</Link>
            <Link href="#">دسکتاپ ها</Link>
            <Link href="#">ساعت ها</Link>
            <Link href="#">تلویزیون ها</Link>
            <Link href="#">تجهیزات جانبی</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">خدمات مشتری</h3>
            <Link href="#">با ما تماس بگیرید.</Link>
            <Link href="#">سیاست حمل و نقل</Link>
            <Link href="#">بازگشت و تعویض</Link>
            <Link href="#">سوالات متداول</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">درباره ما</h3>
            <p className="mb-2">
              در فروشگاه لوازم الکترونیکی ای-شاپ، ما به ارائه جدیدترین محصولات و
              بهترین دستگاه ها و لوازم جانبی به مشتریانمان مشغول هستیم. یک گستره
              بزرگ در انتخاب گوشی های همراه، تلویزیون ها، لپ تاپ ها، ساعت های هوشمند و
              لوازم جانبی.
            </p>
            <p>
              &copy; {new Date().getFullYear()} E~Shop. تمامی حقوق این وب سایت
              متعلق به <span className="font-amin">ای-شاپ</span> می باشد. 
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">ما را دنبال کنید!</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
