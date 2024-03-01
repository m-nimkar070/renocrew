//Q1 and Q2
// const loadscriptTag = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script")
//     script.src = src
//     document.head.appendChild(script)
//     script.onload = () => {
//       resolve(src + " Done Success")
//     }
//     script.onerror = () => {
//       reject(" Rejected")
//     }
//   })
// }

// const loader = async () => {
//   let a = await loadscriptTag("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
//   console.log(a)
// }

// loader()


//Q3

// let promise1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Something is wrong"))
//     }, 3000)
//   })
// }

// let result = async () => {
//   try {
//     let returnValue = await promise1();
//     console.log(returnValue);
//   }
//   catch (error) {
//     console.log("Error has been handled by try catch")
//   }
// }

// result()

//Q4

// let promiseAll1 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10)
//     }, 1000)
//   })
// }
// let promiseAll2 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(20)
//     }, 2000)
//   })
// }
// let promiseAll3 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(30)
//     }, 3000)
//   })
// }

// let runAll = async () => {
  // let a1 = await promiseAll1();
  // let a2 = await promiseAll2();
  // let a3 = await promiseAll3();

//   let a1 = promiseAll1();
//   let a2 = promiseAll2();
//   let a3 = promiseAll3();
//   let allPromise = await Promise.all([a1, a2, a3])
//   console.log(allPromise)
// }

// runAll();


// TASK 5 Hackerman

let array = [
    "Initializing Hacking...",
    "Connecting to your device...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2...",
    "Connected Successfully...",
    "Username deviceID:M1SD2L...",
    "Trying Brute Force...",
    "200k passwords tried...",
    "Match not found...",
    "Another set of passwords trying...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
  ]
  
  const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, seconds * 1000)
    })
  }
  
  const startHacking = async (message) => {
    await sleep(2)
    let te = document.getElementById("text");
    
    te.innerHtml =te.innerHTML + message + "<br>"
    console.log(message)
  }
  
  const result = async () => {
    for (let i = 0; i < array.length; i++) {
       await startHacking(array[i])
    }
  }
  
  result();