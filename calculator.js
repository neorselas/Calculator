// function func1(){
//     let btn1 =document.getElementById("one").value;
//     // let btn2 =document.getElementById("two").value;
//     let operator = document.getElementById("add").value;

//     let input = document.getElementById("cal_field");
//     input.value = btn1;
// }

let result = document.getElementById('calc_field');
let Calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
      {
         try
         {
            calc_field.value = eval(calc_field.value);
         }
         catch(err)
         {
            alert("Invalid")
         }
      }
    }


//console.log(btn1);