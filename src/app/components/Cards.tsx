import React from 'react';

const services = [
  { title: "Software Development", description: "Im a software engineer specialising in Python, C++, Delphi and Java. Everyday for me is an opportunity to learn more in these languages, there is always something new to learn." },
  { title: "Web development", description: "I am a frontend engineer and although backend is not my speciality, I am able to create any given project. I mostly do freelancing when it comes to web development but that does not change in an office environment" },
  { title: "Artificial Intelligence", description: "I create machine learning projects and a breakdown of AI which enclude machine vision, automation and more. The projects are mostly made using python and most of the are posted on my github account for all to view." },
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-5 text-center">
      <h2 className="text-4xl font-semibold mb-8">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
