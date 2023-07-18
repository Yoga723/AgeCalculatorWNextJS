const Output = ({ currentAge, showData }: any) => {
  return (
    <div className="grid row-start-3 col-start-1 col-span-3 md:col-start-1 md:col-span-2 md:justify-start md:pl-12 md:pb-9 justify-center items-center p-3 bg-white text-black">
      <p
        id="YEAR"
        className="text-5xl md:text-6xl font-extrabold font-poppins md:mt-4"
      >
        <span
          id="YEARNUMBER"
          className="text-[rgba(136,79,255,1)]"
        >
          {showData == false ? "00" : currentAge.totalYearFormatted}
        </span>{" "}
        Years
      </p>
      <p
        id="MONTHS"
        className="text-5xl md:text-6xl font-extrabold font-poppins md:mt-4"
      >
        <span
          id="MONTHSNUMBER"
          className="text-[rgba(136,79,255,1)]"
        >
          {showData == false ? "00" : currentAge.totalMonthFormatted}
        </span>{" "}
        Months
      </p>
      <p
        id="DAYS"
        className="text-5xl md:text-6xl font-extrabold font-poppins md:mt-4"
      >
        <span
          id="DAYSNUMBER"
          className="text-[rgba(136,79,255,1)]"
        >
          {showData == false ? "00" : currentAge.totalDayFormatted}
        </span>{" "}
        Days
      </p>
    </div>
  );
};

export default Output;
