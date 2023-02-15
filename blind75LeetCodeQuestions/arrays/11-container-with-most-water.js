/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let res = 0,
        left = 0,
        right = height.length - 1;
    const amountOfWater = () => {
        const x = right - left;
        const y = height[left] < height[right] ? height[left] : height[right];
        return x * y;
    };

    while (left < right) {
        if (res < amountOfWater()) res = amountOfWater();
        if (height[left] <= height[right]) left++;
        else if (height[left] > height[right]) right--;
    }
    return res;
};

const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
