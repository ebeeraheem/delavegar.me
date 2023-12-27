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

// keyboard  accessibilty socials
function allSocials() {
    document.querySelectorAll('#socials').addEventListener('keyup', (event)=> {
       if (event.key === "Enter"){
        event.target.click();
       }
    })
}
