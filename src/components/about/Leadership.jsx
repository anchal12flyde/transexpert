"use client";
import Image from "next/image";

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Raman Deol",
      role: "Strategy & Growth",
      bg: "bg-red-600",
      image: "/leaders/raman.png", // put image in /public/leaders/
    },
    {
      name: "Ranjit Khatra",
      role: "Fleet Operations",
      bg: "bg-red-600",
      image: "/leaders/ranjit.png",
    },
    {
      name: "Paul Brar",
      role: "Commercial Strategy",
      bg: "bg-red-600",
      image: "/leaders/paul.png",
    },
    {
      name: "Sunny Grewal",
      role: "Field Logistics",
      bg: "bg-red-600",
      image: "/leaders/sunny.png",
    },
  ];

  return (
    <section className="flex w-full">
      {/* Left Text Block */}
      <div className="w-1/3 bg-red-600 text-white p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
        <p className="text-lg leading-relaxed">
          Led by veterans in fleet operations, commercial logistics, and field
          execution, our four founders drive the business with hands-on
          commitment.
        </p>
      </div>

      {/* Right Leaders Block */}
      <div className="w-2/3 grid grid-cols-4">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-end text-center ${leader.bg} border`}
          >
            <Image
              src={leader.image}
              alt={leader.name}
              width={400}
              height={500}
              className="object-cover grayscale"
            />
            <div
              className={`absolute top-6 right-0   -translate-x-1/2 text-sm ${
                leader.bg === "bg-white" ? "text-black" : "text-white"
              }`}
            >
              <h3 className="font-semibold">{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
