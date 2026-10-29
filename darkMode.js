const switchToggle = document.querySelector('input[type= "checkbox"]');
const toggleIcon = document.getElementById("toggle-icon")
const nav = document.getElementById("nav");
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')

switchToggle.addEventListener('change', (e)=> {
    console.log(e);
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
        imageSwitchMode('dark');
    }else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
        imageSwitchMode('light');
    }
    
});
function darkMode() {
    toggleIcon.children[0].textContent = "Night Mode";
    toggleIcon.children[1].classList.replace('bi-brightness-high-fill', 'bi-moon-stars-fill');
    nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
}
function lightMode() {
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace( 'bi-moon-stars-fill', 'bi-brightness-high-fill');
    nav.style.backgroundColor = "rgba(213, 213, 213, 0.51)";
}

function imageSwitchMode (mode) {
    image1.src = `img/undraw_web_devices_re_m8sc_${mode}.svg`
    image2.src = `img/undraw_winter_designer_a-2-m7_${mode}.svg`
    image3.src = `img/undraw_freelancer_re_irh4_${mode}.svg`
}   

