let display = document.getElementById('display')
let current = ''
let operator = ''
let firstNum = ''
let secondNum = ''


function appendVal(value) {
     
       if (['+','-','*','/'].includes(value)) {
               if (firstNum === '') {
                    firstNum = current          
               }    
               operator = value
               current = ''           
       } else {
               current+= value              
       }    
       display.value = current                   
}

function Cleardisplay() {
        display.value = ''
        current = ''
        firstNum = ''
        secondNum = ''
        operator = ''                      
}

function Calculate() {
       secondNum = current  
       
       let result ;
       let num1 = parseFloat(firstNum)
       let num2 = parseFloat(secondNum)

           switch (operator) {
           case '+':
            result = num1+num2                  
           break;

           case '-':
            result = num1-num2                  
           break;

           case '*':
            result = num1*num2                  
           break;

           case '/':
            result = num2 !==0 ? num1/num2:'Error'                  
           break;
       
           default:
              result = 'Error'                
           break;
       }

       display.value = result
       current = result.toString()
       firstNum = ''
       secondNum = ''
       operator = ''
}