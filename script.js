var timer = 60;
var score = 0;
var hit;



//Show Score fnction ....
function Showscore(newscor){


      score = newscor;
      document.querySelector("#scr").textContent = score;


}

// Increase Score Function ......
function IncreaseSCr(){

   score = score + 10;
   document.querySelector("#scr").textContent = score;

}

// Show time function ..........
function ShowTime(){

setInterval(function(){

            if(timer>0){
               timer --;
               document.querySelector("#tim").textContent = timer;
            }
            else{

               
              document.querySelector("#btm").innerHTML =`<h1>Game Over<br>&nbsp &nbspscore: ${score}</h1>`
             
                       
               }

},1000)



}


// Show buble Num....
function ShowNum(){
    var clutter="";
    
    for(var i=0; i<108; i++){
         var rn=Math.floor(Math.random()*10)
            clutter +=`
                
            <div class="buble">${rn}</div>
            
            `
    
    }
    
    
    document.querySelector("#btm").innerHTML=clutter;
    
    }

    // hit Function ............
    function Showhit(){

      hit = Math.floor(Math.random()*10);
      document.querySelector("#hitt").textContent = hit;
   
    }


    // Final process
  
    document.querySelector("#btm").addEventListener("click", function(dets){

         if(Number(dets.target.textContent)=== hit){

               IncreaseSCr();
               ShowNum();
               Showhit();


         }


    })
    

 ShowNum(); // buble numbers 
 Showscore(0)  // Score Show
 ShowTime();  // Show timing
 Showhit();   // SHow hitt
 IncreaseSCr();   // Increase sccore 

 