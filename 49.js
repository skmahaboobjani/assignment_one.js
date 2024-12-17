var groupAnagrams = function(strs) 

{
    let sort=strs.map((x)=>x.split("").sort().join(""))
    let map={}
    for(let i=0; i<sort.length; i++)
    {
        if(!map[sort[i]])
        {
            map[sort[i]]=[strs[i]]
        }
        else
        {
            map[sort[i]].push(strs[i])
        }
        
    }
    return Object.values(map)
    
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))