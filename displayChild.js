function displayChildName() {
    var childName = localStorage.getItem('name');
    var childNameElements = document.querySelectorAll('.KidsInfo .childNameDisplay');
    var childImage = localStorage.getItem('imageData');
    var childImageElements = document.querySelectorAll('.KidsInfo .childImageDisplay');

    for (var i = 0; i < childNameElements.length; i++) {
        childNameElements[i].textContent = childName;

    childNameElements[i].parentElement.classList.add('kidinfo');
    }

    for (var j = 0; j < childImageElements.length; j++) {
        childImageElements[j].src = childImage;


      }
}