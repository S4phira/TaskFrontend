import React  from 'react'; 

function bindFilter() {
    const searchInput = document.querySelector(".submitButton");
    searchInput.addEventListener('click' , searchElement);
}

function searchElement() {
    const infoContainer = document.querySelector(".listOfPeople");
    const allHeaders = document.querySelectorAll("h2");
    const allList = Array.prototype.slice.call(allHeaders);
    const submittedText = document.querySelector(".filterField").value.toUpperCase();
    let result = allList;
    result = result.filter(allList => allList.textContent.toUpperCase().includes(submittedText));
    infoContainer.textContent = '';
    result.forEach(person =>infoContainer.appendChild(person.parentElement.parentElement));
}
window.addEventListener('load', (event) => {
    bindFilter();
});

function refreshPage() {
    window.location.reload(true);
    }


function Header () {
    return (
        <div>
            <input className= 'filterField' type = "text" placeholder = "wyszukaj imię lub nazwisko"></input>
            <button className='submitButton'> Szukaj</button>
            <button  onClick= {refreshPage} > Resetuj</button>
        </div>
    )
}

export default Header;