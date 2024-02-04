function savePassword() {
    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (website && username && password) {
        const passwordList = document.getElementById('passwords');
        const listItem = document.createElement('li');
        listItem.textContent = `Website: ${website} | Username: ${username} | Password: ${password}`;
        passwordList.appendChild(listItem);

        // Clear form fields
        document.getElementById('website').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('Please fill in all fields');
    }
}
