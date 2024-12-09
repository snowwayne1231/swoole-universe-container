// Register service worker to control making site work offline

console.log("-----index.js-------");
window.addEventListener("beforeinstallprompt", (e) => {
    console.log("--beforeinstallprompt--1111-");
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = e;
});
window.addEventListener("appinstalled", () => {
    console.log("----appinstalled>>>>>");
});
// Code to handle install prompt on desktop

// let deferredPrompt;
// const addBtn = document.querySelector('.add-button');
// console.log("-----addBtn------",addBtn);
// window.addEventListener('beforeinstallprompt', (e) => {
//   console.log("--beforeinstallprompt---");
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   window.deferredPrompt = e;
//   // Update UI to notify the user they can add to home screen
//   if (!addBtn) return;
//   addBtn.style.display = 'block';

//   addBtn.addEventListener('click', () => {
//     // hide our user interface that shows our A2HS button
//     addBtn.style.display = 'none';
//     // Show the prompt
//     deferredPrompt.prompt();
//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice.then((choiceResult) => {
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }
//       deferredPrompt = null;
//     });
//   });
// });
