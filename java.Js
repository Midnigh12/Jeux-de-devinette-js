const message= document.getElementById('message')
const random= document.getElementById('random')
const input= document.querySelector('.input')
const recom= document.getElementById('recom')
const but= document.querySelector('.but')
        
let score= 0
         
            random1= Math.random()*11 << 0
            random2= Math.random()*11 << 0
             
           random.innerText= `${random1} + ${random2}`
        
function soumetre(){
            let number= document.getElementById('number').value
            if(random1 + random2 == number){
                message.innerText='bonne réponse'
                message.style.background='green'
                score++
                
                 random1= Math.random()*11 << 0;
                 random2= Math.random()*11 << 0;
                 console.log(random1);
                 console.log(random2);
                 
                 random.innerText= `${random1} + ${random2}`
                 
             
                
        

            }else{
                message.innerText='mauvaise réponse'
                message.style.background='red'
                input.style.display='none'
                recom.style.display='block'
                random.innerHTML= `<h2>score<br>${score}</h2>`}

                

        }
