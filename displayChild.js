function displayChildName() {
    var childName = localStorage.getItem('name');
    var childNameElements = document.querySelectorAll('.KidsInfo .childNameDisplay');

    for (var i = 0; i < childNameElements.length; i++) {
        childNameElements[i].textContent = childName;

    // Add the .kidinfo class to the parent element
    childNameElements[i].parentElement.classList.add('kidinfo');
    }
}