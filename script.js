 


 
 
 
 
 
 /*
Part to whole viz
 */      

 
//<script>
/*

  Get The text to display over

*/
 // Get the paragraph element
 var paragraph_sex = document.getElementById("sex_ratio_para");

 // Show the paragraph
 paragraph_sex.style.display = "block";
//</script>
                               
                               
                               
                               
                               
                               
                               /* 
                                
                                            Predicting parttttttttt start
                                
                                
                                
                                
                                */

 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
            function ButtonFunction() {
              document.getElementById("myDropdown").classList.toggle("show");
            }

            // Close the dropdown if the user clicks outside of it
            window.onclick = function(event) {
              if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                  }
                }
              }
            }
/*
When a particular item is selected then changing the state of div
*/  
                      document.addEventListener('DOMContentLoaded', () => {
                        const tamilElement = document.getElementById('tamil');
                        if (tamilElement) {
                          tamilElement.addEventListener('click', (event) => {
                            event.preventDefault();
                            document.getElementById('img').src = 'mouse1.png';
                          });
                        } else {
                          console.error('Element with ID "tamil" not found');
                        }
                      });


/*
Asking 2nd questionnnn
*/ 
                      function showSecondQuestion() {
                        document.getElementById("second_question").style.display = "block";
                      }





            

                                 /* 
                                
                                            Predicting parttttttttt end
                                
                                
                                
                                
                                */








/*
function myFunction() {
  //const element = document.getElementsByClassName("wrapper");
  const element = document.getElementsByClassName("outer-wrapper");
  let x = element.scrollLeft;

  document.getElementById ("counter_text").innerHTML = "Horizontally: " + x.toFixed() ;
  console.log(x);
}

*/

/*
window.onscroll = function() {
    console.log("Window is scrolling");
};
console.log("js running")
/*
const getWindowScrollPosition = () => ({
    x: window.scrollX,
    y: window.scrollY
  });
*/

console.log("window running1");
let x= window;
let y = document.getElementsByClassName('outer-wrapper');
console.log(y);
  x.addEventListener('mouseover',() =>
            {
                console.log("Scrolled");
            }
  );
function f1()
            {
              console.log("Hover123");
            }

  function myFunction()
  {
   
    x=1;
    console.log(x+1);
    
  }
  console.log("window running2");

