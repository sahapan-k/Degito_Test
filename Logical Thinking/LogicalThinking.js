// มีฝูงแกะฝูงหนึ่ง ในฝูงมีทั้งหมด 8 ตัว ทุกๆตัวใส่เสื้อที่มีหมายเลขกับกำกับและไม่ซ้ำกัน แต่มีแกะตัวจริงจำนวน 6 ตัว อีก 2 ตัวเป็นหมาป่าที่ปลอมตัวเข้าฝูงมา โดยที่หมายเลขที่เสื้อของทั้งฝูงรวมกันได้ 120 พอดี และหมายเลขแกะตัวจริงทั้งหมดจะรวมกันได้ 100 เสมอ จงหาว่าหมายเลขใดบ้างที่เป็นแกะตัวจริง

// เขียนโปรแกรมด้วยภาษาใดก็ได้ โดยที่ให้รับ input เป็น number จำนวน 8 ตัว และแสดงผลลัพธ์ที่ถูกต้อง

// Example
// Case 1
// Input dataset = [10,13,25,30,12,18,5,7]

// Output result : 10,25,30,12,18,5

// Case 2
// Input dataset = [9,26,1,14,11,41,6,12]

// Output result : 26,1,14,41,6,12

// ------------------------------------------------------------------------------------------------------------------------- //

/*  Variables Declaration */
const INPUT_DATASET = [9, 26, 1, 14, 11, 41, 6, 12];
// const INPUT_DATASET = [10, 13, 25, 30, 12, 18, 5, 7];

/* Function Declaration */
const checkIfArrayIsUnique = (input) => input.length === new Set(input).size;
const findWolf = (inputArray) => {
  console.log(`ชุดข้อมูลที่ทดสอบคือ ${inputArray}`);
  let n = inputArray.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (inputArray[i] + inputArray[j] === 20) {
        console.log(
          `หมายเลขกำกับเสื้อของหมาป่าคือ เลข${inputArray[i]} และเลข${inputArray[j]} `
        );
        console.log(
          inputArray
            .filter((number) => number !== inputArray[i])
            .filter((number) => number !== inputArray[j])
        );
      }
    }
  }
};

/* Logic */

const sum = INPUT_DATASET.reduce(
  (currentSum, currentValue) => currentSum + currentValue,
  0
);

if (sum !== 120) {
  console.error(
    'ข้อมูลไม่ถูกต้อง! จำนวนหมายเลขของเสื้อทั้งฝูงรวมกันไม่เท่ากับ 120'
  );
} else if (INPUT_DATASET.length !== 8) {
  console.error('ข้อมูลไม่ถูกต้อง! จำนวนของฝูงไม่เท่ากับ 8 ตัว');
} else if (!checkIfArrayIsUnique(INPUT_DATASET)) {
  console.error('ข้อมูลไม่ถูกต้อง! มีเสื้อที่หมายเลขกำกับซ้ำซ้อนกัน');
} else {
  findWolf(INPUT_DATASET);
}
