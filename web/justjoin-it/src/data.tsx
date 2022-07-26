import { BigOfferDetails, Icon } from "./types/types";
import { FaAngular, FaCss3, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaVuejs, FaSearch } from "react-icons/fa";
import { SiScala } from "react-icons/si";
import { BsPhone } from "react-icons/bs";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { MdAnalytics, MdOutlineSecurity } from "react-icons/md";

export const stackIcons: Icon[] = [
  {
    _id: "01",
    stack: "CSS",
    stackFullName: "CSS",
    background: "linear-gradient(-90deg, rgb(82, 102, 225), rgb(129, 102, 224))",
    logo: <FaCss3 />,
  },
  {
    _id: "02",
    stack: "JS",
    stackFullName: "JavaScript",
    background: " linear-gradient(-90deg, rgb(255, 199, 6), rgb(255, 175, 0))",
    logo: <FaJs />,
  },
  {
    _id: "HTML",
    stack: "HTML",
    stackFullName: "HTML",
    background: "linear-gradient(-90deg, rgb(255, 125, 80), rgb(253, 93, 33))",
    logo: <FaHtml5 />,
  },
  {
    _id: "04",
    stack: "Python",
    stackFullName: "Python",
    background: " linear-gradient(-90deg, rgb(31, 94, 182), rgb(31, 123, 196))",
    logo: <FaPython />,
  },
  {
    _id: "05",
    stack: "Java",
    stackFullName: "Java",
    background: " linear-gradient(-90deg, rgb(250, 101, 107), rgb(249, 89, 122))",
    logo: <FaJava />,
  },
  {
    _id: "06",
    stack: "React",
    stackFullName: "React",
    background: "linear-gradient(-90deg, rgb(2, 175, 235), rgb(27, 104, 194))",
    logo: <FaReact />,
  },
  {
    _id: "07",
    stack: "Node",
    stackFullName: "Node.js",
    background: "linear-gradient(-90deg, rgb(137, 219, 84), rgb(101, 175, 53))",
    logo: <FaNodeJs />,
  },
  {
    _id: "08",
    stack: "Vue",
    stackFullName: "Vue.js",
    background: " linear-gradient(-90deg, rgb(47, 207, 187), rgb(55, 221, 156))",
    logo: <FaVuejs />,
  },
  {
    _id: "09",
    stack: "Angular",
    stackFullName: "Angular",
    background: "linear-gradient(-90deg, rgb(248, 100, 104), rgb(241, 70, 76))",
    logo: <FaAngular />,
  },
  {
    _id: "010",
    stack: "Github",
    stackFullName: "Github",
    background: "linear-gradient(-90deg, rgb(59, 89, 152), rgb(112, 140, 199))",
    logo: <FaGithub />,
  },
  {
    _id: "011",
    stack: "PHP",
    stackFullName: "PHP",
    background: "linear-gradient(-90deg, rgb(65, 173, 250), rgb(21, 124, 252))",
    logo: <FaPhp />,
  },
  {
    _id: "012",
    stack: "Scala",
    stackFullName: "Scala",
    background: "linear-gradient(-90deg, rgb(248, 100, 104), rgb(241, 70, 76))",
    logo: <SiScala />,
  },
  {
    _id: "013",
    stack: "Mobile",
    stackFullName: "Mobile",
    background: "linear-gradient(-90deg, rgb(224, 79, 134), rgb(186, 74, 141))",
    logo: <BsPhone />,
  },
  {
    _id: "014",
    stack: "Testing",
    stackFullName: "Testing",
    background: "linear-gradient(-90deg, rgb(0, 150, 136), rgb(0, 121, 107))",
    logo: <FaSearch />,
  },
  {
    _id: "015",
    stack: "Game",
    stackFullName: "Game",
    background: "linear-gradient(-90deg, rgb(255, 64, 129), rgb(236, 64, 122))",
    logo: <TbDeviceGamepad2 />,
  },
  {
    _id: "016",
    stack: "Analytics",
    stackFullName: "Analytics",
    background: "linear-gradient(-90deg, rgb(59, 89, 152), rgb(112, 140, 199))",
    logo: <MdAnalytics />,
  },
  {
    _id: "017",
    stack: "Security",
    stackFullName: "Security",
    background: "linear-gradient(-90deg, rgb(83, 109, 254), rgb(13, 71, 161))",
    logo: <MdOutlineSecurity />,
  },
];

export const data: BigOfferDetails[] = [
  {
    _id: "1",
    title: "Python Developer",
    city: "Warszawa",
    companyName: "Santander",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "Python", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "2",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    amount: 7800,
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "English", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "Python", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Java", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "3",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    amount: 8900,
    city: "Gdańsk",
    companyName: "Neoteric",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },

  {
    _id: "4",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/cad5d063093baa141ec6dfb31c607a431f9dc601.png?1652167322",
    title: "Node Developer",
    amount: 10000,
    city: "Warszawa",
    companyName: "Cschark",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "5",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/cad5d063093baa141ec6dfb31c607a431f9dc601.png?1652167322",
    title: "Node Developer",
    city: "Warszawa",
    companyName: "Cschark",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "6",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/cad5d063093baa141ec6dfb31c607a431f9dc601.png?1652167322",
    title: "Node Developer",
    amount: 10000,
    city: "Warszawa",
    companyName: "Cschark",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "7",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/cad5d063093baa141ec6dfb31c607a431f9dc601.png?1652167322",
    title: "Node Developer",
    amount: 10000,
    city: "Warszawa",
    companyName: "Cschark",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "8",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/cad5d063093baa141ec6dfb31c607a431f9dc601.png?1652167322",
    title: "Node Developer",
    amount: 10000,
    city: "Warszawa",
    companyName: "Cschark",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "9",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/cad5d063093baa141ec6dfb31c607a431f9dc601.png?1652167322",
    title: "Node Developer",
    amount: 10000,
    city: "Warszawa",
    companyName: "Cschark",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Testing", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "10",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    amount: 8900,
    city: "Gdańsk",
    companyName: "Neoteric",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "11",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    amount: 8900,
    city: "Gdańsk",
    companyName: "Neoteric",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "12",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    amount: 8900,
    city: "Gdańsk",
    companyName: "Neoteric",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "13",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    amount: 8900,
    city: "Gdańsk",
    companyName: "Neoteric",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "14",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/f15cb923f1f6d1a45de71b32922c542e7df91a01.jpg?1649687024",
    title: "React Developer",
    city: "Gdańsk",
    companyName: "Neoteric",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "Angular", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "HTML", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
];
