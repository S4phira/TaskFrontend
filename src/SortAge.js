import React  from 'react'; 

function bindFilter(searchInput) {
    const filteringType = searchInput.getAttribute("data-filter-type");
    searchInput.addEventListener('click' , () => {
        sortElement(filteringType);
    });
}

function sortElement(filteringType) {
    const infoContainer = document.querySelector(".listOfPeople");
    const allAge = document.querySelectorAll(".ageParagraph");;
     let allListAge = Array.prototype.slice.call(allAge);
    if (filteringType === "Ascending") {
        allListAge.sort((a, b) => a.textContent - b.textContent);
    } else {
        allListAge.sort((a, b) => b.textContent - a.textContent);
    }
    let result = allListAge;
    result.forEach(person =>infoContainer.appendChild(person.parentElement.parentElement.parentElement));
}

window.addEventListener('load', () => {
    const ascendingFilterButtonAge = document.querySelector(".ascendingFilterAge");
    const descendingFilterButtonAge = document.querySelector(".descendingFilterAge");
    bindFilter(ascendingFilterButtonAge);
    bindFilter(descendingFilterButtonAge);
});

function SortAge () {
    return (
        <div className ="sorting-age">  
            <p>Sortuj wiek:</p>
            <button data-filter-type = "Ascending" className ="ascendingFilterAge" > Rosnąco </button>
            <button data-filter-type = "Descending" className ="descendingFilterAge"> Malejąco </button>
        </div>
    )
}

export default SortAge;