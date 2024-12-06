window.onload = function() {
    const isAdmin = localStorage.getItem("admin");

    if (isAdmin) {
        document.querySelectorAll('.admin-only').forEach(item => item.classList.add('show'));
    }

    document.querySelectorAll('.dashboard-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
};
