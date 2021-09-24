console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line');
window.addEventListener('online', () => UIkit.notification({
    message: "�Est�s de vuelta en l�nea!",
    status: 'success',
    pos: 'top-right',
    timeout: 5000
}));
window.addEventListener('offline', () => UIkit.notification({
    message: "Parece que est�s desconectado. Con�ctese a una conexi�n de red",
    status: 'warning',
    pos: 'top-right',
    timeout: 5000
}));;
