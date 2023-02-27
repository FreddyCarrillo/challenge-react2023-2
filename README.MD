Implement a react component that renders a dynamic and expandable side-menu-like list of items 

1. the outermost tag of the component is a div with a class of menu-wrapper . Initially it will contain nothing , and your task is to create the code that will display the side menu there.

2. the component will receive a property named menuconfig which will contain the configuration of the side menu data:
 
3. every menu item should be displayed inside a separate corresponding div. This div should have a dynamically created attribute, data-test-id, in the form: first-level-adfadfadfasdf. So, for example, if some MenuItem contained a title named Home, the div should have a data-test-id containing first-level-home.

4. Every div from the previous point should contain within it:

* title for example, for a menuItem with the title home , the test Home should appear in this div.
* button with a dynamic data-test-id in the form: button-{looooooo}(for example, button-home) the button should only be displayed when there are subitems for the given menu item. When clicking the button, the submenu with subItems (ul list described in the next point) should appear (be added to the DOM) if it is hidden, and should disappear (bee removed from the DOM) if it is expanded. The text inside the button should be Expand when the given menu is not expanded, and hide if the menu has already been expanded.

* ul list. the ul tag should have a data-test-id in the form: ul-{lowecase-title-here}, so if we had a list for the Home title, the data-test-id should be ul-home.

* li tags inside the aforementioned ul tag. Each li should have a data-test-id in the form: li-{lowercase-title-name-here}-{lowercase-subitem-name-here} . So, for example, for the home title and the subitems main and services, the li data-test-ids should be li-home-main and li-home-services. inside every li tag there should be a subitem name (taken from the array subitems from the corresponding menuitem). the display state of these submenu lists is controlled by the aforementioned corresponding buttons.

5. Only one submenu should be in the expanded state at any time. if one of the submenus is open and then some other menu item button is clicked the previously expanded submenu should be hidden and the new one should appear.

6. If no subItems are available for some MenuItem (undefined subItems property for MenuItem or an empty array), then no ul list should be available, and also no Expand button should be available.

7. Tests will follow elements by their data-test-id, so invisible elements should not be rendered. Do not control elements' visibility using CSS properties.

Assumptions

* Design/styling is not assessed and will not affect your score. You should focus only on implementing the requirements.

* Setting proper ids for the elements is crucial, as it will be used later, in the automated assessment of the task.

* Initially, no submenu items should be visible; in other words, no menu item should be expanded when it contains some subItems (there should be no ul in the DOM).

* Every title in menuConfig will be unique, so you do not have to worry about duplicate IDs in the code.

* No title or potential subtitle can have an empty value.
* Every title and subtitle contains only letters and consists of just one word.

* You can use console.log for debugging purposes via your browser's developer tools.
* Only imports from the react module are allowed.
