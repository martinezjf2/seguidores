import React from "react";
import Header from "../components/Header";
import CarouselContainer from "../components/Carousel";
import DailyWord from "../components/DailyWord";

export default function Home() {
  return (
    <>
      <Header />
      <CarouselContainer />
      <DailyWord />
    </>
  );
}
