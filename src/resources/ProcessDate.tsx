const CalculateData = (
  dayBirth: number,
  monthBirth: number,
  yearBirth: number
) => {
  const dayNow = new Date().getDate();
  const monthNow = new Date().getMonth() + 1;
  const yearNow = new Date().getFullYear();
  const addZeroString = "0";

  var totalYear = yearNow - yearBirth;
  // cek bulan sekarang > dari bulan lahir
  if (monthNow >= monthBirth) {
    var totalMonth = monthNow - monthBirth;
  } else {
    totalYear--;
    var totalMonth = 12 + monthNow - monthBirth;
  }
  if (totalYear < 0) {
    totalYear = 0;
  }

  // cek hari sekarang >= dari hari lahir
  if (dayNow >= dayBirth) {
    var totalDay = dayNow - dayBirth;
  } else {
    totalMonth--;
    var totalDay = 31 + dayNow - dayBirth;
  }

  // men total bulan kurang ti 0 set totalMonth jadi 11 jeng kurangan tahun sebanyak 1
  if (totalMonth < 0) {
    totalMonth = 11;
    totalYear--;
  }

  // ubah type bulan dari number ke string dan jadi format 00.Contoh 03, 06, 11
  if (totalMonth >= 10) {
    var totalMonthFormatted = totalMonth.toString();
  } else {
    totalMonthFormatted = addZeroString + totalMonth;
  }

  // ubah type hair dari number ke string dan jadi format 00.Contoh 03, 06, 11
  if (totalDay >= 10) {
    var totalDayFormatted = totalDay.toString();
  } else {
    totalDayFormatted = addZeroString + totalDay;
  }

  // ubah type hair dari number ke string dan jadi format 00.Contoh 03, 06, 11
  if (totalYear >= 10) {
    var totalYearFormatted = totalYear.toString();
  } else {
    totalYearFormatted = addZeroString + totalYear;
  }

  return { totalDayFormatted, totalMonthFormatted, totalYearFormatted };

};

export default CalculateData;
