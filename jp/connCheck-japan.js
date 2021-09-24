console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line');
window.addEventListener('online', () => UIkit.notification({
    message: "オンラインに戻りました!",
    status: 'success',
    pos: 'top-right',
    timeout: 5000
}));
window.addEventListener('offline', () => UIkit.notification({
    message: "オフラインのようです。ネットワーク接続に接続してください",
    status: 'warning',
    pos: 'top-right',
    timeout: 5000
}));;
