import { BigOfferDetails, Icon } from "./types/types";
import { FaRocketchat, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaSearch } from "react-icons/fa";
import { SiScala } from "react-icons/si";
import { BsPhone } from "react-icons/bs";
import { TbDeviceGamepad2, TbArrowsShuffle } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { GoRuby } from "react-icons/go";
import { MdAnalytics, MdOutlineSecurity, MdComputer } from "react-icons/md";
import { RiNetflixLine } from "react-icons/ri";

export const companyTypes = [
  {
    value: "Startup",
    label: "Startup",
  },
  {
    value: "Software House",
    label: "Software House",
  },
  {
    value: "E-commerce",
    label: "E-commerce",
  },
  {
    value: "Corporation",
    label: "Corporation",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export const companyInustries = [
  {
    value: "Fintech",
    label: "Fintech",
  },
  {
    value: "Blockchain",
    label: "Blockchain",
  },
  {
    value: "Medicine",
    label: "Medicine",
  },
  {
    value: "Military",
    label: "Military",
  },
  {
    value: "Martech",
    label: "Martech",
  },
  {
    value: "IoT",
    label: "IoT",
  },
  {
    value: "Logistic",
    label: "Logistic",
  },
  {
    value: "Beauty",
    label: "Beauty",
  },
  {
    value: "Travel",
    label: "Travel",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export const exp = [
  {
    value: "Junior",
    label: "Junior",
  },
  {
    value: "Mid",
    label: "Mid",
  },
  {
    value: "Mandate Contract",
    label: "Senior",
  },
];

export const employmentTypes = [
  {
    value: "B2B",
    label: "B2B",
  },
  {
    value: "Permanent",
    label: "Permanent",
  },
  {
    value: "Mandate Contract",
    label: "Mandate Contract",
  },
];

export const currency = [
  {
    value: "PLN",
    label: "PLN",
  },
  {
    value: "EUR",
    label: "EUR",
  },
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "GBP",
    label: "GBP",
  },
  {
    value: "CHF",
    label: "CHF",
  },
];

export const techStackOffer = [
  {
    value: "CSS",
    label: "CSS",
  },
  {
    value: "Java Script",
    label: "Java Script",
  },
  {
    value: "Support",
    label: "Support",
  },
  {
    value: "Node JS",
    label: "Node JS",
  },
  {
    value: "HTML",
    label: "HTML",
  },
  {
    value: "Python",
    label: "Python",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Angular",
    label: "Angular",
  },
  {
    value: "Github",
    label: "Github",
  },
  {
    value: "PHP",
    label: "PHP",
  },
  {
    value: "Scala",
    label: "Scala",
  },
  {
    value: "Mobile",
    label: "Mobile",
  },
  {
    value: "Testing",
    label: "Testing",
  },
  {
    value: "Game",
    label: "Game",
  },
  {
    value: "Analytics",
    label: "Analytics",
  },
  {
    value: "Security",
    label: "Security",
  },
];

export const stackIcons: Icon[] = [
  {
    _id: "01",
    stack: "CSS",
    stackFullName: "CSS",
    background: "linear-gradient(-90deg, rgb(236, 76, 182), rgb(212, 75, 213));",
    logo: <MdComputer />,
    url: "https://justjoin.it/static/media/other.c34be08c.svg",
  },
  {
    _id: "02",
    stack: "JS",
    stackFullName: "JavaScript",
    background: " linear-gradient(-90deg, rgb(255, 199, 6), rgb(255, 175, 0))",
    logo: <FaJs />,
    url: "https://justjoin.it/static/media/javascript.59ed3183.svg",
  },
  {
    _id: "HTML",
    stack: "HTML",
    stackFullName: "HTML",
    background: "linear-gradient(-90deg, rgb(255, 125, 80), rgb(253, 93, 33))",
    logo: <FaHtml5 />,
    url: "https://justjoin.it/static/media/html.d0655391.svg",
  },
  {
    _id: "04",
    stack: "Python",
    stackFullName: "Python",
    background: " linear-gradient(-90deg, rgb(31, 94, 182), rgb(31, 123, 196))",
    logo: <FaPython />,
    url: "https://justjoin.it/static/media/python.4346b5b4.svg",
  },
  {
    _id: "05",
    stack: "Java",
    stackFullName: "Java",
    background: " linear-gradient(-90deg, rgb(250, 101, 107), rgb(249, 89, 122))",
    logo: <FaJava />,
    url: "https://justjoin.it/static/media/java.71df257a.svg",
  },
  {
    _id: "06",
    stack: "Support",
    stackFullName: "Support",
    background: "linear-gradient(-90deg, rgb(2, 175, 235), rgb(27, 104, 194))",
    logo: <FaRocketchat />,
    url: "https://justjoin.it/static/media/support.0c44fab2.svg",
  },
  {
    _id: "07",
    stack: "Node",
    stackFullName: "Node",
    background: "linear-gradient(-90deg, rgb(38, 198, 218), rgb(112, 235, 242));",
    logo: <FiSettings />,
    url: "https://justjoin.it/static/media/admin.0e6e6e83.svg",
  },
  {
    _id: "08",
    stack: "Vue",
    stackFullName: "Vue.js",
    background: "linear-gradient(-90deg, rgb(82, 102, 225), rgb(129, 102, 224))",
    logo: <TbArrowsShuffle />,
    url: "https://justjoin.it/static/media/devops.3b10a632.svg",
  },
  {
    _id: "09",
    stack: "Angular",
    stackFullName: "Angular",
    background: "linear-gradient(-90deg, rgb(239, 83, 80), rgb(244, 67, 54))",
    logo: <RiNetflixLine />,
    url: "https://justjoin.it/static/media/net.d2fe8f90.svg",
  },
  {
    _id: "010",
    stack: "Github",
    stackFullName: "Github",
    background: "linear-gradient(-90deg, rgb(59, 89, 152), rgb(112, 140, 199))",
    logo: <GoRuby />,
    url: "https://justjoin.it/static/media/ruby.b06393ff.svg",
  },
  {
    _id: "011",
    stack: "PHP",
    stackFullName: "PHP",
    background: "linear-gradient(-90deg, rgb(65, 173, 250), rgb(21, 124, 252))",
    logo: <FaPhp />,
    url: "https://justjoin.it/static/media/php.c114d6f0.svg",
  },
  {
    _id: "012",
    stack: "Scala",
    stackFullName: "Scala",
    background: "linear-gradient(-90deg, rgb(248, 100, 104), rgb(241, 70, 76))",
    logo: <SiScala />,
    url: "https://justjoin.it/static/media/scala.00f4a72c.svg",
  },
  {
    _id: "013",
    stack: "Mobile",
    stackFullName: "Mobile",
    background: "linear-gradient(-90deg, rgb(224, 79, 134), rgb(186, 74, 141))",
    logo: <BsPhone />,
    url: "https://justjoin.it/static/media/mobile.865f38ae.svg",
  },
  {
    _id: "014",
    stack: "Testing",
    stackFullName: "Testing",
    background: "linear-gradient(-90deg, rgb(0, 150, 136), rgb(0, 121, 107))",
    logo: <FaSearch />,
    url: "https://justjoin.it/static/media/testing.4e552286.svg",
  },
  {
    _id: "015",
    stack: "Game",
    stackFullName: "Game",
    background: "linear-gradient(-90deg, rgb(255, 64, 129), rgb(236, 64, 122))",
    logo: <TbDeviceGamepad2 />,
    url: "https://justjoin.it/static/media/game.6b4b59e5.svg",
  },
  {
    _id: "016",
    stack: "Analytics",
    stackFullName: "Analytics",
    background: "linear-gradient(-90deg, rgb(59, 89, 152), rgb(112, 140, 199))",
    logo: <MdAnalytics />,
    url: "https://justjoin.it/static/media/analytics.49df0e86.svg",
  },
  {
    _id: "017",
    stack: "Security",
    stackFullName: "Security",
    background: "linear-gradient(-90deg, rgb(83, 109, 254), rgb(13, 71, 161))",
    logo: <MdOutlineSecurity />,
    url: "https://justjoin.it/static/media/security.df7faefd.svg",
  },
];

export const data: BigOfferDetails[] = [
  {
    _id: "0",
    dateAdded: "2021-01-12",
    title: "Python Developer",
    remote: true,
    city: "Warszawa",
    companyName: "Santander",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    adress: "ul. Wyszyńskiego  Warszawa",
    geolocation: { latitude: "52.238931", longitude: "20.98187 " },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Mobile", stackLvl: "master", value: 5 },
      { stackName: "Python", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "2",
    dateAdded: "2022-09-04",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "7800",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    geolocation: { latitude: "52.233992", longitude: "21.010938" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "Github", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Python", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Java", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "3",
    dateAdded: "2022-09-04",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    remote: false,
    amount: "8900",
    city: "Gdańsk",
    companyName: "Neoteric",
    adress: "ul. Słowiańska  Warszawa",
    geolocation: { latitude: "52.276415", longitude: "20.58023 " },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Testing", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },

  {
    _id: "4",
    dateAdded: "2022-08-28",
    logo: "https://bucket.justjoin.it/offers/company_logos/original/9a01ebb3a3cff2dd8d5abeb7719c88d65a2bfb2f.png?1649836095",
    title: "Node Developer",
    remote: true,
    amount: "10000",
    city: "Wrocław",
    companyName: "Cschark",
    adress: "ul. Wyszyńskiego  Wrocław",
    geolocation: { latitude: "51.119459", longitude: "17.051281" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Mobile", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "5",
    dateAdded: "2022-08-28",
    logo: "https://bucket.justjoin.it/offers/company_logos/original/838f09ef0c79515c2d3f293877bd225082233530.jpg?1646232331",
    title: "Node Developer",
    remote: false,
    city: "Kraków",
    companyName: "Cschark",
    adress: "ul. Wyszyńskiego  Kraków",
    geolocation: { latitude: "50.007481", longitude: "20.008465" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Security", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "6",
    dateAdded: "2022-09-04",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/946d2546b9be88aa4d43d8a9c239c4cd6fdfdc3d.png?1654855198",
    title: "Node Developer",
    remote: false,
    amount: "10000",
    city: "Berlin",
    companyName: "Cschark",
    adress: "Hafenpl. Berlin",
    geolocation: { latitude: "52.504579", longitude: "13.373156" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "PHP", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "7",
    dateAdded: "2022-08-04",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/b2d788fbd968f44676722ea6d26ec1da94a3ece1.png?1653301626",
    title: "Node Developer",
    remote: false,
    amount: "10000",
    city: "Dresden",
    companyName: "Cschark",
    adress: "Wiene Str. Dresden",
    geolocation: { latitude: "51.039276", longitude: "13.738294" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Scala", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "8",
    dateAdded: "2022-08-06",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/4790e438b8c7e2be1584b156222300593123c998.jpg?1658224535",
    title: "Node Developer",
    remote: false,
    amount: "10000",
    city: "Frankfurt an der Oder",
    companyName: "Cschark",
    adress: "Mixdorfer Str.  Frankfurt an der Oder",
    geolocation: { latitude: "52.335005", longitude: "14.543694" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Vue", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "master", value: 5 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "9",
    dateAdded: "2022-08-10",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/a2b551939d33ad8cf56cb68645ad4ddbc88192b1.png?1657796749",
    title: "Node Developer",
    remote: true,
    amount: "10000",
    city: "Szczecin",
    companyName: "Cschark",
    adress: "ul. Śląska  Szczecin",
    geolocation: { latitude: "53.429464", longitude: "14.546917" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Java", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "10",
    dateAdded: "2022-08-11",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    remote: false,
    city: "Koszalin",
    companyName: "NewIT",
    adress: "ul. Mieszka I  Koszalin",
    geolocation: { latitude: "54.189077", longitude: "16.163088" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Game", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "11",
    dateAdded: "2022-08-12",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    remote: false,
    amount: "8900",
    city: "Poznań",
    companyName: "Neoteric",
    adress: "ul. Kościelna  Poznań",
    geolocation: { latitude: "52.413394", longitude: "16.903715" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Java", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "12",
    dateAdded: "2022-08-18",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    remote: true,
    city: "Zielona Góra",
    companyName: "NewIT",
    adress: "ul. Ogrodowa  Zielona Góra",
    geolocation: { latitude: "51.931358", longitude: "15.501441" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Scala", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "13",
    dateAdded: "2022-09-01",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    remote: true,
    amount: "8900",
    city: "Opole",
    companyName: "NewIT",
    adress: "ul. 1 maja  Opole",
    geolocation: { latitude: "50.663474", longitude: "17.9312" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "PHP", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Game", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "14",
    dateAdded: "2022-08-20",

    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    remote: false,
    city: "Katowice",
    companyName: "Neoteric",
    adress: "ul. 1 maja  Katowice",
    geolocation: { latitude: "50.2577", longitude: "19.037254" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Testing", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "master", value: 5 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "15",
    dateAdded: "2022-08-21",

    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/d74c9af166641766f091238ced82c668ccd04199.png?1658312380",
    title: "Node Developer",
    remote: true,
    amount: "10000",
    city: "Bielkso-Biała",
    companyName: "Cschark",
    adress: "ul. Łagodna  Bielkso-Biała",
    geolocation: { latitude: "49.805419", longitude: "19.058589" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Analytics", stackLvl: "master", value: 5 },
      { stackName: "Github", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "master", value: 5 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "16",
    dateAdded: "2022-08-14",

    logo: "https://bucket.justjoin.it/offers/company_logos/original/9a01ebb3a3cff2dd8d5abeb7719c88d65a2bfb2f.png?1649836095",
    title: "Node Developer",
    remote: true,
    amount: "10000",
    city: "Ostrava",
    companyName: "Cschark",
    adress: "ul. Sportovni  Ostrava",
    geolocation: { latitude: "49.824583", longitude: "18.269824" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Analytics", stackLvl: "master", value: 5 },
      { stackName: "Game", stackLvl: "advanced", value: 4 },
      { stackName: "Mobile", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "master", value: 5 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "PHP", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "17",
    dateAdded: "2022-09-04",

    logo: "https://bucket.justjoin.it/offers/company_logos/original/9a01ebb3a3cff2dd8d5abeb7719c88d65a2bfb2f.png?1649836095",
    title: "Node Developer",
    remote: false,
    amount: "10000",
    city: "Rzeszów",
    companyName: "Cschark",
    adress: "ul. Targowa  Rzeszów",
    geolocation: { latitude: "50.038662", longitude: "22.009999" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "PHP", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "CSS", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Vue", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "18",
    dateAdded: "2022-09-04",

    logo: "https://bucket.justjoin.it/offers/company_logos/original/9a01ebb3a3cff2dd8d5abeb7719c88d65a2bfb2f.png?1649836095",
    title: "Node Developer",
    remote: true,
    amount: "10000",
    city: "Lublin",
    companyName: "Cschark",
    adress: "ul. Głeboka  Lublin",
    geolocation: { latitude: "51.239632", longitude: "22.550413" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Vue", stackLvl: "master", value: 5 },
      { stackName: "JS", stackLvl: "advanced", value: 4 },
      { stackName: "CSS", stackLvl: "regular", value: 3 },
      { stackName: "Analytics", stackLvl: "master", value: 5 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "19",
    dateAdded: "2022-09-01",

    logo: "https://bucket.justjoin.it/offers/company_logos/original/9a01ebb3a3cff2dd8d5abeb7719c88d65a2bfb2f.png?1649836095",
    title: "Node Developer",
    remote: false,
    amount: "10000",
    city: "Kielce",
    companyName: "Cschark",
    adress: "ul. Sadowa  Kielce",
    geolocation: { latitude: "50.865179", longitude: "20.623575" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Python", stackLvl: "master", value: 5 },
      { stackName: "Scala", stackLvl: "advanced", value: 4 },
      { stackName: "CSS", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "master", value: 5 },
      { stackName: "Vue", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "20",
    dateAdded: "2022-08-25",
    title: "Python Developer",
    city: "Białystok",
    remote: false,
    companyName: "Santander",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    adress: "ul. Grochowa  Białystok",
    geolocation: { latitude: "53.131765", longitude: "23.151046" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "CSS", stackLvl: "master", value: 5 },
      { stackName: "Python", stackLvl: "advanced", value: 4 },
      { stackName: "Game", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "21",
    dateAdded: "2022-09-01",
    title: "Python Developer",
    remote: true,
    amount: "7700",
    city: "Wyszkow",
    companyName: "Santander",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    adress: "ul. 3 maja  Wyszkow",
    geolocation: { latitude: "52.590677", longitude: "21.45154 " },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Github", stackLvl: "master", value: 5 },
      { stackName: "Python", stackLvl: "advanced", value: 4 },
      { stackName: "Game", stackLvl: "regular", value: 3 },
      { stackName: "Support", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "22",
    dateAdded: "2022-09-01",
    remote: false,
    logo: "https://bucket.justjoin.it/offers/company_logos/original/9a01ebb3a3cff2dd8d5abeb7719c88d65a2bfb2f.png?1649836095",
    title: "Node Developer",
    amount: "10000",
    city: "Olsztyn",
    companyName: "Cschark",
    adress: "ul. Dworcowa  Olsztyn",
    geolocation: { latitude: "53.773328", longitude: "20.500944" },
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "Mobile", stackLvl: "master", value: 5 },
      { stackName: "Security", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
];
