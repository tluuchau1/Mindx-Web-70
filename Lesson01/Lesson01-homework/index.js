// 1.
function fizzBuzz() {
  let html = "";
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      html += "FizzBuzz";
    } else if (i % 5 === 0) {
      html += "Buzz";
    } else if (i % 3 === 0) {
      html += "Fizz";
    }
  }
  return html;
}

console.log(fizzBuzz());
// 2.
function countVowels(str) {
  let vowels = ["e", "u", "o", "a", "i"];
  let count = 0;
  if (typeof str !== "string") {
    return "Dữ liệu đầu vào không hợp lệ!!!";
  }
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("anhyeuem"));
console.log(countVowels("Viet Nam vo dich. Malaysia tuoi gi :))"));
console.log(countVowels(""));
console.log(countVowels("Javascript is a beautiful programming language"));
console.log(countVowels(123));
// 3.

function removeDuplicateFromArray(arr) {
  if (!Array.isArray(arr)) {
    return "Du lieu dau vao khong hop le";
  }

  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(removeDuplicateFromArray([1, 1, -1, 3, 5, 10]));

console.log(removeDuplicateFromArray([true, 3, "hello", false, "hello", true]));

console.log(removeDuplicateFromArray(["a", "b", "c", "d", "d", "c", "a"]));

console.log(removeDuplicateFromArray("Hello"));

// 4.

/*
  - Trong đó:
    - workingTime: là số giờ làm việc trên trên tháng
    - salary: là lương/ 1h làm việc
 */
const employeesInfo = [
  { name: "David", workingTime: 98, salary: 10 },
  { name: "Luiz", workingTime: 78, salary: 20 },
  { name: "Silva", workingTime: 165, salary: 25 },
  { name: "Santos", workingTime: 215, salary: 30 },
  { name: "Alex", workingTime: 143, salary: 28 },
];

// Cau a: Viết hàm tính tổng lương công ty phải trả trong 1 tháng

function getTotalSalaryOfCompany() {
  let totalSalary = 0;
  for (let i = 0; i < employeesInfo.length; i++) {
    const employee = employeesInfo[i];
    const salary = employee.workingTime * employee.salary;
    totalSalary += salary;
  }
  return totalSalary;
}

console.log(getTotalSalaryOfCompany());

//Cau b: Viet ham tinh luong cua 1 nhan vien bat ki trong danh sach employeesInfo

function getTotalSalaryOfEmployee(name) {
  for (let i = 0; i < employeesInfo.length; i++) {
    const employee = employeesInfo[i];
    if (employee.name === name) {
      let bouns = 0;
      if (employee.workingTime >= 150) {
        bouns = 200;
      } else if (employee.workingTime >= 100 && employee.workingTime < 150) {
        bouns = 150;
      } else if (employee.workingTime >= 50 && employee.workingTime < 100) {
        bouns = 100;
      } else {
        bouns = 50;
      }
      const salary = employee.workingTime * employee.salary + bouns;
      return `${employee.name}'s salary: ${salary}`;
    }
  }
  return "Nhân viên không tồn tại";
}

console.log(getTotalSalaryOfEmployee("Lenin"));
console.log(getTotalSalaryOfEmployee("Alex"));
console.log(getTotalSalaryOfEmployee("Luiz"));
