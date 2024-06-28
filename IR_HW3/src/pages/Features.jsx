import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Features = () => {
  const features = [
    {
      id: 1,
      feature: "Stunning Display",
      description:
        "Enjoy a 6.10-inch touchscreen with a high resolution of 1179x2556 pixels and a pixel density of 460 ppi.",
    },
    {
      id: 2,
      feature: "Powerful Performance",
      description:
        "Equipped with a hexa-core Apple A16 Bionic processor and 8GB of RAM, the iPhone 15 ensures smooth and fast operation.",
    },
    {
      id: 3,
      feature: "Ample Storage",
      description:
        "Choose from three storage options - 128GB, 256GB, or 512GB - to store your apps, photos, and more.",
    },
    {
      id: 4,
      feature: "Dual Camera System",
      description:
        "Capture stunning photos with a 48-megapixel primary camera (f/1.6) and a 12-megapixel secondary camera (f/2.4) on the rear.",
    },
    {
      id: 5,
      feature: "Crystal-Clear Selfies",
      description:
        "Take clear and detailed selfies with the 12-megapixel front camera featuring an f/1.9 aperture.",
    },
    {
      id: 6,
      feature: "Advanced iOS 17",
      description:
        "Experience the latest features and enhancements with the iOS 17 operating system.",
    },
    {
      id: 7,
      feature: "All-Day Battery Life",
      description:
        "The iPhone 15 ensures long-lasting battery performance to keep you connected all day.",
    },
    {
      id: 8,
      feature: "Wireless Charging",
      description:
        "Enjoy the convenience of wireless charging to keep your device powered up without cables.",
    },
    {
      id: 9,
      feature: "Sleek Design",
      description:
        "With dimensions of 147.60 x 71.60 x 7.80mm and a weight of 171.00 grams, the iPhone 15 is both stylish and portable.",
    },
    {
      id: 10,
      feature: "Vibrant Colors",
      description:
        "Choose from a range of colors, including Black, Blue, Green, Pink, and Yellow, to match your style.",
    },
    {
      id: 11,
      feature: "IP68 Rating",
      description:
        "The iPhone 15 is rated IP68 for dust and water protection, ensuring durability in various conditions.",
    },
    {
      id: 12,
      feature: "5G Connectivity",
      description:
        "Stay connected with 5G support and enjoy high-speed data on your device.",
    },
    {
      id: 13,
      feature: "Dual-SIM Support",
      description:
        "Use two Nano-SIM cards for added flexibility in your mobile connectivity.",
    },
    {
      id: 14,
      feature: "Advanced Sensors",
      description:
        "The iPhone 15 is equipped with various sensors for an enhanced user experience.",
    },
  ];

  const featuresListing = features.map((feature) => (
    <li key={feature.id} className="list-group-item">
      <b>{feature.feature}: </b>
      {`${feature.description}`}
    </li>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Features</h1>
        <ul className="list-group">{featuresListing}</ul>
      </main>
      <Footer />
    </>
  );
};

export default Features;
