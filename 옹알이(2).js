function solution(babbling) {
    let count =0;
    let talkable = ["aya","ye","woo","ma"];
     for(let i =0; i<babbling.length; i++){
         let bab = babbling[i];
         
         for(let j =0; j<talkable.length; j++){
             if(bab.includes(talkable[j].repeat(2))) break;
             
             bab = bab.split(talkable[j]).join(" ");
         }
          if(bab.split(" ").join("").length === 0){
             count += 1;
         }
     }
     return count;
 }