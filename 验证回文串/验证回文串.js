// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false


// 思路：
// 用正则将不是字母或数字的字符和空格去掉，并转小写
// 设置头尾双指针，开启循环
// 如果指向的元素不同，则返回false
// 如果相同，移动指针，相互逼近，继续循环，直至指针相遇



var isPalindrome = function(s) {
  let str= s.replace(/[^0-9a-zA-Z]/g,'').toLowerCase()
  let left = 0
  let right = str.length - 1
  while(left < right){
      if(str[left] !== str[right]){
          return false
      }
      left++
      right--
  }
  return true
}


// 时间复杂度:O(n)