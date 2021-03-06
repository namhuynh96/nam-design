const vietnameseSelector = document.getElementById(
  "language-selector__vietnamese"
);
const englishSelector = document.getElementById("language-selector__english");

const navWebTemplates = document.getElementsByClassName("nav__web-template");
const navPriceTable = document.getElementsByClassName("nav__price-table");
const navContact = document.getElementsByClassName("nav__contact");

const aboutMeHeading = document.getElementById("about-me__heading");
const aboutMeTitle = document.getElementById("about-me__title");
const aboutMeContent = document.getElementById("about-me__content");

const templatesHeading = document.getElementById("templates__heading");
const templatesRestaurant = document.getElementById("templates__restaurant");
const templatesSports = document.getElementById("templates__sports");
const templatesEducation = document.getElementById("templates__education");
const templatesFashion = document.getElementById("templates__fashion");
const templatesTravel = document.getElementById("templates__travel");
const templatesRealEstate = document.getElementById("templates__real-estate");
const templatesMore = document.getElementById("templates__more");

const priceHeading = document.getElementById("price__heading");
const priceNote = document.getElementById("price__note");
const priceTable3Month = document.getElementById("price__table-3month");
const priceTable6Month = document.getElementById("price__table-6month");
const priceTable12Month = document.getElementById("price__table-12month");
const priceTableCost = document.getElementById("price__table-cost");
const priceTableDomain = document.getElementById("price__table-domain");

const convinceHeading = document.getElementById("convince__heading");
const convinceStrategy = document.getElementById("convince__strategy");
const convinceMarketing = document.getElementById("convince__marketing");
const convinceDesign = document.getElementById("convince__design");
const convinceContent = document.getElementById("convince__content");

const contactMe = document.getElementById("contact__contact-me");

const translator = {
  en: {
    nav: {
      template: "Web templates",
      price: "Price table",
      contact: "Contact",
    },
    aboutME: {
      heading: "About me",
      title: "Web engineer",
      content:
        "With lots of experience in designing and developing websites, I will help you to build a professional webpage which runs smoothly on every device.",
    },
    webTemplates: {
      heading: "Web templates",
      templates: {
        restaurant: "Restaurant",
        sports: "Sports",
        education: "Education",
        fashion: "Fashion",
        travel: "Travel & Hotel",
        realEstate: "Real Estate",
      },
      more:
        "And there are a lot more templates, please contact me for customizing your own web design.",
    },
    price: {
      heading: "Price",
      note:
        "With package 3 and 6 months, you need to pay more 300.000 vnd for the domain.",
      table: {
        threeMonth: "3 months",
        sixMonth: "6 months",
        twelvesMonth: "12 months",
        price: "Price",
        domain: "Domain",
      },
    },
    convince: {
      heading: "Build a website to gain trust and branding from customers.",
      strategy: "Strategy",
      marketing: "Marketing",
      design: "Design",
      content:
        "It would be easy for customers to search all the information about your business or products. A fast loading, beautiful website will make customers have good impression about your brand.",
    },
    contact: {
      contactMe: "Contact me (Zalo, WhatsApp)",
    },
  },
  vi: {
    nav: {
      template: "Web m???u",
      price: "B???ng gi??",
      contact: "Li??n l???c",
    },
    aboutME: {
      heading: "V??? t??i",
      title: "L???p tr??nh web",
      content:
        "V???i nhi???u n??m kinh nghi???m trong l??nh v???c thi???t k??? web, t??i s??? gi??p b???n x??y d???ng m???t trang web chuy??n nghi???p, ph?? h???p tr??n m???i thi???t b???.",
    },
    webTemplates: {
      heading: "Web m???u",
      templates: {
        restaurant: "Nh?? h??ng",
        sports: "Th??? thao",
        education: "Gi??o d???c",
        fashion: "Th???i trang",
        travel: "Du l???ch & kh??ch s???n",
        realEstate: "B???t ?????ng s???n",
      },
      more:
        "V?? c??n nhi???u m???u kh??c n???a, h??y li??n l???c v???i t??i ????? thi???t k??? m???u website d??nh ri??ng cho b???n.",
    },
    price: {
      heading: "B???ng gi??",
      note:
        "V???i g??i 3 th??ng v?? 6 th??ng, b???n s??? c???n ph???i thanh to??n th??m t??n mi???n 300.000 vn??.",
      table: {
        threeMonth: "3 th??ng",
        sixMonth: "6 th??ng",
        twelvesMonth: "12 th??ng",
        price: "Chi ph??",
        domain: "T??n mi???n",
      },
    },
    convince: {
      heading: "X??y d???ng m???t website ????? t???o uy t??n v?? ni???m tin cho kh??ch h??ng",
      strategy: "Chi???n l?????c",
      marketing: "Marketing",
      design: "Thi???t k???",
      content:
        "Kh??ch h??ng s??? d??? d??ng truy c???p v?? t??m ki???m m???i th??ng tin v??? c???a h??ng, s???n ph???m c???a b???n. B???t k??? b???n ??ang kinh doanh m???t h??ng hay s???n ph???m g??, m???t trang web ?????p v?? t???i nhanh s??? khi???n kh??ch h??ng c?? ???n t?????ng t???t t??? nh???ng b?????c ?????u ti??n.",
    },
    contact: {
      contactMe: "Li??n l???c v???i t??i (Zalo, WhatsApp)",
    },
  },
};

