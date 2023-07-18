import Image from "next/image";
import SubmitArrow from "../../public/pictures/SubmitArrow.png";
import { useState } from "react";

const Forms = ({ onFormSubmit, changeShowData }: any) => {
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const dayInput = document.getElementById("DAY") as HTMLInputElement;
    const monthInput = document.getElementById("MONTH") as HTMLInputElement;
    const yearInput = document.getElementById("YEAR") as HTMLInputElement;

    // turn input type from string to Number
    const numberedDayInput = Number(dayInput.value);
    const numberedMonthInput = Number(monthInput.value);
    const numberedYearInput = Number(yearInput.value);
    const yearNow = new Date().getFullYear();
    if (
      dayInput.value != "" &&
      monthInput.value != "" &&
      yearInput.value != "" &&
      numberedDayInput <= 31 &&
      numberedMonthInput <= 12 &&
      numberedYearInput <= yearNow &&
      numberedYearInput > 1930
    ) {
      //Number(), men convert tipe string dari input html ke number. Bila bukan number maka akan return NaN
      // Manggil parameter onFormSubmit dan masukkan/input value berikut.
      onFormSubmit(numberedDayInput, numberedMonthInput, numberedYearInput);
      setShowError(false);
    } else {
      changeShowData();
      setShowError(true);
    }
  };
  return (
    <div className="text-black bg-white p-4">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-3 gap-2 p-2 overflow-hidden"
      >
        {/* Day Input */}
        <div className={`flex flex-col w-fit font-sans mt-5`}>
          <label
            htmlFor="DAY"
            className={`w-fit font-bold ${
              !showError ? "text-gray-400 " : "text-red-600 "
            }`}
          >
            DAY
          </label>
          <input
            id="DAY"
            name="DAY"
            type="text"
            inputMode="numeric"
            maxLength={2}
            placeholder="00"
            className="border-2 border-grey-500 rounded-lg font-bold text-xl w-5/6 p-2"
          />
          {showError ? (
            <p className="text-red-600 italic">Must be a valid day</p>
          ) : (
            ""
          )}
        </div>

        {/* Month Input */}
        <div className="flex flex-col w-fit font-sans mt-5">
          <label
            htmlFor="MONTH"
            className={`w-fit font-bold ${
              !showError ? "text-gray-400 " : "text-red-600 "
            }`}
          >
            MONTH
          </label>
          <input
            id="MONTH"
            name="Day"
            type="text"
            inputMode="numeric"
            maxLength={2}
            placeholder="00"
            className="border-2 border-grey-500 rounded-lg font-bold text-xl w-5/6 p-2"
          />
          {showError ? (
            <p className="text-red-600 italic">Must be a valid month</p>
          ) : (
            ""
          )}
        </div>

        {/* Year Input */}
        <div className="flex flex-col w-fit font-sans mt-5">
          <label
            htmlFor="YEAR"
            className={`w-fit font-bold ${
              !showError ? "text-gray-400 " : "text-red-600 "
            }`}
          >
            YEAR
          </label>
          <input
            id="YEAR"
            name="YEAR"
            type="text"
            inputMode="numeric"
            maxLength={4}
            placeholder="0000"
            className="border-2 border-grey-500 rounded-lg font-bold text-xl w-5/6 p-2"
          />
          {showError ? (
            <p className="text-red-600 italic">Must be a valid year</p>
          ) : (
            ""
          )}
        </div>
        {/* button */}
        <div className="grid col-start-1 col-span-3 items-center justify-center md:justify-end relative my-2 mt-4 md:my-0">
          <button className="bg-[rgba(136,79,255)] rounded-full relative z-10 md:mr-9">
            <span>
              <Image
                src={SubmitArrow}
                alt="Submit"
                // width={50}
                // height={50}
                className="w-16 h-16 md:w-16 md:h-16"
              />
            </span>
          </button>
          <hr className="absolute left-0 right-0 z-0 w-11/12 h-[0.15rem] mx-auto bg-gray-300 border-0 rounded" />
        </div>
      </form>
    </div>
  );
};

export default Forms;
