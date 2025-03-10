document.getElementById('addProductBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});