import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Specifications = () => {
  const specifications = [
    {
      id: 1,
      specification: "Display",
      description: "6.10-inch touchscreen, 1179x2556 pixels, 460 ppi",
    },
    {
      id: 2,
      specification: "Processor",
      description: "Apple A16 Bionic (hexa-core)",
    },
    {
      id: 3,
      specification: "RAM",
      description: "8GB",
    },
    {
      id: 4,
      specification: "Storage",
      description: "128GB, 256GB, 512GB",
    },
    {
      id: 5,
      specification: "Camera (Rear)",
      description: "48MP primary (f/1.6) + 12MP (f/2.4)",
    },
    {
      id: 6,
      specification: "Camera (Front)",
      description: "12MP (f/1.9)",
    },
    {
      id: 7,
      specification: "OS",
      description: "iOS 17",
    },
    {
      id: 8,
      specification: "Battery",
      description: "Not specified",
    },
    {
      id: 9,
      specification: "Wireless Charging",
      description: "Yes",
    },
    {
      id: 10,
      specification: "Dimensions",
      description: "147.60 x 71.60 x 7.80mm, 171.00 grams",
    },
    {
      id: 11,
      specification: "Colors",
      description: "Black, Blue, Green, Pink, Yellow",
    },
    {
      id: 12,
      specification: "IP Rating",
      description: "IP68 (dust and water protection)",
    },
    {
      id: 13,
      specification: "Connectivity",
      description: "Wi-Fi, GPS, Bluetooth, NFC, USB Type-C, 3G, 4G, 5G",
    },
    {
      id: 14,
      specification: "SIM Slots",
      description: "Dual Nano-SIM",
    },
    {
      id: 15,
      specification: "Sensors",
      description:
        "Accelerometer, ambient light sensor, barometer, gyroscope, proximity sensor, compass/magnetometer",
    },
  ];

  const specsListing = specifications.map((spec) => (
    <li className="list-group-item" key={spec.id}>
      <b>{spec.specification}: </b>
      {spec.description}
    </li>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Specifications</h1>
        <ul className="list-group">{specsListing}</ul>
        <p className="fs-4 pt-3">
          Price in india (as of 28th June, 2024): Rs. 71,900{" "}
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Specifications;
