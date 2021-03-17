const integerNumberDec=(input:number) =>{

      if(input >= 0){
        console.log(input)
        integerNumberDec(input -1)
            }
        }
    integerNumberDec(3)