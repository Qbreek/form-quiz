const submitBtn = document.getElementById('submit-btn');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');

submitBtn.addEventListener('click', () => {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    console.log(firstName, lastName);
})