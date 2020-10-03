module.exports = function toReadable (number) {
  let  rez, rezTenth, figure, tenth, hundredth, tenthAR, hundredthAR ;
  let numb = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"];
  let tenthes = ["", "teen", "twenty", "thirty", "forty", "fifty", "sixty","seventy","eighty","ninety"];
  figure = number % 10;                            //3
  tenth = number % 100;                            //23
  hundredth = number %1000;                        //123
  tenthAR = (tenth-figure) /10;                    //2
  hundredthAR = (hundredth - tenth)/100;           //1
  if (hundredthAR == 0 && tenthAR == 0 && figure == 0){
    return "zero"
  }
  if(tenth<=15){
     rezTenth = numb[tenth];
  }
    else{
      if (tenth<=19){
        if(tenth==18){rezTenth="eighteen"}
        else{
        rezTenth = numb[figure] + tenthes[tenthAR]
        }
      }
      else{
        if (tenth<=99){
          if(figure == 0){rezTenth = tenthes[tenthAR]}
          else{
         rezTenth = tenthes[tenthAR] + " " + numb[figure]
          }
        }
  }
 }
  if (hundredthAR !== 0){
    if(tenth == 0){rez = numb[hundredthAR] + " hundred"}
    else{
     rez = numb[hundredthAR] + " hundred " + rezTenth;
    }
  }
  else {
    rez = rezTenth;
  }

  return rez;
 
}
