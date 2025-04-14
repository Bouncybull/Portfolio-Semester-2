let titlescreen = document.getElementById("Title_screen");
let text_num = 0;

titlescreen.addEventListener("click", nextDialogue);

async function nextDialogue() {
  const url = "./dialogue.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const dialogue = await response.json();

    if(text_num == 0)
    {
      let elements = document.getElementsByClassName("start_screen");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.visibility = "hidden";
      }
    }

    if(text_num < dialogue.dialogue.length)
      {
   
        let text = document.getElementById("Dialogue_box");
        text.textContent = dialogue.dialogue[text_num];
    
        text_num++;
      }
  } catch (error) {
    console.error(error.message);
  }
}

// Get canvas context
const ctx = document.getElementById("Book").getContext("2d");

// Load image
const image = new Image();
image.onload = () => {
  // Draw the image into the canvas
  ctx.drawImage(image, 0, 0);
};
image.src = "NES - The Legend of Zelda - Book.png";
