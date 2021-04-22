//save webhookURL to localStorage
document.getElementById('saveURL').onclick = () => {
    localStorage.setItem('webhookUrl',document.getElementById('webhookUrl').value);
};