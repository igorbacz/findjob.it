import { FaCss3 } from "react-icons/fa";
import { BigOfferDetails, Icon } from "./types/types";

export const data: BigOfferDetails[] = [
  {
    _id: "1",
    title: "Java Script Developer",
    amount: 12390,
    city: "Warszawa",
    companyName: "Santander",
    logo: "https://bucket.justjoin.it/offers/company_logos/original/8d236fbecfdd6b194bccce45a28bf9e392664752.png?1656582079",
    adress: "ul. Wyszyńskiego  Warszawa",
    companySize: 15,
    exp: "Senior",
    techStack: [
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "TypeScript", stackLvl: "regular", value: 3 },
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
      { stackName: "Polish", stackLvl: "master", value: 5 },
      { stackName: "JavaSript", stackLvl: "advanced", value: 4 },
      { stackName: "TypeScript", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
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
      { stackName: "TypeScript", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
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
      { stackName: "TypeScript", stackLvl: "regular", value: 3 },
      { stackName: "React", stackLvl: "regular", value: 3 },
      { stackName: "Node.js", stackLvl: "regular", value: 3 },
      { stackName: "Vue.js", stackLvl: "regular", value: 3 },
    ],
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
];

enum IconType {
  CSS = "<FaCss3 />",
}

export const stackIcons: Icon[] = [
  {
    stack: "CSS",
    background: "linear-gradient(-90deg, rgb(82, 102, 225), rgb(129, 102, 224))",
    ikona: IconType.CSS,
  },
];
