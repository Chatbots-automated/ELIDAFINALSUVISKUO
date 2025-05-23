import React from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';
import SubscriptionGrid from '../components/SubscriptionGrid';

export default function Products() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-b from-elida-warm to-elida-cream py-16 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
              Mūsų Prekės
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-elida-gold to-elida-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Visas mūsų parduodamas prekes galite įsigyti fiziškai, adresu Vilniaus gatvė 23A Panevėžyje, “ÉLIDA soliariumai” studijoje
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-elida-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl text-gray-900 mb-4">
              ABONEMENTAI
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-elida-gold to-elida-accent mx-auto mb-6"></div>
            <p className="text-gray-600">
              Išsirinkite jums tinkamiausią abonementą ir taupykite
            </p>
          </motion.div>
          <SubscriptionGrid />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl text-gray-900 mb-4">
              Produktai
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-elida-gold to-elida-accent mx-auto mb-6"></div>
            <p className="text-gray-600">
              Aukščiausios kokybės produktai jūsų įdegiui
            </p>
          </motion.div>
          <ProductGrid />
        </div>
      </section>
    </div>
  );
}