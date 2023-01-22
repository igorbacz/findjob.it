import { BigOfferDetails } from "../types/types";

export const mockOffers: BigOfferDetails[] = [
  {
    _id: "01",
    dateAdded: "2023-01-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "7800",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "Java", stackLvl: "master", value: 5 },
      { stackName: "CSS", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "02",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "8000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "CSS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "03",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "9000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
      { stackName: "Java", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "04",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "10000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "05",
    dateAdded: "2023-01-21",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "11000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "CSS", stackLvl: "master", value: 5 },
      { stackName: "Java", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
];

export const mockFilteredByTechStackAndHighestSalary: BigOfferDetails[] = [
  {
    _id: "05",
    dateAdded: "2023-01-21",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "11000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "CSS", stackLvl: "master", value: 5 },
      { stackName: "Java", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "02",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "8000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "CSS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "01",
    dateAdded: "2023-01-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "7800",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "Java", stackLvl: "master", value: 5 },
      { stackName: "CSS", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
];

export const mockFilteredByTechStackLowestSalaryAndRemote: BigOfferDetails[] = [
  {
    _id: "02",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "8000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "CSS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "03",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "9000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
      { stackName: "Java", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "04",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "10000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
];

export const mockFilteredByTechStackLatestAndRemote: BigOfferDetails[] = [
  {
    _id: "02",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "8000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "CSS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "03",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "9000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
      { stackName: "Java", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
  {
    _id: "04",
    dateAdded: "2022-09-22",
    logo: "https://bucket.justjoin.it/offers/company_logos/thumb/e12c545be0cedf25a1a7980a42632e091d0ea2f1.png?1637058465",
    title: "Java Script Developer",
    remote: true,
    amount: "10000",
    city: "Kraków",
    companyName: "City Bank",
    adress: "ul. Sienkiewicza  Warszawa",
    companySize: "15",
    exp: "Senior",
    techStack: [
      { stackName: "JS", stackLvl: "master", value: 5 },
      { stackName: "HTML", stackLvl: "master", value: 5 },
    ],
    geolocation: {
      latitude: 20.02,
      longitude: 50.5,
    },
    description:
      "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  },
];
