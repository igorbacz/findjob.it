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
    value: "Senior",
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
