let next = 'https://swapi.dev/api/people/?page=1'; 
let previous; 
const mainElement = document.querySelector('.main')
const headerElement = document.querySelector('header')
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

//Skapar en rubrik till hemsidan

const rubrik = "Starwars Projekt"
 const rubrikTag = document.createElement('h1')
 const rubrikNode = document.createTextNode(rubrik)
 rubrikTag.appendChild(rubrikNode)
headerElement.appendChild(rubrikTag)





 const beskrivning = "Data hämtas från ett API. Listan redovisar olika Starwars karaktärer. Genom att klicka på en karaktär får du fram mer information om den karaktären. Klicka dig vidare till fler karaktärer genom att klicka på knapparna next eller prev."
 const beskrivningTag = document.createElement('h4')
 const beskrivningNode = document.createTextNode(beskrivning)
 beskrivningTag.appendChild(beskrivningNode)
 headerElement.appendChild(beskrivningTag)


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

                
                const height = 'Height: ' + person.height + 'cm'
                const mass = 'Mass: ' + person.mass + 'kg'
                const hairColor = 'Hair color: ' + person.hair_color
                const skinColor = 'Skin color: ' + person.skin_color
                const eyeColor = 'Eye color: ' + person.eye_color
                const birthYear = 'Birth Year: ' + person.birth_year
                const gender = 'Birth Year: ' + person.gender

                 

                 const h2Tag = document.createElement('h2')
                 const pTagHeight = document.createElement('p')
                 const pTagMass = document.createElement('p')
                 const pTagHairColor = document.createElement('p')
                 const pTagSkinColor = document.createElement('p')
                 const pTagEyeColor = document.createElement('p')
                 const pTagBirthYear = document.createElement('p')
                 const pTagGender = document.createElement('p')


                 const h2Node = document.createTextNode(str)
                 const heightTagNode = document.createTextNode(height)
                 const massTagNode = document.createTextNode(mass)
                 const hairColorNode = document.createTextNode(hairColor)
                 const skinColorNode = document.createTextNode(skinColor)
                 const eyeColorNode = document.createTextNode(eyeColor)
                 const birthYearNode = document.createTextNode(birthYear)
                 const genderNode = document.createTextNode(gender)
            

                 h2Tag.appendChild(h2Node)
                 pTagHeight.appendChild(heightTagNode)
                 pTagMass.appendChild(massTagNode)
                 pTagHairColor.appendChild(hairColorNode)
                 pTagSkinColor.appendChild(skinColorNode)
                 pTagEyeColor.appendChild(eyeColorNode)
                 pTagBirthYear.appendChild(birthYearNode)
                 pTagGender.appendChild(genderNode)

                 detailsElement.appendChild(h2Tag)
                 detailsElement.appendChild(pTagHeight)
                 detailsElement.appendChild(pTagMass)
                 detailsElement.appendChild(pTagHairColor)
                 detailsElement.appendChild(pTagSkinColor)
                 detailsElement.appendChild(pTagEyeColor)
                 detailsElement.appendChild(pTagBirthYear)
                 detailsElement.appendChild(pTagGender)
                 

                 
                
            }

            divElement.appendChild(pElement); 
            listElement.appendChild(divElement);
        }

    })

}

getData(next)