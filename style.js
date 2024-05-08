document.addEventListener('DOMContentLoaded', () => {
    // Target all main menu items with submenus
    const menuItems = document.querySelectorAll('.menu__item.has-subitems');

    // Add click event listener for each menu item
    menuItems.forEach(menuItem => {
        const submenu = menuItem.querySelector('.submenu');

        if (submenu) {
            menuItem.addEventListener('mouseover', (event) => {
                event.preventDefault(); // Prevent the default link action
                const isVisible = submenu.style.display === 'block';
                submenu.style.display = isVisible ? 'none' : 'block';
                // Stop the event from bubbling up to document
                event.stopPropagation();
            });

            menuItem.addEventListener('mouseout', (event) => {
                event.preventDefault(); // Prevent the default link action
                submenu.style.display = 'none';
                // Stop the event from bubbling up to document
                event.stopPropagation();
            });

            // Click event to toggle the submenu
            menuItem.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default link action
                const isVisible = submenu.style.display === 'block';
                submenu.style.display = isVisible ? 'none' : 'block';
                event.stopPropagation(); // Optionally stop event propagation if it causes issues
            });
        }
    });

    // Hide submenu when clicking outside
    document.addEventListener('click', (event) => {
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach(submenu => {
            if (!submenu.parentElement.contains(event.target)) {
                submenu.style.display = 'none';
            }
        });
    });
});