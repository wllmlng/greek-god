function test(input, tries){
    let map = new Map();
    map.set("food", 1);
    map.set("bar", 3)

    try{
        if(map.get(input)){
            return map.get(input)
        }else if(tries < 3 ){
            console.log(tries)
            return test(input, tries + 1)
        }else{
            throw Error("no good?")
        }
        
    }catch(e){
        // if(tries > 3){
            // console.log(tries)
            console.log(e)
        // }
        
    }
    // return test(input, tries + 1)
 
}  

let input = "foo";
let tries = 0;
console.log(test(input, tries))