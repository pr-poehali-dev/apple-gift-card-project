import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardSection from "@/components/CardSection";
import { Button } from "@/components/ui/button";

const Cards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Apple Gift Cards</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Выберите подарочную карту любого номинала для использования в
              экосистеме Apple
            </p>
            <div className="w-40 h-40 mx-auto my-8">
              <img
                src="https://cdn.poehali.dev/files/da4bb139-553b-4aed-aca4-72bbd7fed98d.png"
                alt="Apple Logo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <CardSection />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Нужен другой номинал?</h2>
              <p className="text-gray-600 mb-6">
                Мы можем предложить подарочные карты других номиналов под заказ.
                Свяжитесь с нами, чтобы обсудить детали.
              </p>
              <Button className="rounded-full">Связаться с нами</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cards;
