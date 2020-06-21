// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]



// 思路:两层for循环,将第一个数据和后面所有数据相加,判断和是否等于target,如果等于返回这两个元素的下标值，
// 再将第二个数据和后面所有数据相加,判断和是否等于target,如果等于返回这两个元素的下标值，以此类推。


var twoSum = function(nums, target) {
  for(let i = 0;i < nums.length;i++){
    for(let j= i+1;j < nums.length;j++){
      if(nums[i] + nums[j] == target){
        return [i,j]
      }
    }
  }
};

// 时间复杂度:O(n^2)