const languageEditor = (translator) => {
  for (let i = 0; i < 2; i++) {
    const wE = navWebTemplates[i];
    wE.innerHTML = translator.nav.template;

    const pE = navPriceTable[i];
    pE.innerHTML = translator.nav.price;

    const cE = navContact[i];
    cE.innerHTML = translator.nav.contact;
  }

  aboutMeHeading.innerHTML = translator.aboutME.heading;
  aboutMeTitle.innerHTML = translator.aboutME.title;
  aboutMeContent.innerHTML = translator.aboutME.content;

  templatesHeading.innerHTML = translator.webTemplates.heading;
  templatesRestaurant.innerHTML = translator.webTemplates.templates.restaurant;
  templatesSports.innerHTML = translator.webTemplates.templates.sports;
  templatesTravel.innerHTML = translator.webTemplates.templates.travel;
  templatesFashion.innerHTML = translator.webTemplates.templates.fashion;
  templatesRealEstate.innerHTML = translator.webTemplates.templates.realEstate;
  templatesEducation.innerHTML = translator.webTemplates.templates.education;
  templatesMore.innerHTML = translator.webTemplates.more;

  priceHeading.innerHTML = translator.price.heading;
  priceNote.innerHTML = translator.price.note;
  priceTable3Month.innerHTML = translator.price.table.threeMonth;
  priceTable6Month.innerHTML = translator.price.table.sixMonth;
  priceTable12Month.innerHTML = translator.price.table.twelvesMonth;
  priceTableCost.innerHTML = translator.price.table.price;
  priceTableDomain.innerHTML = translator.price.table.domain;

  convinceHeading.innerHTML = translator.convince.heading;
  convinceStrategy.innerHTML = translator.convince.strategy;
  convinceMarketing.innerHTML = translator.convince.marketing;
  convinceDesign.innerHTML = translator.convince.design;
  convinceContent.innerHTML = translator.convince.content;

  contactMe.innerHTML = translator.contact.contactMe;
};

vietnameseSelector.addEventListener("click", () => {
  languageEditor(translator.vi);

  vietnameseSelector.classList.add("language-selector--selected");
  englishSelector.classList.remove("language-selector--selected");
});

englishSelector.addEventListener("click", () => {
  languageEditor(translator.en);

  vietnameseSelector.classList.remove("language-selector--selected");
  englishSelector.classList.add("language-selector--selected");
});
