import React from "react";

interface titleprops {
  title1: string;
  title2: string;
}

export default function Title1e2({ title1, title2 }: titleprops) {
  return (
    <div>
      <h1 className="font-bold text-3xl">{title1}</h1>
      <h1 className="text-gray-400 text-2xl font-bold">{title2}</h1>
    </div>
  );
}
