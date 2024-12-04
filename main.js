// Get Elements 
const hero = document.querySelector(".hero")
const images = document.querySelectorAll(".images img")

// Set Sensitivity for Each img

const sensitivities = [25 , -30 , 10]

// Loop All imgs 

for(let i = 0 ; i < images.length ; i++){
    // Add A mousemove event to the hero Section 
    hero.addEventListener("mousemove", e =>{
        //  small timeout 'll make the effect smoother
        setTimeout(() =>  {
            const x = e.clientX;
            const y = e.clientY;

            // Get Half of the width & height of the her section 
            const w = hero.offsetWidth / 2
            const h = hero.offsetHeight / 2

            // Reformat the coordinate value with sensitvity
            const convertX = ((x - w) * sensitivities[i]) /w
            const convertY = ((y - h ) * sensitivities[i]) / h

            // Transfrom the images using the new values
            images[i].style.transform = `translateX(${convertX}px) translateY(calc(-50% - ${convertY}px))`;
            //We need To Keep the 50% Y Translate From The CSS
         
        },200)

    })

}