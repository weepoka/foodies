import React from "react";
import HomePage from "./components/Home/HomePage";
import WelcomeSection from "./components/Welcome/WelcomeSection";
import Offers from "./components/Offers/Offers";
import Menu from "./components/Menu/Menu";
import Testimonial from "./components/Testomonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Head from "next/head";
import Messnger from "./components/Messenger/Messnger";
import Link from "next/link";
import oi from "../../public/images/icon.png";
import Image from "next/image";

export default function index() {
  return (
    <>
      <HomePage />
      <WelcomeSection />
      <Offers />
      <Menu />
      <Testimonial />
      <Footer />
      <Messnger />
    </>
  );
}
