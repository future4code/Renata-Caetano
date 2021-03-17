const integerNumber=(input:number) =>{

if(input >= 0){
    integerNumber(input -1)
    console.log(input)
}

}
integerNumber(3)