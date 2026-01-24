const result = document.getElementById('result');


setInterval(()=>{
    const currentTime = Date.now();

    const OlypmicTime = new Date(2028, 5, 14).getTime();

    let timeLeft = OlypmicTime - currentTime;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    timeLeft %= 1000 * 60 * 60 * 24;

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    timeLeft %= 1000 * 60 * 60;

    const mins = Math.floor(timeLeft / (1000 * 60));
    timeLeft %= 1000 * 60;

    const secs = Math.floor(timeLeft / 1000);
    timeLeft %= 1000;
    result.textContent = `${days} Days ${hours} hours ${mins} minutes ${secs} seconds`;
},1000)
