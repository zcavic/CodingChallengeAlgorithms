var twoSum = function (numbers, target) {
    const result = new Set();
    for (let i = 0; i < numbers.length - 1; i++) {
        const num = target - numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] === num) {
                result.add(i);
                result.add(j);
            }
        }
    }
    return [...result];
};

const nums = [
    260, -417, 209, -933, 863, -226, -397, 855, 127, 820, -607, 594, -51, -245, 871, -946, 216, -237, -15, 601, 219, 171, -982, -394, 825,
    412, -658, 704, 574, -726, -292, -262, -978, -952, -402, 142, 581, -34, -471, -310, -734, -772, -349, -533, -93, 229, -842, 71, -150,
    459, 734, 695, 658, -617, -964, 472, -58, 317, 810, 171, 510, -973, -304, 757, -487, 256, 627, -86, 793, -838, 47, 718, 618, -799, 460,
    284, 343, 287
];
const target = 739;
const temp = twoSum(nums, target);
console.log(temp);
