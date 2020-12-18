let next = 'https://swapi.dev/api/people/?page=1'; 
let previous; 
const mainElement = document.querySelector('.main')
const listElement = document.querySelector('section.starwarspeople > div.list')
const detailsElement = document.querySelector('section.people > div.details')
const prevBtnElement = document.querySelector('button.prev-btn')
const nextBtnElement = document.querySelector('button.next-btn')

prevBtnElement.addEventListener('click', prevBtnOnClick)
nextBtnElement.addEventListener('click', nextBtnOnClick)

function prevBtnOnClick(){
    if(previous != null){
        getData(previous)
    }
}

function nextBtnOnClick(){
    if(next != null){
        getData(next)
    }
}

function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function getData(url){

fetch (url)
    .then(response => response.json())
    .then(data => 
        {

        next = data.next;
        previous = data.previous; 
        persons = data.results;

        removeAllChildNodes(listElement)

        for (let i = 0; i < persons.length; i++){
            const person = persons[i];
            
            let str = person.name; 
            
            const divElement = document.createElement('div'); 
            const pElement = document.createElement('p'); 
            pElement.innerText = str; 
            console.log(person)

            pElement.onclick = function(){
                
                removeAllChildNodes(detailsElement)

                const information = [person.height, person.mass, person.hair_color, person.skin_color, person.eye_color, person.birth_year, person.gender]
                 
                for (let i = 0; i < information.length; i++){
                    const aboutPerson = information[i]; 

                    console.log(aboutPerson)
                }

                 //const information = `${'Height: ' + person.height}${'Mass: ' + person.mass}${person.hair_color}${person.skin_color}${person.eye_color}${person.birth_year}${person.gender}`;

                 const h2Tag = document.createElement('h2')
                 const aboutPerson = document.createElement('p')

                 const h2Node = document.createTextNode(str)
                 const pInformationNode = document.createTextNode(information)
            

                 h2Tag.appendChild(h2Node)
                 pTagInformation.appendChild(pInformationNode)

                 detailsElement.appendChild(h2Tag)
                 detailsElement.appendChild(aboutPerson)
                 

                 console.log(aboutPerson)
                
            }

            divElement.appendChild(pElement); 
            listElement.appendChild(divElement);
        }

    })

}

getData(next)