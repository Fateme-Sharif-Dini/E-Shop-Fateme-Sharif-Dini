//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "iphone 14",
    description: "Short description",
    price: "52000000",
    brand: "apple",
    category: "گوشی همراه",
    inStock: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg",
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image: "https://m.media-amazon.com/images/I/417tEj3iJ8L._AC_.jpg",
      },
    ],
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "صفحه‌کلید روشن‌شده بی‌سیم پیشرفته Logitech MX Keys، تایپ پاسخ‌گوی لمسی، نور پس‌زمینه، بلوتوث، USB-C، Apple macOS، Microsoft Windows، Linux، iOS، Android، Metal Build (مشکی)",
    description:
      "کلیدهای ضربه ای کامل - کلیدهای کروی با شکل نوک انگشتان شما مطابقت دارند و با هر ضربه بازخورد رضایت بخشی را ارائه می دهند\nراحتی و ثبات - با اطمینان روی صفحه کلیدی که برای راحتی، ثبات و دقت ساخته شده است تایپ کنید.",
    price: "627000",
    brand: "logitech",
    category: "جهیزات جانبی",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://m.media-amazon.com/images/I/71gOLg2-kqL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      },
    ],
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "خوب بود.",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "مریم رستمی",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Apple iPhone 13, 64GB",
    description:
      'این محصول بازسازی شده، کاملا کاربردی و در شرایط عالی می باشد. با پشتیبانی 90 روزه گارانتی تجدید فروشگاه ای-شاپ.\n این محصول متعلق به قبل به صورت حرفه ای توسط فروشندگان واجد شرایط آمازون بازرسی، آزمایش و تمیز شده است. این محصول توسط اپل تایید نشده است.\n این محصول در "وضعیت عالی" است. صفحه‌نمایش و بدنه هیچ نشانه‌ای از آسیب ظاهری را از فاصله ۱۲ اینچی ندارند.\n ظرفیت باتری این محصول نسبت به نو بیش از ۸۰ درصد است.\n لوازم جانبی ممکن است اصلی نباشند، اما سازگار و کاملاً کاربردی خواهند بود. محصول ممکن است در جعبه عمومی باشد.\n محصول با ابزار حذف سیم‌کارت، شارژر و کابل شارژ ارائه می‌شود. هدفون و سیم کارت گنجانده نشده است.\n اگر این محصول طبق انتظار عمل نکند، ظرف 90 روز پس از دریافت واجد شرایط تعویض یا بازپرداخت است.\n تلفن های بازسازی شده تضمینی برای ضد آب بودن ندارند.',
    price: "40750000",
    brand: "Apple",
    category: "گوشی همراه",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "https://m.media-amazon.com/images/I/61g+McQpg7L._AC_SX679_.jpg",
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image: "https://m.media-amazon.com/images/I/713Om9vCHUL._AC_SX679_.jpg",
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image:
          "https://m.media-amazon.com/images/I/61thdjmfHcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      },
    ],
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "خوب بود.دوربین و جنس بدنه را دوست داشتم. تحویل هم سریع بود.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "علی اهتمامی",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "خوشم اومد!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "پوریا حسینی",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "ماوس بی‌سیم Logitech MX Master 2S – استفاده در هر سطحی، پیمایش بسیار سریع، شکل ارگونومیک، قابل شارژ، کنترل تا 3 رایانه Apple Mac و Windows، گرافیتی",
    description:
      "کنترل متقابل رایانه: ظرفیت تغییر بازی برای پیمایش یکپارچه در 3 رایانه و کپی کردن متن، تصاویر و فایل‌ها از یکی به دیگری با استفاده از جریان Logitech. اتصال دوگانه: استفاده با حداکثر 3 رایانه Windows یا Mac از طریق گیرنده Unifying یا بلوتوث هوشمند فناوری بی سیم. دکمه اشاره دارد.",
    price: "2370000",
    brand: "logitech",
    category: "تجهیزات جانبی",
    inStock: true,
    images: [
      {
        color: "Graphite",
        colorCode: " #383838",
        image:
          "https://m.media-amazon.com/images/I/61ni3t1ryQL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: 'ساعت هوشمند (پاسخ/برقراری تماس)، ساعت هوشمند 1.85 اینچی مردانه زنانه IP68 ضدآب، 100+ حالت ورزشی، ردیاب فعالیت تناسب اندام، مانیتور خواب، ضربان قلب، گام شمار، ساعت های هوشمند برای اندروید و iOS، 2023',
    description:
      'یادآوری تماس و پیام بلوتوث: ساعت هوشمند مجهز به بلندگوی HD است، پس از اتصال به تلفن خود از طریق بلوتوث، می توانید مستقیماًاز ساعت های هوشمند برای پاسخ دادن یا برقراری تماس، خواندن پیام ها، ذخیره مخاطبین، مشاهده تاریخچه تماس استفاده کنید. ساعت هوشمند می‌تواند اعلان‌های پیام بیشتری را در برنامه «GloryFit» تنظیم کند. در طول جلسات، تمرین و سواری هرگز هیچ تماس و پیامی را از دست نخواهید داد.',
    price: "2139000",
    brand: "Nerunsa",
    category: "ساعت",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://m.media-amazon.com/images/I/71s4mjiit3L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image:
          "https://m.media-amazon.com/images/I/71zbWSRMaYL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      },
    ],
    reviews: [],
  },
];
