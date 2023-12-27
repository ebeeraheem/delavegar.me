// keyboard responsive
// download button for the resume file

function handleButtonResume() {
    alert("Button Clicked!");
    document.querySelector('#download').addEventListener('keyup', (event) => {
        if (event.key === "Enter") {
            event.target.click();
        }
    })
}

// keyboard  accessibilty for socials
function allSocials() {
    document.querySelectorAll('#socials').addEventListener('keyup', (event)=> {
       if (event.key === "Enter"){
        event.target.click();
       }
    })
}


// keyboard accessibility for project cards

function projectCards() {
    document.querySelectorAll('#project-card').addEventListener('keyup', (event) => {
        if (event.key === "Enter"){
            event.target.click();
        }
    })
}