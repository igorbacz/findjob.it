import "isomorphic-fetch";

const mockOffer = {
  _id: "63342b37ea0f6c875c73128b",
  id: "63342b37ea0f6c875c73128b",
  dateAdded: "2022-09-01",
  remote: false,
  title: "Node Developer",
  amount: "10000",
  city: "Kielce",
  companyName: "Cschark",
  logo: "https://bucket.justjoin.it/offers/company_logos/original/9a01ebb3a3cff2dd8d5abeb7719c88d65a2bfb2f.png?1649836095",
  techStack: [
    { stackName: "Python", stackLvl: "master", value: 5 },
    { stackName: "Scala", stackLvl: "advanced", value: 4 },
    { stackName: "CSS", stackLvl: "regular", value: 3 },
    { stackName: "Testing", stackLvl: "regular", value: 3 },
    { stackName: "Node", stackLvl: "master", value: 5 },
    { stackName: "Vue", stackLvl: "regular", value: 3 },
  ],
  adress: "ul. Sadowa  Kielce",
  companySize: "15",
  exp: "Senior",
  description:
    "Aterian (NASDAQ: ATER) is a rapidly growing technology-enabled consumer products company that uses machine learning, natural language processing, and data analytics to design, develop, market, and sell products through online retail channels (e.g., Amazon, Walmart, etc). Aterian was founded on the premise that if a company selling consumer packaged goods was founded today, it would apply artificial intelligence and machine learning, the synthesis of massive quantities of data, and the use of social proof to validate high caliber product offerings as opposed to over-reliance on brand value and other traditional marketing tactics.",
  geolocation: { latitude: 50.865179, longitude: 20.623575 },
  mainStack: "Python",
  isNew: false,
  //@ts-ignore
  $op: null,
};

describe("actions.ts", () => {
  test("test fetch offer call", async () => {
    const res = await fetch("https://894xsxeql5.execute-api.us-east-1.amazonaws.com/offers");
    const result = await res.json();
    const offer = JSON.parse(JSON.stringify(result))[0];
    expect(offer).toStrictEqual(mockOffer);
  });
});
