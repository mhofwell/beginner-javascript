const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabPanel"]');

function handleTabClick(e) {
        console.log(e);
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
