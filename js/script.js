"use strict";

let divEl = document.createElement("div");
divEl.className = "div-container";
let backdrop;

const showModel = function (data) {
  divEl.innerHTML = "";
  const imgEl = document.createElement("img");
  imgEl.className = "img-fluid img__img";
  imgEl.setAttribute("alt", `${data.imgAlt}`);
  imgEl.setAttribute("src", `${data.img}`);

  const titleEl = document.createElement("h3");
  titleEl.className = "box-title";
  titleEl.textContent = `Name: ${data.name}`;

  const featureInfo = document.createElement("p");
  featureInfo.className = "feature__info";
  featureInfo.textContent = `${data.feature}`;

  const detailInfo = document.createElement("p");
  detailInfo.className = "detail__info";
  detailInfo.textContent = `${data.detailInfo}`;

  const closeIconEl = document.createElement("i");
  closeIconEl.className = "fas fa-times close__icon";

  closeIconEl.addEventListener("click", closeModelHandler);

  backdrop = document.createElement("div");
  backdrop.className = "backdrop";
  backdrop.addEventListener("click", closeModelHandler);

  document.body.style.overflow = "hidden";

  divEl.appendChild(imgEl);
  divEl.appendChild(titleEl);
  divEl.appendChild(featureInfo);
  divEl.appendChild(detailInfo);
  divEl.appendChild(closeIconEl);
  return document.body.appendChild(divEl), document.body.appendChild(backdrop);
};

const closeModelHandler = function () {
  divEl.remove();
  divEl.null;
  backdrop.remove();
  backdrop.null;
  document.body.style.overflow = "scroll";
  divEl.innerHTML = "";
};

// increase cart item function
const increaseCartItemFunction=function (data){
  const navCartIconCount = document.querySelector(".nav__cart-icon span");
  const navCartIconValue = parseInt(navCartIconCount.textContent);
  const newNavCartIconValue = navCartIconValue + 1;
  navCartIconCount.textContent = newNavCartIconValue;
}

// show cart items functions
  const cartBoxModelBackDrop=document.querySelector(".cart-box-model-backdrop")
  const cartModelBox=document.querySelector(".cart-model-box")
const showCartItems=function(){
  // console.log("clicked")
  cartBoxModelBackDrop.classList.add("active")
  cartModelBox.classList.add("active")
  document.body.style.overflow="hidden"
}

