const element = document.getElementById('redirecting');

setTimeout(() => {
    element.style.display = 'block';
    setTimeout(() => {
        window.location = "http://localhost:3000";
    },3000)
},1500)