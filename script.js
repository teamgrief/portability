async function typeSentence(sentence, eleRef, delay = 125) {
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

  typeSentence('Portability', '#sentence')