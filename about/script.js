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

  typeSentence('About', '#sentence')

const mechKey = document.getElementById('mechvibes')
document.addEventListener('keydown', () => {
    mechKey.src = 'https://cdn.discordapp.com/attachments/783785528670683158/844040683329552384/mechvibes.png'
    mechKey.style.transform = "translateY(2%)"
})

document.addEventListener('keyup', () => {
    mechKey.src = 'https://cdn.discordapp.com/attachments/783785528670683158/844039751412744252/mechvibes.png'
    mechKey.style.transform = "translateY(0%)"
})