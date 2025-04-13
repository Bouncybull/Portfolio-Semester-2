let titlescreen = document.getElementById("Title_screen");

titlescreen.addEventListener("click", function(event)
{

})

async function getData() {
    const url = "./dialogue.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);

      /* let text = document.createElement("p");
      text.innerHTML = json.location.name + " " + json.location.localtime;
      document.getElementById("this").appendChild(text);

      let text2 = document.createElement("p");
      text2.innerHTML = json.current.temperature + "°C";
      document.getElementById("this").appendChild(text2); */

    } catch (error) {
      console.error(error.message);
    }
  }