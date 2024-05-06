document.addEventListener('DOMContentLoaded', () => {
    // Target all main menu items with submenus
    const menuItems = document.querySelectorAll('.menu__item[aria-haspopup="true"]');
    
    // Add click event listener for each menu item
    menuItems.forEach(menuItem => {
        const submenu = menuItem.querySelector('.submenu');
        console.log(submenu);
        
        if (submenu) {
            // Toggle submenu visibility
            menuItem.querySelector('.menu__item__link.has-subitems').addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default link action
                const isVisible = submenu.style.display === 'block';
                submenu.style.display = isVisible ? 'none' : 'block';
            });

            // Hide submenu when clicking outside
            document.addEventListener('click', (event) => {
                if (!menuItem.contains(event.target)) {
                    submenu.style.display = 'none';
                }
            });
        }
    });
});
