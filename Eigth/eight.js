const body = document.querySelector('body');
body.addEventListener('click',(e)=>{
    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');

    const color = ['red','blue','orange','purple','green','yellow'];
    circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)];

    circleElement.style.top = `${e.clientY}px`;
    circleElement.style.left = `${e.clientX}px`;
    circleElement.style.transform = 'translate(-50%, -50%)';

    body.append(circleElement);
    circleElement.textContent = 'Hi';

    setTimeout(()=>{
        circleElement.remove();
    },5000)
})