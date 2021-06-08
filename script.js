
const keys=document.querySelectorAll('.key');
const butt=document.getElementById('theme')

keys.forEach(key => {
    key.addEventListener('click', () => playnote(key))
})
function playnote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended' , () => {
        key.classList.remove('active')
    })
}

function ChangeTheme(){
    const tone = document.querySelectorAll('.key');
    const themebutton = document.getElementById('theme')
    const asdf = document.body;
    tone.forEach(e => {
      if(e.classList.contains('light')){
          e.classList.replace('light', 'dark')
      }else if(e.classList.contains('dark')){
          e.classList.replace('dark', 'old')
      }else{
          e.classList.replace('old', 'light')
      }
    })
    if(themebutton.classList.contains('light')){
        themebutton.classList.replace('light', 'dark')
    }else if(themebutton.classList.contains('dark')){
        themebutton.classList.replace('dark', 'old')
    }else{
        themebutton.classList.replace('old', 'light')
    }
    if(asdf.classList.contains('light')){
        asdf.classList.replace('light' , 'dark')
    }else if(asdf.classList.contains('dark')){
        asdf.classList.replace('dark' , 'old')
    }else{
        asdf.classList.replace('old' , 'light')
    }
}