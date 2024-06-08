//-------------------- TYPING TEXT THING --------------------
var typingText = document.querySelector('.typing-text');
if(typingText)
{
    var typed = new Typed(typingText, {
        strings: ["Seeking Software Engineer position", "Seeking Game Developer position"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });

}



function setRandomBackground() 
{
    const images = [
        '/images/lighthouse.jpg',
        '/images/tree.jpg',
        '/images/tree2.jpg',
 
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomIndex]})`;
}
window.onload = setRandomBackground;

