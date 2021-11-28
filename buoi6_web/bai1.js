const nums = [1,3,4,7,1,2,3,4,5,6];
const nums1 = [1,1,1,10,23,2,26,26];
const nums2 = [1000,2000,1000,2000,10000,22222];
function dem(nums){
    nums.sort();
    let cnt = 1;
    for(var i=1;i<nums.length;i++){
        if(nums[i] == nums[i-1]) ++cnt;
        else{
            console.log(`phần tử ${nums[i-1] } xuất hiện ${cnt} lần`);
            cnt = 1;
        }
    }
    console.log(`phần tử ${nums[nums.length-1]} xuất hiện ${cnt} lần`);
}
dem(nums);
dem(nums1);
dem(nums2);