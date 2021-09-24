console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line');
window.addEventListener('online', () => UIkit.notification({
    message: "You're back online!",
    status: 'success',
    pos: 'top-right',
    timeout: 5000
}));
window.addEventListener('offline', () => UIkit.notification({
    message: "It seems that you're offline. Please connect to a network connection",
    status: 'warning',
    pos: 'top-right',
    timeout: 5000
}));;
