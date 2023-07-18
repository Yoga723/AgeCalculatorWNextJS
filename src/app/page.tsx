"use client";
import { Forms, Footer, Output } from "../components/Index";
import { useState, useEffect } from "react";
import CalculateData from "../resources/ProcessDate";

// bila bingung cara kerjanya baca lagi README untuk alurnya di bagian My Process
export default function Home() {
  const [formData, setFormData] = useState<{
    totalDayFormatted?: string | any;
    totalMonthFormatted?: string | any;
    totalYearFormatted?: string | any;
  }>({
    totalDayFormatted: 0,
    totalMonthFormatted: 0,
    totalYearFormatted: 0,
  });
  const [showData, setShowData] = useState(false);

  // useEffect dipake untuk mantau perubahan di formData, this is not used
  useEffect(() => {}, [formData]);

  const ChangeShowData = () => {
    setShowData(false);
  };

  const handleFormSubmit = (
    dayBirth: number,
    monthBirth: number,
    yearBirth: number
  ) => {
    const CalculatedData = CalculateData(dayBirth, monthBirth, yearBirth);

    setFormData(CalculatedData);
    setShowData(true);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center p-4">
      <main className="rounded-2xl rounded-br-[6rem] border-2 shadow-[10px_30px_60px_-15px_rgba(136,79,255,3)] overflow-hidden">
        {/* eta onFormSubmit teh lain bawaan tapi ngaran ti parameter form komponen */}
        <Forms
          onFormSubmit={handleFormSubmit}
          changeShowData={ChangeShowData}
        />
        <Output
          currentAge={formData}
          showData={showData}
        />
      </main>
      <Footer />
    </div>
  );
}
