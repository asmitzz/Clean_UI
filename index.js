const arr = [1,2,3,4,5,6]


Array.prototype.MyMap = (cb)=>{
   const result = [];
   for(let i = 0; i < this.length;i++){
       result.push(cb(this[i],i,this))
   }
   return result;
}

const result = arr.MyMap((num,index,array) => num + 1);
console.log(result)

