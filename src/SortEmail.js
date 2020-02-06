import React  from 'react'; 

function bindFilter(searchInput) {
    const filteringType = searchInput.getAttribute("data-filter-type");
    searchInput.addEventListener('click' , () => {
        sortElement(filteringType);
    });
}

function sortElement(filteringType) {
    const infoContainer = document.querySelector(".listOfPeople");
    const allEmail = document.querySelectorAll(".emailParagraph");
    let allListEmail;
    if (filteringType === "Ascending") {
        allListEmail = Array.prototype.slice.call(allEmail).sort((a, b) => (a.textContent > b.textContent) ? 1 : -1);
    } else {
        allListEmail = Array.prototype.slice.call(allEmail).sort((a, b) => (a.textContent > b.textContent) ? -1 : 1);
    }
    
    let result = allListEmail;
    result.forEach(person =>infoContainer.appendChild(person.parentElement.parentElement));
}

window.addEventListener('load', () => {
    const ascendingFilterButton = document.querySelector(".ascendingFilter");
    const descendingFilterButton = document.querySelector(".descendingFilter");
    bindFilter(ascendingFilterButton);
    bindFilter(descendingFilterButton);
});

function SortEmail () {
    return (
        <div className ="sorting-name">  
            <p>Sortuj email:</p>
            <button data-filter-type = "Ascending" className ="ascendingFilter" > A-Z</button>
            <button data-filter-type = "Descending" className ="descendingFilter"> Z-A</button>
        </div>
    )
}

export default SortEmail;