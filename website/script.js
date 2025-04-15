let titlescreen = document.getElementById("Title_screen");
let choices = document.getElementById("Choices");

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

    if(text_num == dialogue.dialogue.length)
    {
      choices.style.visibility = "initial";
    }
  } catch (error) {
    console.error(error.message);
  }
}