// nav link
if (document.querySelector(".nav__home-page")) {
  const navLinkItems = document.querySelector(".navbar__link-items");
  navLinkItems.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.classList.contains("nav-link")) {
      const id = event.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

  // sticky navbar
  const carouselExampleDark = document.querySelector("#carouselExampleDark");
  const topBottom = document.querySelector(".topBottom");
  const topBottomHeight = topBottom.getBoundingClientRect().height;

  const stickyNavFunction = function (entries) {
    const [entry] = entries;
    // console.log(entry)
    if (!entry.isIntersecting) {
      topBottom.classList.add("sticky");
    } else {
      topBottom.classList.remove("sticky");
    }
  };

  const carouselExampleDarkObserver = new IntersectionObserver(
    stickyNavFunction,
    {
      root: null,
      threshold: 0,
      rootMargin: `${topBottomHeight}px`,
    }
  );
  carouselExampleDarkObserver.observe(carouselExampleDark);

  /* smartphones slider start */
  // smart phone data
  const smartPhoneData = [
    {
      img: "../images/smartPhone1.png",
      imgAlt: "Aura 34 E5g",
      name: "Aura34 E5G",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "Power with speed",
      detailInfo:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/aura43E5G.png",
      imgAlt: "Aura 34 E5g",
      name: "Aura 43 E 5G",
      price: "29,999",
      delPrice: "34,599",
      discount: "13",
      feature: "Every emotion, In Portrait",
      detailInfo:
        "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/auraA1.png",
      imgAlt: "Aura 34 E5g",
      name: "Aura A1 E 5G",
      price: "120,000",
      delPrice: "150,000",
      discount: "22",
      feature: "Layer on the Luxury",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/aura3_1.png",
      imgAlt: "Aura 34 E5g",
      name: "Aura 34 E 5G",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "Power with speed",
      detailInfo:
        "Lorem4 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
  ];
  // smart phone data end

  const rowPhone = document.getElementById("rowPhone");
  function smartPhoneView(smartPhones) {
    rowPhone.innerHTML = "";
    smartPhones.forEach((smartPhone, index) => {
      const html = `              
        <div class="col-12 col-md-6 col-lg-3" key=${index}>
          <div class="phone-details">
            <img
              src=${smartPhone.img}
              alt=${smartPhone.imgAlt}
              class="d-block img-fluid"
            />
            <h5 class="">${smartPhone.name}</h5>
            <ul class="list-inline phone-price">
              <li class="list-inline-item">₹${smartPhone.price}</li>
              <li class="list-inline-item"><del>₹${smartPhone.delPrice}</del></li>
            </ul>
            <h6 class="phone-discount">${smartPhone.discount}% OFF</h6>
            <p>${smartPhone.feature}</p>
            <div class="buttons">
              <button class="btn__ btn_smartPhone_more" data-index="${index}">Know More</button>
              <button class="btn__ btn_smartPhone_add_to_cart" data-index="${index}">Add To Cart</button>
            </div>
          </div>
        </div>
      `;
      rowPhone.insertAdjacentHTML("beforeend", html);
    });

    rowPhone.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn_smartPhone_more")) {
        const indexAttribute = event.target.getAttribute("data-index");
        showModel(smartPhones[indexAttribute]);
      }
      if(event.target.classList.contains("btn_smartPhone_add_to_cart")){
        const smartPhoneATCIndex=event.target.getAttribute("data-index")
        // console.log(smartPhoneATCIndex)
        increaseCartItemFunction(smartPhones[smartPhoneATCIndex])
      }
    });
  }
  smartPhoneView(smartPhoneData);

  // television data
  const televisionData = [
    {
      img: "../images/tv1.png",
      imgAlt: "Aura 34 E5g",
      name: "Aura34 E5G",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/tv2.jpg",
      imgAlt: "Aura 43 E 5G",
      name: "Aura 43 E 5G",
      price: "29,999",
      delPrice: "34,599",
      discount: "13",
      feature: "",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/tv3.jpg",
      imgAlt: "Aura A1 E 5G",
      name: "Aura A1 E 5G",
      price: "120,000",
      delPrice: "150,000",
      discount: "22",
      feature: "",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/tv4.jpg",
      imgAlt: "Aura 34 E 5G",
      name: "Aura 34 E 5G",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
  ];

  const televisionRow = document.getElementById("televisionRow");
  const televisionDisplay = function (televisions) {
    televisionRow.innerHTML = "";
    televisions.forEach((television, index) => {
      const html = `
        <div class="col-12 col-md-6 col-lg-3" key=${index}>
          <div class="phone-details">
            <img
              src=${television.img}
              alt="Television"
              class="d-block img-fluid"
            />
            <h5 class="">${television.name}</h5>
            <ul class="list-inline phone-price">
              <li class="list-inline-item">₹${television.price}</li>
              <li class="list-inline-item"><del>₹${television.delPrice}</del></li>
            </ul>
            <h6 class="phone-discount">${television.discount}% OFF</h6>
            <div class="buttons">
              <button class="btn__ btn_television_more" data-index="${index}">Know More</button>
              <button class="btn__ btn_television_add_to_cart" data-index="${index}">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
      televisionRow.insertAdjacentHTML("beforeend", html);
    });

    televisionRow.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn_television_more")) {
        const indexTeleAttri = event.target.getAttribute("data-index");
        showModel(televisions[indexTeleAttri]);
      }
      if(event.target.classList.contains("btn_television_add_to_cart")){
        const televisionATCIndex=event.target.getAttribute("data-index")
        increaseCartItemFunction(televisions[televisionATCIndex])
      }
    });
  };
  televisionDisplay(televisionData);

  /* laptop and tablets slider start */
  const laptopTabletData = [
    {
      img: "../images/laptop1.png",
      imgAlt: "Laptop",
      name: "Aura Nootbook",
      price: "68,000",
      delPrice: "79,999",
      discount: "50",
      feature: "Pro Feature",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/tablet.png",
      imgAlt: "Aura pad 5",
      name: "Aura pad 5",
      price: "29,999",
      delPrice: "34,599",
      discount: "13",
      feature: "Pro Feature",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/tablet2.png",
      imgAlt: "Aura pad K3",
      name: "Aura pad K3",
      price: "120,000",
      delPrice: "150,000",
      discount: "22",
      feature: "Pro Feature",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/laptop2.png",
      imgAlt: "Aura i7 intal corei7",
      name: "Aura i7 intal corei7",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "Pro Feature",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
  ];

  const laptopTabletId = document.getElementById("laptopTabletId");
  const laptopTabletDisplay = function (laptopTablet) {
    laptopTabletId.innerHTML = "";
    laptopTablet.forEach((data, index) => {
      const html = `
        <div class="col-12 col-md-6 col-lg-3" key=${index}>
          <div class="phone-details">
            <img
              src=${data.img}
              alt=${data.imgAlt}
              class="d-block img-fluid"
            />
            <h5 class="">${data.name}</h5>
            <ul class="list-inline phone-price">
              <li class="list-inline-item">${data.price}</li>
              <li class="list-inline-item"><del>₹${data.delPrice}</del></li>
            </ul>
            <h6 class="phone-discount">${data.discount}% OFF</h6>
            <p>${data.feature}</p>
            <div class="buttons">
              <button class="btn__ btn_laptopTablet_more" data-index="${index}">Know More</button>
              <button class="btn__ btn_laptopTablet_add_to_cart" data-index="${index}">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
      laptopTabletId.insertAdjacentHTML("beforeend", html);
    });

    laptopTabletId.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn_laptopTablet_more")) {
        const laptopDataAttri = event.target.getAttribute("data-index");
        showModel(laptopTablet[laptopDataAttri]);
      }
      if(event.target.classList.contains("btn_laptopTablet_add_to_cart")){
        const laptopTabletATCIndex=event.target.getAttribute("data-index")
        increaseCartItemFunction(laptopTablet[laptopTabletATCIndex])
      }
    });
  };
  laptopTabletDisplay(laptopTabletData);
  // laptop and tablets end

  // audio data
  const audioData = [
    {
      img: "../images/airbuds4.png",
      imgAlt: "airbuds",
      name: "Aura AirBuds34 E5G",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/airbuds1.png",
      imgAlt: "airbuds",
      name: "Aura AirBuds E5G",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/airbuds2.png",
      imgAlt: "airbuds",
      name: "Aura AirBuds34 E5",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/airbuds1.png",
      imgAlt: "airbuds",
      name: "Aura AirBuds34 5G",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem4 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
  ];

  const audioId = document.getElementById("audioId");
  const audioDeviceDisplayFunction = function (audioDevice) {
    audioId.innerHTML = "";
    audioDevice.forEach((data, index) => {
      const html = `
        <div class="col-12 col-md-6 col-lg-3" key=${index}>
          <div class="phone-details">
            <img
              src=${data.img}
              alt=${data.imgAlt}
              class="d-block img-fluid"
            />
            <h5 class="">${data.name}</h5>
            <ul class="list-inline phone-price">
              <li class="list-inline-item">${data.price}</li>
              <li class="list-inline-item"><del>₹${data.delPrice}</del></li>
            </ul>
            <h6 class="phone-discount">${data.discount}% OFF</h6>
            <p>${data.feature}</p>
            <div class="buttons">
              <button class="btn__ btn_audioDevice_more" data-index="${index}">Know More</button>
              <button class="btn__ btn_audioDevice_add_to_cart" data-index="${index}">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
      audioId.insertAdjacentHTML("beforeend", html);
    });

    audioId.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn_audioDevice_more")) {
        const audioIndexAttri = event.target.getAttribute("data-index");
        showModel(audioDevice[audioIndexAttri]);
      }

      if(event.target.classList.contains("btn_audioDevice_add_to_cart")){
        const audioATCIndex=event.target.getAttribute("data-index")
        increaseCartItemFunction(audioDevice[audioATCIndex])
      }
    });
  };
  audioDeviceDisplayFunction(audioData);
  /* audio end */
  // home appliances start
  // homeApplianceData
  const homeAppliancesData = [
    {
      img: "../images/microwave.png",
      imgAlt: "Microwave Oven",
      name: "Microwave Oven",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/freezer.png",
      imgAlt: "Freezer",
      name: "Freezer",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/washing_machine.png",
      imgAlt: "Washing Machine",
      name: "Washing Machine",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/Split-Air-Conditioner.png",
      imgAlt: "Air conditioner",
      name: "Air conditioner",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem4 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
  ];

  const applianceId = document.getElementById("applianceId");
  const homeApplianceFunction = function (homeAppliance) {
    applianceId.innerHTML = "";
    homeAppliance.forEach((data, index) => {
      const html = `
      <div class="col-12 col-md-6 col-lg-3" key=${index}>
        <div class="phone-details">
          <img
            src=${data.img}
            alt=${data.imgAlt}
            class="d-block img-fluid"
          />
          <h5 class="">${data.name}</h5>
          <ul class="list-inline phone-price">
            <li class="list-inline-item">${data.price}</li>
            <li class="list-inline-item"><del>₹${data.delPrice}</del></li>
          </ul>
          <h6 class="phone-discount">${data.discount}% OFF</h6>
          <p>${data.feature}</p>
          <div class="buttons">
            <button class="btn__ btn_homeAppliance_more" data-index="${index}">Know More</button>
            <button class="btn__ btn_homeAppliance_add_to_cart" data-index="${index}">Add to Cart</button>
          </div>
        </div>
      </div>
      `;
      applianceId.insertAdjacentHTML("beforeend", html);
    });

    applianceId.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn_homeAppliance_more")) {
        const homeApplianceAttri = event.target.getAttribute("data-index");
        showModel(homeAppliance[homeApplianceAttri]);
      }
      if(event.target.classList.contains("btn_homeAppliance_add_to_cart")){
        const homeApplianceATCIndex=event.target.getAttribute("data-index");
        increaseCartItemFunction(homeAppliance[homeApplianceATCIndex])
      }
    });
  };
  homeApplianceFunction(homeAppliancesData);
  // home appliances end
  // smartLife start
  // smartLifeData
  const smartLifeData = [
    {
      img: "../images/airbuds10.png",
      imgAlt: "Aura buds",
      name: "Aura buds",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/smartPhone1.png",
      imgAlt: "Smart Phones",
      name: "Smart Phones",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/laptop10.png",
      imgAlt: "Aura laptop S3 i10",
      name: "Aura laptop S3 i10",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
    {
      img: "../images/washing_machine10.png",
      imgAlt: "Aura Washing Machine",
      name: "Aura Washing Machine",
      price: "39,999",
      delPrice: "79,999",
      discount: "50",
      feature: "",
      detailInfo:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. A tenetur asperiores labore temporibus voluptate illo, alias corrupti eius in vero deleniti quis facere ut consequuntur ratione similique obcaecati rem voluptatum! Maxime magni neque perferendis autem in, sapiente molestiae accusamus officiis, velit voluptas tempore ullam rem mollitia deserunt unde! Pariatur necessitatibus et fuga ea, iusto enim reiciendis consequuntur non neque eius! Voluptatibus, facilis quasi. Beatae, repudiandae reiciendis? Iure voluptatem veniam non.",
    },
  ];

  const smartLifeId = document.getElementById("smartLifeId");
  const smartLifeFunction = function (smartLife) {
    smartLifeId.innerHTML = "";
    smartLife.forEach((data, index) => {
      const html = `
      <div class="col-12 col-md-6 col-lg-3" key=${index}>
        <div class="phone-details">
          <img
            src=${data.img}
            alt=${data.imgAlt}
            class="d-block img-fluid"
          />
          <h5 class="">${data.name}</h5>
          <ul class="list-inline phone-price">
            <li class="list-inline-item">${data.price}</li>
            <li class="list-inline-item"><del>₹${data.delPrice}</del></li>
          </ul>
          <h6 class="phone-discount">${data.discount}% OFF</h6>
          <p>${data.feature}</p>
          <div class="buttons">
            <button class="btn__ btn_smartLife_more" data-index="${index}">Know More</button>
            <button class="btn__ btn_smartLife_add_to_cart" data-index="${index}">Add to Cart</button>
          </div>
        </div>
      </div>
      `;
      smartLifeId.insertAdjacentHTML("beforeend", html);
    });
    smartLifeId.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn_smartLife_more")) {
        const smartLifeIndexAttri = event.target.getAttribute("data-index");
        showModel(smartLife[smartLifeIndexAttri]);
      }

      if(event.target.classList.contains("btn_smartLife_add_to_cart")){
        const smartLifeATCIndex=event.target.getAttribute("data-index")
        increaseCartItemFunction(smartLife[smartLifeATCIndex])
      }
    });
  };
  smartLifeFunction(smartLifeData);
  // smartLife end

  // when click cart icon button
  const navCartIcon = document.querySelector(".nav__cart-icon");
  navCartIcon.addEventListener("click", showCartItems)
  // when click cart icon button end

  // when click cart close icon 
  const closeCartModel=document.getElementById("closeCartModel")
  closeCartModel.addEventListener("click", function(){
    cartBoxModelBackDrop.classList.remove("active")
    cartModelBox.classList.remove("active")
    document.body.style.overflow="scroll"
  })
}

// signup.html variable
  const fnameId = document.getElementById("fnameId");
  const lnameId = document.getElementById("lnameId");
  const userEmailId = document.getElementById("userEmailId");
  const userConfirmPasswordId = document.getElementById(
    "userConfirmPasswordId"
  );
  const checkboxId = document.getElementById("checkboxId");
  const confirmPasswordShowHide=document.querySelector("#confirmPasswordShowHide i")

  let userFNameError = document.getElementById("userFNameError");
  let userLNameError = document.getElementById("userLNameError");
  let userSignUpEmailError = document.getElementById("userEmailError");
  let userPasswordError = document.getElementById("userPasswordError");
  let userCPasswordError = document.getElementById("userCPasswordError");
  let checkboxError = document.getElementById("checkboxError");

// functions
const enterName = function (event) {
  const nameValue = event.target.value;
  // console.log(this)
  // console.log(event.target.value);
  const nameSpace = /^[A-Za-z\s]*$/;
  if (nameValue.trim().length === 0) {
    this.textContent = "Please enter your name!";
  } else if (!nameSpace.test(nameValue)) {
    this.textContent = "Please enter only letter!";
  } else {
    this.textContent = "";
  }
};

const enterEmail = function (event) {
  const emailValue = event.target.value;
  const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (emailValue.trim().length === 0) {
    this.textContent = "Please enter your email!";
  } else if (!emailRegEx.test(emailValue)) {
    this.textContent = "Please enter your valid mail!";
  } else {
    this.textContent = "";
  }
};

const enterNumber = function (inputElement, errorElement, maxLength) {
  const numberValue = inputElement.value;
  const numberRegEx = /^[+0-9\b]+$/;
  if (numberValue.trim().length === 0) {
    errorElement.textContent = "Please enter your number!";
  } else if (!numberRegEx.test(numberValue)) {
    errorElement.textContent = "Please enter only number!";
  } else if (numberValue.length !== maxLength) {
    errorElement.textContent = `Please enter your number minimum ${maxLength} digits`;
  } else {
    errorElement.textContent = "";
  }
};

const selectOptions = function (event) {
  const selectValue = event.target.value;
  if (selectValue === "") {
    this.textContent = "Please select any one options!";
  } else {
    this.textContent = "";
  }
};

const enterMessage = function (event) {
  const messageValue = event.target.value;
  if (messageValue.trim().length === 0) {
    this.textContent = "Please enter your message!";
  } else {
    this.textContent = "";
  }
};

const enterPassword = function (event) {
  const passwordValue = event.target.value;
  if (passwordValue.length < 7) {
    this.textContent = "Password must be carry 8 character!";
  } else if (passwordValue.search(/[0-9]/) == -1) {
    this.textContent = "Password must be carry atleast one character 0 to 9";
  } else if (passwordValue.search(/[a-z]/) == -1) {
    this.textContent = "Password must be carry atleast one lowercase letter";
  } else if (passwordValue.search(/[A-Z]/) == -1) {
    this.textContent = "Password must be carry atleast one uppercase letter";
  } else if (passwordValue.search(/[!\@\#\$\%\^\&\*\(\)\-\+\;\:\,\.]/) == -1) {
    this.textContent =
      "Password must be carry atleast one special character except ~,`";
  } else {
    this.textContent = "";
  }
};

const passwordShowHide = document.querySelector("#passwordShowHide i");
const userPasswordId = document.getElementById("userPasswordId");
// password show hide function
const passwordShowHideFunctionHandler = function (id, e) {
  const type = id.getAttribute("type");
  const typeValue = type === "password" ? "text" : "password";
  id.setAttribute("type", typeValue);
  // console.log(e)

  if (e.target.classList.contains("fa-eye-slash")) {
    e.target.classList.remove("fa-eye-slash");
    e.target.classList.add("fa-eye");
  } else {
    e.target.classList.add("fa-eye-slash");
    e.target.classList.remove("fa-eye");
  }
};

// check confirm password function
const checkPasswordHandler = function (event, error, id) {
  const confirmPasswordValue = event.target.value;
  // console.log(confirmPasswordValue)
  // console.log(id)
  if (confirmPasswordValue != id.value) {
    error.textContent = "Password and Confirm Password should be matched!";
  } else {
    error.textContent = "";
  }
};

// checkbox checked function
const checkboxChangeHandler=function(){
  // console.log(checkboxId)
  if(checkboxId.checked){
    this.textContent=""
  }else {
    this.textContent="Please select checkbox!"
  }
}

// popup
let model;
let overlay;
const thankYouPopUp = (title, text) => {
  model = document.createElement("div");
  model.className = "model";

  const titleEl = document.createElement("h3");
  titleEl.className = "model__title";
  titleEl.textContent = title;

  const textEl = document.createElement("p");
  textEl.className = "model__text";
  textEl.textContent = text;

  const closeBtnDivEl = document.createElement("div");
  closeBtnDivEl.className = "model__close-btn-div";

  const closeBtnEl = document.createElement("button");
  closeBtnEl.className = "model__close-btn";
  closeBtnEl.textContent = "Close";
  closeBtnEl.addEventListener("click", closeThankYouPopUp);

  overlay = document.createElement("div");
  overlay.className = "model__overlay";
  overlay.addEventListener("click", closeThankYouPopUp);

  closeBtnDivEl.appendChild(closeBtnEl);

  model.appendChild(titleEl);
  model.appendChild(textEl);
  model.appendChild(closeBtnDivEl);

  return (
    document.body.appendChild(model),
    document.body.appendChild(overlay),
    (document.body.style.overflow = "hidden")
  );
};

const closeThankYouPopUp = function () {
  model.remove();
  model.null;
  overlay.remove();
  overlay.null;
  document.body.style.overflow = "scroll";
};

// contact.html
const myForm = document.myForm;
if (myForm) {
  let firstNameError = document.getElementById("firstNameError");
  let lastNameError = document.getElementById("lastNameError");
  let emailError = document.getElementById("emailError");
  let numberOneError = document.getElementById("numberOneError");
  let numberTwoError = document.getElementById("numberTwoError");
  let numberThreeError = document.getElementById("numberThreeError");
  let selectError = document.getElementById("selectError");
  let messageError = document.getElementById("messageError");

  const nameId = document.getElementById("nameId");
  nameId.addEventListener("keyup", enterName.bind(firstNameError));

  const lastNameId = document.getElementById("lastNameId");
  lastNameId.addEventListener("keyup", enterName.bind(lastNameError));

  const emailId = document.getElementById("emailId");
  emailId.addEventListener("keyup", enterEmail.bind(emailError));

  const numberOneId = document.getElementById("numberOneId");
  numberOneId.addEventListener("keyup", function () {
    enterNumber(numberOneId, numberOneError, 3);
  });

  const numberTwoId = document.getElementById("numberTwoId");
  numberTwoId.addEventListener("keyup", function () {
    enterNumber(numberTwoId, numberTwoError, 4);
  });

  const numberThreeId = document.getElementById("numberThreeId");
  numberThreeId.addEventListener("keyup", function () {
    enterNumber(numberThreeId, numberThreeError, 3);
  });

  const formSelect = document.getElementById("formSelect");
  formSelect.addEventListener("change", selectOptions.bind(selectError));

  const messageId = document.getElementById("messageId");
  messageId.addEventListener("keyup", enterMessage.bind(messageError));

  const contactFormSubmitHandler = (event) => {
    const firstName = myForm.firstName;
    const lastName = myForm.lastName;
    const email = myForm.email;
    const numberOne = myForm.numberOne;
    const numberTwo = myForm.numberTwo;
    const numberThree = myForm.numberThree;
    const formSelect = myForm.formSelect;
    const message = myForm.message;

    if (firstName.value.trim().length === 0) {
      firstNameError.textContent = "Please enter your name!";
      event.preventDefault();
    } else if (firstNameError.textContent) {
      firstNameError.textContent = "Please enter your valid name!";
      event.preventDefault();
    } else if (lastName.value.trim().length === 0) {
      lastNameError.textContent = "Please enter your last name!";
      event.preventDefault();
    } else if (lastNameError.textContent) {
      lastNameError.textContent = "Please enter your valid name!";
      event.preventDefault();
    } else if (email.value.trim().length === 0) {
      emailError.textContent = "Please enter your email address!";
      event.preventDefault();
    } else if (emailError.textContent) {
      emailError.textContent = "Please enter your valid email address!";
      event.preventDefault();
    } else if (numberOne.value.trim().length === 0) {
      numberOneError.textContent = "Please enter your number!";
      event.preventDefault();
    } else if (numberOneError.textContent) {
      numberOneError.textContent = "Please enter your valid number!";
      event.preventDefault();
    } else if (numberTwo.value.trim().length === 0) {
      numberTwoError.textContent = "Please enter your number!";
      event.preventDefault();
    } else if (numberTwoError.textContent) {
      numberTwoError.textContent = "Please enter your valid number!";
      event.preventDefault();
    } else if (numberThree.value.trim().length === 0) {
      numberThreeError.textContent = "Please enter your number!";
      event.preventDefault();
    } else if (numberThreeError.textContent) {
      numberThreeError.textContent = "Please enter your valid number!";
      event.preventDefault();
    } else if (formSelect.value === "") {
      selectError.textContent = "Please select any one options!";
      event.preventDefault();
    } else if (selectError.textContent) {
      selectError.textContent = "Please select valid option!";
      event.preventDefault();
    } else if (message.value.trim().length === 0) {
      messageError.textContent = "Please enter your message!";
      event.preventDefault();
    } else if (messageError.textContent) {
      messageError.textContent = "Please enter your valid message!";
      event.preventDefault();
    } else {
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      numberOne.value = "";
      numberTwo.value = "";
      numberThree.value = "";
      formSelect.value = "";
      message.value = "";
      thankYouPopUp(
        "Thank You,",
        "Your information is successfully submitted, Our team contact soon!"
      );
      event.preventDefault();
    }
  };

  myForm.addEventListener("submit", contactFormSubmitHandler);
}
// contact.html end

// login.html
const myLoginForm = document.myLoginForm;
if (myLoginForm) {
  let userEmailError = document.getElementById("userEmailError");
  let userPasswordError = document.getElementById("userPasswordError");
  const loginEmailId = document.getElementById("loginEmailId");

  passwordShowHide.addEventListener("click", function (e) {
    passwordShowHideFunctionHandler(userPasswordId, e);
  });

  loginEmailId.addEventListener("keyup", enterEmail.bind(userEmailError));
  userPasswordId.addEventListener(
    "keyup",
    enterPassword.bind(userPasswordError)
  );

  const loginSubmitHandler = (event) => {
    const loginEmail = myLoginForm.email;
    const loginPassword = myLoginForm.validPassword;

    if (loginEmail.value.trim().length === 0) {
      userEmailError.textContent = "Please enter your email address!";
      event.preventDefault();
      return;
    } else if (userEmailError.textContent) {
      userEmailError.textContent = "Please enter your valid email address!";
      event.preventDefault();
      return;
    } else if (loginPassword.value.trim().length === 0) {
      userPasswordError.textContent = "Please enter your password!";
      event.preventDefault();
      return;
    } else if (userPasswordError.textContent) {
      userPasswordError.textContent = "Please enter your valid password!";
      event.preventDefault();
      return;
    } else {
      loginEmail.value = "";
      loginPassword.value = "";
      thankYouPopUp("Thank You!", "You successfully loged in up!");
      event.preventDefault();
    }
  };

  myLoginForm.addEventListener("submit", loginSubmitHandler);
}
// login.html end

// signup.html
const mySignUpForm = document.mySignUpForm;
if (mySignUpForm) {
  fnameId.addEventListener("keyup", enterName.bind(userFNameError));
  lnameId.addEventListener("keyup", enterName.bind(userLNameError));
  userEmailId.addEventListener("keyup", enterEmail.bind(userSignUpEmailError));
  userPasswordId.addEventListener(
    "keyup",
    enterPassword.bind(userPasswordError)
  );
  passwordShowHide.addEventListener("click", function (e) {
    passwordShowHideFunctionHandler(userPasswordId, e);
  });
  userConfirmPasswordId.addEventListener("keyup", function (event) {
    checkPasswordHandler(event, userCPasswordError, userPasswordId);
  });
  confirmPasswordShowHide.addEventListener("click", function(e){
    passwordShowHideFunctionHandler(userConfirmPasswordId, e)
  })

  checkboxId.addEventListener("change", checkboxChangeHandler.bind(checkboxError))

  const mySignUpFormSubmitHandler = (event) => {
    const fname = mySignUpForm.fname;
    const lname = mySignUpForm.lname;
    const userEmail = mySignUpForm.userEmail;
    const userPassword = mySignUpForm.userPassword;
    const userConfirmPassword = mySignUpForm.userConfirmPassword;
    const checkbox = mySignUpForm.checkbox;
    // console.log(checkbox)

    if (fname.value.trim().length === 0) {
      userFNameError.textContent = "Please enter your first name!";
      fname.focus();
      event.preventDefault();
      return;
    } else if (userFNameError.textContent) {
      userFNameError.textContent = "Please enter your valid name!";
      fname.focus();
      event.preventDefault();
      return;
    } else if (lname.value.trim().length === 0) {
      userLNameError.textContent = "Please enter your last name!";
      lname.focus();
      event.preventDefault();
      return;
    } else if (userLNameError.textContent) {
      userLNameError.textContent = "Please enter your valid last name!";
      lname.focus();
      event.preventDefault();
      return;
    } else if (userEmail.value.trim().length === 0) {
      userEmailError.textContent = "Please enter your email!";
      userEmail.focus();
      event.preventDefault();
      return;
    } else if (userEmailError.textContent) {
      userEmailError.textContent = "Please enter your valid email";
      userEmail.focus();
      event.preventDefault();
      return;
    } else if (userPassword.value.trim().length === 0) {
      userPasswordError.textContent = "Please enter your password!";
      userPassword.focus();
      event.preventDefault();
      return;
    } else if (userPasswordError.textContent) {
      userPasswordError.textContent = "Please enter your valid password!";
      userPassword.focus();
      event.preventDefault();
      return;
    } else if (userConfirmPassword.value.trim().length === 0) {
      userCPasswordError.textContent = "Please enter your confirm password!";
      userConfirmPassword.focus();
      event.preventDefault();
      return;
    } else if (userCPasswordError.textContent) {
      userCPasswordError.textContent = "Please enter valid confirm password!";
      userConfirmPassword.focus();
      event.preventDefault();
      return;
    } else if (!checkbox.checked){
      checkboxError.textContent="Please select checkbox!"
      checkbox.focus()
      event.preventDefault();
      return;
    } else {
      fname.value=""
      lname.value=""
      userEmail.value=""
      userPassword.value=""
      userConfirmPassword.value=""
      checkbox.checked=false;
      thankYouPopUp("Thank you!","Your registration is completed successfully!")
      event.preventDefault();
    }
  };

  mySignUpForm.addEventListener("submit", mySignUpFormSubmitHandler);
}
// signup.html end
