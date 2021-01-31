//purpose is to change the class to active when it is active 
const panels = document.querySelectorAll('.panel');

console.log(panels[0])

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
};