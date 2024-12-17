var containsDuplicate = function(nums)
 {
    let count={}
    for(let i=0; i<nums.length; i++)
    {
        if(count[nums[i]])
        {
            count[nums[i]]++
        }
        else
        {
            count[nums[i]]=1
        }
    }
   console.log(count)
   
   for(key in count)
   {
      
      if(count[key]>1)
      {
          return true
      }
   }
   return false
    
};
console.log(containsDuplicate([1,2,3,1]))