// Button Press
document.querySelectorAll(".box").forEach(element => {
  element.addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML
    switchStatement(buttonInnerHtml)
    buttonAnimtion(buttonInnerHtml)
  })
})
// KeyBoard Press
document.addEventListener("keydown", function (event) {
  let key = event.key
  switchStatement(key)
  buttonAnimtion(key)
})
// Switch Statement
function switchStatement(n) {
  switch (n) {
    case "a":
      let audio1 = new Audio("sounds/001-al-fatihah.mp3")
      audio1.play()
      break
    case "b":
      let audio2 = new Audio("sounds/100-al-adiyat.mp3")
      audio2.play()
      break
    case "c":
      let audio3 = new Audio("sounds/101-al-qariah.mp3")
      audio3.play()
      break
    case "d":
      let audio4 = new Audio("sounds/102-at-takathur.mp3")
      audio4.play()
      break
    case "e":
      let audio5 = new Audio("sounds/103-al-asr.mp3")
      audio5.play()
      break
    case "f":
      let audio6 = new Audio("sounds/104-al-humazah.mp3")
      audio6.play()
      break
    case "g":
      let audio7 = new Audio("sounds/105-al-fil.mp3")
      audio7.play()
      break
    case "h":
      let audio8 = new Audio("sounds/106-quraish.mp3")
      audio8.play()
      break
    case "i":
      let audio9 = new Audio("sounds/107-al-maun.mp3")
      audio9.play()
      break
    case "j":
      let audio10 = new Audio("sounds/108-al-kauthar.mp3")
      audio10.play()
      break
    case "k":
      let audio11 = new Audio("sounds/109-al-kafirun.mp3")
      audio11.play()
      break
    case "l":
      let audio12 = new Audio("sounds/110-an-nasr.mp3")
      audio12.play()
      break
    case "m":
      let audio13 = new Audio("sounds/111-al-masad.mp3")
      audio13.play()
      break
    case "n":
      let audio14 = new Audio("sounds/112-al-ikhlas.mp3")
      audio14.play()
      break
    case "o":
      let audio15 = new Audio("sounds/113-al-falaq.mp3")
      audio15.play()
      break
    case "p":
      let audio16 = new Audio("sounds/114-an-nas.mp3")
      audio16.play()
      break

    default:
      console.log(buttonInnerHtml + " was pressed...!")
      break
  }
}

// Adding animation
function buttonAnimtion(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed")
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed")
  }, 100)
}

// function BellBoy(name, age, workingList) {
//   this.name = name
//   this.age = age
//   this.workingList = workingList
//   this.method = function () {
//     alert("Cleaning is in progress...!!")
//   }
// }

// let bellBoy1 = new BellBoy("Abu Ryhan", 22, ["just_code", "eat", "& Sleep"])

// // for (let i = 0; i < document.querySelectorAll(".box").length; i++) {
// //   document.querySelectorAll(".box")[i].addEventListener("click", function () {
// //     alert("I have got clicked...!")
// //   })
// }
