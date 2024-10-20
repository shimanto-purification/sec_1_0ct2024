

// Select the custom cursor element
let cursor = document.getElementsByClassName("mouse")[0];
cursor.style.position = 'absolute';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.borderRadius = '50%';
document.body.appendChild(cursor);

// Make the custom cursor follow the actual mouse pointer
document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
});