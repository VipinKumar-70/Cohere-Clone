import React from "react";

const LogoCarousel = () => {
  const logos = [
    "https://cdn.sanity.io/images/rjtqmwfu/production/befe7c0016c34552128b150fa5eacb834f64d721-143x40.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/21796a5fae97adccbbc4cbedf97d003f44da38f7-171x40.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/491963b94007f5aef361fccec729006c93b85d43-167x40.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/5a49d1303c3adc753fcec74fbd01b8c5c83f77fb-142x40.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/944ea1f82bc113321875b74fe77087b4fe9057e5-127x40.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/fcace4fabb2fde85d794e596ffa9cc4f25ea35df-157x40.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/45647a2727887a6daa07551d7dc46bf03efc141a-121x31.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/7625097eb1d0ff87fe14bd943707a7a59a70932f-135x40.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/0520a2ac96811a525de5ce8435d34b94f623e9e0-158x40.svg",
    "https://cdn.sanity.io/images/rjtqmwfu/production/a951eea679214f1278aafe006b5fb1ea1fe5f40c-169x40.svg",
  ];

  return (
    <div className="relative flex items-center sm:justify-center justify-start sm:flex-nowrap flex-wrap w-full bg-[#212121] py-8 px-12 lg:px-20 2xl:px-44">
      {/* Left Section */}
      <div className="flex-shrink-0 mr-8 mb-8 sm:mb-0">
        <div className="text-white">
          <h2>Our Customers</h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden w-full">
        {/* Gradient overlay (left) */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#212121] to-transparent pointer-events-none z-10"></div>
        {/* Gradient overlay (right) */}
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#212121] to-transparent pointer-events-none z-10"></div>

        <div className="flex animate-scroll">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Customer ${index + 1}`}
              className="h-10 mx-8"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
