// eslint-disable-next-line
import { Container, Row, Col } from "react-bootstrap";
import AvailableItem from "./AvailableItem";
import "./AvailableItems.css";

export const productsArr = [
  {
    title: "Apple MacBook Air Laptop M1 chip",

    price: 76990,

    imageUrl: [
      "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71yCKaQXv+L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/6155Fp7yaSL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71U-3BfjvjL._SL1500_.jpg",
    ],
    specifications: [
      { label: "Brand", value: "Apple" },
      { label: "Model Name", value: "MacBook Air" },
      { label: "Screen Size", value: "13 Inches" },
      { label: "Colour", value: "Silver" },
      { label: "Hard Disk Size", value: "256 GB" },
      { label: "CPU Model", value: "M1 chip" },
      { label: "RAM Memory Installed Size", value: "8 GB" },
      { label: "Operating System", value: "macOS 10.14 Mojave" },
      { label: "Special Feature", value: "Backlit Keyboard" },
      { label: "Graphics Card Description", value: "Integrated" },
    ],
  },

  {
    title: "OnePlus Nord Buds 2r",

    price: 2150,

    imageUrl: [
      "https://m.media-amazon.com/images/I/51oMWaW7tKL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51Ibbe7YqQL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61ZykOtT+GL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61oTsqcJ7JL._SL1500_.jpg",
    ],
    specifications: [
      { label: "Brand", value: "OnePlus" },
      { label: "Model Name", value: "TWS Nord" },
      { label: "Colour", value: "Deep Grey" },
      { label: "Form Factor", value: "TWS" },
      { label: "Connectivity Technology", value: "Wireless" },
    ],
  },

  {
    title: "Fastrack New Limitless Classic Smartwatch",

    price: 2570,

    imageUrl: [
      "https://m.media-amazon.com/images/I/71YNQ81X83L._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61RwIpYHfNL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61ccTY98wgL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61DIkCswquL._SL1080_.jpg",
    ],
    specifications: [
      { label: "Brand", value: "Fastrack" },
      { label: "Model Name", value: "Fastrack Limitless Classic" },
      { label: "Style", value: "Modern" },
      { label: "Colour", value: "Rose Gold Mesh" },
      { label: "Screen Size", value: "1.91 Inches" },
    ],
  },

  {
    title: "Oneplus Nord CE4",

    price: 24999,

    imageUrl: [
      "https://m.media-amazon.com/images/I/61nxQ62qglL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71rooC1PHHL._SL1200_.jpg",
      "https://m.media-amazon.com/images/I/51WU-TWgRHL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/513gpPI73-L._SL1500_.jpg",
    ],
    specifications: [
      { label: "Brand", value: "OnePlus" },
      { label: "Model Name", value: "OnePlus Nord CE4" },
      { label: "Network Service Provider", value: "Unlocked for All Carriers" },
      { label: "Operating System", value: "OxygenOS" },
      { label: "Cellular Technology", value: "5G, 4G LTE" },
    ],
  },
  {
    title: "Sony Alpha ILCE-7RM3A Camera",

    price: 124999,

    imageUrl: [
      "https://m.media-amazon.com/images/I/71VnF6UiESL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71rG3nW6A-L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71eEM297ebL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71EAV3gJ6mL._SL1500_.jpg",
    ],
    specifications: [
      { label: "Brand", value: "Sony" },
      { label: "Model Name", value: "ILCE-7RM3A" },
      { label: "Photo Sensor Size", value: "APS-C fps" },
      { label: "Image Stabilisation", value: "Optical" },
      { label: "Maximum Shutter Speed", value: "1/8000 Seconds" },
      { label: "Minimum Shutter Speed", value: "30 Seconds" },
      { label: "Metering Description", value: "Evaluative" },
      { label: "Exposure Control Type", value: "Automatic" },
      { label: "Form Factor", value: "Compact" },
      { label: "Effective Still Resolution", value: "42.4 MP" },
    ],
  },
];

const AvailableItems = () => {
  const itemsList = productsArr.map((product, index) => (
    <Col key={index} md={6} className="mb-4">
      <AvailableItem product={product} index={index}/>
    </Col>
  ));
  return (
    <Container >
      
      <h1 className="text-center mt-4" style={{ color: "white" }}>Our Products</h1>
      <Row className="mt-4">{itemsList}</Row>
    </Container>
  );
};
export default AvailableItems;
