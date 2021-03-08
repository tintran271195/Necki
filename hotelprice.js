let checkIn = document.getElementById(checkin);
let checkOut = document.getElementById(checkout);
let priceDom = document.getElementById(price);
let resultDom = document.getElementById(result);
function process() {
  const checkInDate = new Date(checkIn.value);
  const checkOutDate = new Date(checkOut.value);
  console.log("checkInDate");
  console.log("checkOutDate");
  const durationTime = Math.abs(checkInDate - checkOutDate);
  const durationDate = Math.ceil(durationTime / (1000 * 60 * 60 * 24));
  console.log("durationDate");
  const durationWeeks = Math.ceil(durationDate / 7);
  const price = Number(priceDom.value);
  const total =
    (durationWeeks * 7 * 0.9 + (durationDate - 7 * durationWeeks)) * price;
  console.log(total);
  resultDom.innerHTML = total + VND;
}
