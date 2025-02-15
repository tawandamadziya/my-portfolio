import Image from "next/image";
import React from "react";
import me2 from "../assets/me2.jpg";
import office from "../assets/office.jpeg";

export default function About() {
  return (
    <section className="py-16 px-10 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
        <p className="text-gray-600 text-lg mt-2">Personal and professional information</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Personal Info */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              My name is <strong>Tawanda Madziya</strong> and I was born on 6 June 2003. I am 
              someone who loves sports, and I&apos;ve had the privilege of playing for a soccer 
              team and my school as well. I&apos;m a piano player during my free time and a gamer at 
              night. I am driven by the word <strong>mistake</strong>, which to me means 
              <em> &quot;opportunity to try again and do better&quot;</em>.
            </p>
            <div className="mt-6">
              <Image 
                src={me2}
                alt="Laptop workspace" 
                width={500} 
                height={300} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Professional Info */}
          <div>
            <div className="flex gap-4">
              <Image 
                src={me2} 
                alt="Tawanda Madziya" 
                width={180} 
                height={180} 
                className="rounded-lg shadow-lg"
              />
              <Image 
                src={office}
                alt="Working in an office" 
                width={180} 
                height={180} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Professionally, I am a <strong>software engineer</strong> and front-end developer, 
              but that has never stopped me from exploring other technologies such as backend 
              development, mobile development, and more. Ethical hacking was my motivation 
              before joining the IT community, and I practice technology during my free time.
            </p>
            <p className="text-gray-800 font-semibold mt-4">
              &quot;Every challenge is a wakeup call for you to learn more&quot; — these are the words I live by.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              I have had the opportunity to apply my knowledge at multiple companies as a freelancer 
              and as an employee, which makes me a good fit for both formal and informal business. 
              The only thing that does not change is my <strong>professional performance</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
