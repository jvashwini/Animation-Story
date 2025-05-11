let dialogues = [
    { 
      character: 'shichan', 
      text: "Hey Shiro! Your new home is ready, huh?", 
      image: "images/Shinchan.jpg.jpeg" 
    },
    { 
      character: 'shiro', 
      text: "Woof! Yes, I'm so excited!", 
      image: "images/shiro.jpg.jpeg" 
    },
    { 
      character: 'shichan', 
      text: "It looks so amazing, I can't wait to visit!", 
      image: "images/shinchan _shy.jpg.jpeg" 
    },
    { 
      character: 'shiro', 
      text: "You’re always welcome to visit anytime!", 
      image: "images/shiro.jpg.jpeg" 
    },
    { 
      character: 'shichan', 
      text: "Maybe I’ll bring my chacobii too!", 
      image: "images/shinchan bhuri.jpg.jpeg" 
    },
    { 
      character: 'shiro', 
      text: "No snacks in my house, please!", 
      image: "images/shiro.jpg.jpeg" 
    }
  ];
  
  let index = 0;
let timeoutId;

function startStory() {
    const shichan = document.getElementById("shichan");
  
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("stop-btn").style.display = "block";
    document.getElementById("bye-scene").classList.remove("show");
    document.getElementById("bg-music").play();

    shichan.style.left = "10%";
  
    setTimeout(() => {
      displayDialogue();
    }, 1300);
  }
  
  function displayDialogue() {
    const shichan = document.getElementById("shichan");
    const shiro = document.getElementById("shiro");
    const shichanSpeech = document.getElementById("speech-shichan");
    const shiroSpeech = document.getElementById("speech-shiro");
  
    if (index < dialogues.length) {
      const current = dialogues[index];
  
      if (current.character === "shichan") {
        shichan.src = current.image;
        shichan.classList.add("shake");
        shiro.classList.remove("shake");
      
        shichanSpeech.innerText = current.text;
        shichanSpeech.style.display = "block";
        shiroSpeech.style.display = "none";
      } else {
        shiro.src = current.image;
        shiro.classList.add("shake");
        shichan.classList.remove("shake");
      
        shichanSpeech.style.display = "none";
        shiroSpeech.innerText = current.text;
        shiroSpeech.style.display = "block";
      }
      
  
      index++;
      timeoutId = setTimeout(() => {
        displayDialogue();
      }, 3000);
    } else {
          
  shichan.classList.remove("shake");
  shiro.classList.remove("shake");
//   document.getElementById("stop-btn").style.display = "none";
  showByeScreen();
    }
  }
  function showByeScreen() {
    const byeScreen = document.getElementById("bye-scene"); 
    byeScreen.classList.add("show");
  }
  
  function stopStory() {
    clearTimeout(timeoutId);
    index = 0;
  
    const shichan = document.getElementById("shichan");
    const shichanSpeech = document.getElementById("speech-shichan");
    const shiroSpeech = document.getElementById("speech-shiro");
  
    shichan.style.left = "-200px";
    shichanSpeech.style.display = "none";
    shiroSpeech.style.display = "none";
  
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("stop-btn").style.display = "none";
    document.getElementById("bye-scene").classList.remove("show");
    document.getElementById("bg-music").pause();
    document.getElementById("bg-music").currentTime = 0;
    
document.getElementById("shichan").classList.remove("shake");
document.getElementById("shiro").classList.remove("shake");

  }
  