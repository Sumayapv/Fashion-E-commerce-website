import NavBar from '../../components/NavBar/navbar';
import './home.css';

const Home = () => {
  return (
    <>
      <div className="homepage mx-20 my-5 tracking-tight ">
        <NavBar />
        <div
          className="w-full h-[80vh] rounded-4xl bg-cover bg-center "
          style={{ backgroundImage: "url('/display-img.png')" }}
        >
          <div className="display-text flex flex-col  h-full justify-center items-center text-white gap-2 ">
            <p className="text-7xl">Summer Arrival of Outfit</p>
            <p className="font-semibold">
              Discover quality fashion that reflects your style and makes
            </p>
            <p className="font-semibold">everyday enjoyable</p>
            <button className="bg-white text-black flex relative py-3 pl-7 w-60 gap-3 rounded-4xl">
              <span className="font-semibold"> EXPLORE PRODUCT</span>
              <i className="bi bi-arrow-right-circle-fill text-3xl absolute right-2 top-1.5"></i>
            </button>
          </div>
        </div>
        <div className="flex my-6 gap-6">
          <div
            className="bg-center h-[30vh] w-[50%] bg-cover  rounded-4xl flex justify-between items-end p-5"
            style={{ backgroundImage: "url('men-style-3.webp')" }}
          >
            <p className="text-4xl">
              Where dreams meet
              <br /> couture
            </p>
            <button className="bg-white w-40 h-12 rounded-4xl font-semibold ">
              Shop Now
            </button>
          </div>

          <div
            className="bg-center h-[30vh] w-[50%] bg-cover  rounded-4xl flex justify-between items-end p-7"
            style={{ backgroundImage: "url('women-style.avif')" }}
          >
            <p className="text-4xl">
              Enchanting styles <br /> for every women
            </p>
            <button className="bg-white w-40 h-12 rounded-4xl font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <div className="categories mt-20">
          <div className="flex justify-between mb-8">
            <p className="text-4xl">Browse by categories</p>
            <div className="category-buttons flex gap-3">
              <button className="border border-gray-400 rounded-4xl p-4 w-30 h-14">
                ALL
              </button>
              <button className="border border-gray-400 rounded-4xl p-4 w-30 h-14">
                WOMAN
              </button>
              <button className="border border-gray-400 rounded-4xl p-4 w-30 h-14">
                CHILDREN
              </button>
            </div>
          </div>
          <div className="category-img grid grid-cols-4 w-full gap-6 border-b-2 border-gray-200 pb-10">
            <div className=" h-full  relative">
              <img
                src="shoes.webp"
                className="w-full aspect-4/3 object-cover rounded-3xl"
              />
              <button className="absolute bg-white bottom-4 left-4 p-2 rounded-3xl w-25">
                SHOES
              </button>
            </div>
            <div className="h-full relative">
              <img
                src="watch.jpg"
                className="w-full aspect-4/3 object-cover rounded-3xl"
              />
              <button className="absolute bg-white bottom-4 left-4 p-2 rounded-3xl w-25">
                WATCH
              </button>
            </div>
            <div className="h-full relative">
              <img
                src="jewellery.webp"
                className="w-full aspect-4/3 object-cover rounded-3xl"
              />
              <button className="absolute bg-white bottom-4 left-4 p-2 rounded-3xl w-30">
                JEWELLERY
              </button>
            </div>
            <div className="h-full relative">
              <img
                src="tshirt.webp"
                className="w-full aspect-4/3 object-cover rounded-3xl"
              />
              <button className="absolute bg-white bottom-4 left-4 p-2 rounded-3xl w-25">
                T-SHIRT
              </button>
            </div>
          </div>
        </div>
        <div className="popular border-b-2 border-gray-200">
          <div className="title flex justify-between mt-10">
            <p className="text-4xl">Popular products</p>
            <div className="flex gap-3">
              <button className="border border-gray-300 rounded-4xl p-2 w-25 h-12">
                ALL
              </button>
              <button className="border border-gray-300 rounded-4xl p-2 w-30 h-12">
                SHORTS
              </button>
              <button className="border border-gray-300 rounded-4xl p-2 w-30 h-12">
                JACKETS
              </button>
              <button className="border border-gray-300 rounded-4xl p-2 w-30 h-12">
                SHOES
              </button>
              <button className="border border-gray-300 rounded-4xl p-2 w-30 h-12">
                T-SHIRT
              </button>
            </div>
          </div>
          <div className="mt-7">
            <div className="grid grid-cols-4 gap-6 mb-4  ">
              <div className=" col-span-1">
                <div className="h-100  ">
                  <img
                    src="men-suit.jpg"
                    alt=""
                    className=" w-full h-full object-cover rounded-4xl "
                  />
                </div>

                <p className="text-2xl font-semibold">Casual Shirt</p>
                <p className="text-gray-500 font-semibold text-xl">$225</p>
              </div>
              <div className="col-span-2">
                <div className="h-100  ">
                  <img
                    src="multi-tshirt.png"
                    alt=""
                    className=" h-full w-full object-cover rounded-4xl "
                  />
                </div>
                <p className="text-2xl font-semibold">Multi color-Shirt</p>
                <p className="text-gray-500 font-semibold text-xl">$125</p>
              </div>
              <div className="col-span-1">
                <div className="h-100  ">
                  <img
                    src="men-suit-2.avif"
                    alt=""
                    className="h-full w-full rounded-4xl object-cover"
                  />
                </div>
                <p className="text-2xl font-semibold">Modern Blazer</p>
                <p className="text-gray-500 font-semibold text-xl">$125</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mb-10 ">
            <div className="h-full">
              <img
                src="waterproof-jacket.webp"
                alt=""
                className=" rounded-4xl h-100 object-cover"
              />
              <p className="text-2xl font-semibold">Waterproof Jacket</p>
              <p className="text-gray-500 font-semibold text-xl">$125</p>
            </div>
            <div className="h-full">
              <img
                src="jacket.webp"
                alt=""
                className=" rounded-4xl h-100 object-cover"
              />
              <p className="text-2xl font-semibold">Jacket</p>
              <p className="text-gray-500 font-semibold text-xl">$125</p>
            </div>
            <div className="h-full">
              <img
                src="premium-jacket.avif"
                alt=""
                className=" rounded-4xl h-100 object-cover"
              />
              <p className="text-2xl font-semibold">Premium Jacket</p>
              <p className="text-gray-500 font-semibold text-xl">$125</p>
            </div>
            <div className="h-full">
              <img
                src="hoodie-winter.webp"
                alt=""
                className=" rounded-4xl h-100 object-cover"
              />
              <p className="text-2xl font-semibold">Hoodie Winter</p>
              <p className="text-gray-500 font-semibold text-xl">$125</p>
            </div>
          </div>
        </div>

        <div
          className="w-full h-80 bg-cover rounded-4xl mt-15 bg-center "
          style={{ backgroundImage: "url('fabric.png')" }}
        >
          <div className="flex flex-col justify-center items-center h-full gap-6 ">
            <button className="border rounded-4xl p-3 w-30 h-12">Offers</button>
            <p className="text-5xl text-white">EXCLUSIVE FASHION OFFERS</p>
            <p className="text-5xl text-white"> AWAIT FOR YOU</p>
            <button className="bg-white text-black flex relative py-3 pl-7 w-50 gap-3 rounded-4xl">
              <span className="font-semibold"> CHECK IT NOW</span>
              <i className="bi bi-arrow-right-circle-fill text-3xl absolute right-2 top-1.5"></i>
            </button>
          </div>
        </div>
        <div className="reviews mt-25 h-200">
          <div className="review-heading flex flex-col items-center text-6xl gap-5 font-semibold">
            <p>Over 350+ Customer</p>
            <p>reviews from our client</p>
          </div>
          <div className="review-pic relative mt-20">
            <img
              src="review-1.webp"
              alt=""
              className="rounded-full w-110 absolute left-60 top-10"
            />
            <img
              src="review-2.webp"
              alt=""
              className="rounded-full w-110 object-cover absolute right-60 top-10"
            />
            <img
              src="review-3.jpg"
              alt=""
              className="rounded-full w-60 h-60 object-cover absolute right-2 top-65"
            />
            <img
              src="review-4.jpg"
              alt=""
              className="rounded-full w-60 h-60 object-cover absolute right-2 top-5"
            />
            <img
              src="review-5.jpg"
              alt=""
              className="rounded-full w-60 h-60 absolute top-5 "
            />
            <img
              src="review-6.png"
              alt=""
              className="rounded-full w-60 absolute top-65"
            />
          </div>
        </div>
        <div>
          <div className="">
            <p className="text-7xl flex justify-center mb-5">
              You might also like
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-15 ">
            <div>
              <img
                src="polo.jpeg"
                alt=""
                className="h-80 w-full object-center rounded-3xl mb-5"
              />
              <p className="text-2xl font-semibold">Polo with Contrast Trims</p>
              <div className="flex gap-5">
                <p className="text-2xl">$212</p>
                <p className="text-gray-400 text-[20px] line-through">$242</p>
                <p className="bg-red-200 text-red-500 p-1 rounded-2xl font-semibold w-15 flex justify-center">
                  -20%
                </p>
              </div>
            </div>
            <div>
              <img
                src="t-shirt.png"
                alt=""
                className="h-80 w-full object-cover rounded-3xl mb-5"
              />
              <p className="text-2xl font-semibold">Gradient Graphic T-shirt</p>
              <p className="text-2xl">$145</p>
            </div>

            <div>
              <img
                src="polo-2.jpg"
                alt=""
                className="h-80 w-full object-cover rounded-3xl mb-5"
              />
              <p className="text-2xl font-semibold">Sunglass</p>
              <p className="text-2xl">$100</p>
            </div>
            <div>
              <img
                src="jacket-2.avif"
                alt=""
                className="h-80 w-full object-cover rounded-3xl mb-5"
              />

              <p className="text-2xl font-semibold">Striped Jacket</p>
              <div className="flex gap-5">
                <p className="text-2xl">$120</p>
                <p className="text-gray-400 text-[20px] line-through">$150</p>
                <p className="bg-red-200 text-red-500 p-1 rounded-2xl font-semibold w-15 flex justify-center">
                  -30%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-70 bg-cover rounded-4xl mt-15 bg-center "
          style={{ backgroundImage: "url('offers.png')" }}
        >
          <div className="flex justify-between h-full">
            <div className="flex items-center">
              <p className="text-4xl text-white p-10 font-semibold">
                STAY UPTO DATE ABOUT OUR
                <br /> LATEST OFFERS
              </p>
            </div>
            <div className="flex justify-center flex-col gap-10 p-10 ">
              <button className="bg-white p-4 rounded-4xl font-semibold flex gap-3 w-90 justify-center ">
                <i class="bi bi-envelope"></i>
                Enter your email here
              </button>
              <button className="bg-white p-4 rounded-4xl font-semibold">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
        <div className="footer ">
          <div className="flex justify-between border-b-2 border-gray-200 mt-15 pb-15">
            <div className="nuewear flex flex-col gap-5">
              <div className="flex gap-3">
                <img src="logo-2.png" alt="" className="w-10 h-10" />
                <p className="text-4xl font-serif">NueWear</p>
              </div>
              <p className="text-gray-400">
                Curated fashion that reflects your style and <br /> confidence,
                for women and men
              </p>
              <div className="social-media flex gap-5 text-xl">
                <i class="bi bi-twitter-x"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-whatsapp"></i>
              </div>
            </div>
            <div className="company">
              <p className="mb-5 text-xl">COMPANY</p>
              <div className="text-gray-400 flex flex-col gap-3">
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>
            </div>
            <div className="help">
              <p className="mb-5 text-xl">HELP</p>
              <div className="text-gray-400 flex flex-col gap-3">
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="faq">
              <p className="mb-5 text-xl">FAQ</p>
              <div className="text-gray-400 flex flex-col gap-3">
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>
            </div>
            <div className="resources">
              <p className="mb-5 text-xl">RESOURCES</p>
              <div className="text-gray-400 flex flex-col gap-3">
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
              </div>
            </div>
          </div>
          <div className="footer-2 flex justify-between mt-5">
            <div>
              <p className="text-gray-400">
                NueWear <i class="bi bi-c-circle"></i> 2026, All Rights Reserved
              </p>
            </div>
            <div className="payments flex gap-5">
              <img
                src="visa.svg"
                alt=""
                className="w-15 h-10 shadow rounded-xl p-3"
              />
              <img
                src="mastercard.svg"
                alt=""
                className="w-15 h-10 shadow rounded-xl p-3"
              />
              <img
                src="paypal.svg"
                alt=""
                className="w-15 h-10 shadow rounded-xl p-3"
              />
              <img
                src="apple-pay.svg"
                alt=""
                className="w-15 h-10 shadow rounded-xl p-3"
              />
              <img
                src="gpay.svg"
                alt=""
                className="w-15 h-10 shadow rounded-xl p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
