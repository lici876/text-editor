const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Handle the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default install prompt
  event.preventDefault();
  // Save the event so it can be triggered later
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});

// Implement the click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // Clear the deferredPrompt variable, it can only be used once
    deferredPrompt = null;
    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Handle the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed', event);
  // Hide the install button
  butInstall.style.display = 'none';
});
