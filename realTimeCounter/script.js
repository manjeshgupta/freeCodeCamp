const textarea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textarea.addEventListener("input", () => {
  let text = textarea.value;

  if (text.length > 50) {
    text = text.substring(0, 50); // 
    textarea.value = text;        
  }
  charCount.textContent = `Character Count: ${text.length}/50`;

  if(text.length >= 50){
    charCount.classList.add("red");
  } else{
    charCount.classList.remove("red");
  }
});
