async function typeSentence(sentence, eleRef, delay = 150) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
        document.querySelector(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  typeSentence('Downloads', '#sentence')

  function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("packs.json", function(text){
  let data = JSON.parse(text)
  document.addEventListener('keydown', () => {
    setTimeout(() => {
      searchVal = document.querySelector('#query').value

      for(i = 0; i < data.switches.length; i++) {
        keebSwitch = data.switches[i].name.toLowerCase()
        if(keebSwitch.includes(searchVal)) {
          console.log(keebSwitch)
        }
      }
    }, 100);

  })
});

