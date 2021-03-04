let Phy = prompt("Nhập điểm lý");
let Che = prompt("Nhập điểm Hóa");
let Bio = prompt("Nhập điểm Sinh");

let Aver = parseInt(Phy) + parseInt(Che) + parseInt(Bio);
document.write("điểm trung bình: " + Aver / 3);
document.write("<br>");
document.write("Tổng điểm:" + Aver);
document.write("<br>");

let C = prompt("Nhập độ C");
let F = parseInt(C) * 1.8 + 32;
document.write("độ F: " + F + "F");
document.write("<br>");

let r = prompt("nhập bán kính hình tròn");
let S = parseInt(r) ** 2 * 3.14;
let O = 2 * parseInt(r) * 3.14;
document.write("Chu vi hình tròn: " + O);
document.write("<br>");
document.write("Diện tích hình tròn là: " + S);
