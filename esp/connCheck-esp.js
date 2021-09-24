console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line');
window.addEventListener('online', () => UIkit.notification({
    message: "¡Estás de vuelta en línea!",
    status: 'success',
    pos: 'top-right',
    timeout: 5000
}));
window.addEventListener('offline', () => UIkit.notification({
    message: "Parece que estás desconectado. Conéctese a una conexión de red",
    status: 'warning',
    pos: 'top-right',
    timeout: 5000
}));;
