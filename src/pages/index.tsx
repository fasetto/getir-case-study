import React from "react";

import { Header, ProductList } from "@/components";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <ProductList title="Products" />
      <Footer />
    </>
  );
}
