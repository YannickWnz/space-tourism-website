
const planetLinks = document.querySelectorAll('.planets-links ul li');

// get planet images container
const planetImagesContainer = document.querySelector('.planets-img-container');

// get planet details container
const planetDetailsContainer = document.querySelector('.planets-details-container');

const switchPlanetFunction = () => {

    planetLinks.forEach((link, index) => {
        if(link.classList.contains('active')) {
            planetData(index);
        }
        function switchActiveLink() {
            if(!link.classList.contains('active')) {
                let activeLink = document.querySelector('.active');
                activeLink.classList.remove('active');
                link.classList.add('active');
                planetData(index);
            }  
        }
        link.addEventListener('click', switchActiveLink);
    
    })
}
switchPlanetFunction();

async function planetData(index) {

    const Url = '../starter-code/data.json';
    const request = new Request(Url);

    const getData = await fetch(request);
    const data = await getData.json();

    functionHandlingPlanetDetails(data.destinations, index);
    functionHandlingPlanetImg(data.destinations, index);
}


const functionHandlingPlanetImg = (data, index) => {

    let getActivePlanetImage = document.querySelector('.active-planet-img');
    if(getActivePlanetImage) getActivePlanetImage.remove();

    const planetImageWrapper = document.createElement('div');
    const planetImage = document.createElement('img');

    planetImage.src = `./starter-code/${data[index].images.png}`;

    planetImageWrapper.classList.add('active-planet-img');

    planetImageWrapper.appendChild(planetImage);
    planetImagesContainer.appendChild(planetImageWrapper);

    // img.src = `./starter-code/${data.destinations[index].images.png}`;
}

const functionHandlingPlanetDetails = (data, index) => {

    let activeWrapper = document.querySelector('.active-details-wrapper');
    if(activeWrapper) activeWrapper.remove();

    const planetDetailsWrapper = document.createElement('div');
    const planetName = document.createElement('h1');
    const planetDescription = document.createElement('p');
    const horizontalLine = document.createElement('hr');
    const distanceDaysContainer = document.createElement('div');
    const distanceDetails = document.createElement('div');
    const daysDetails = document.createElement('div');
    const avgDistance = document.createElement('p');
    const days = document.createElement('p');
    const avgDistanceValue = document.createElement('p');
    const daysValue = document.createElement('p');
    
    // adding classes to planet details wrapper
    planetDetailsWrapper.classList.add('planets-details-wrapper');
    planetDetailsWrapper.classList.add('active-details-wrapper');

    // adding class to planet description paragraph
    planetDescription.classList.add('planet-desc');

    // adding class to distance days container
    distanceDaysContainer.classList.add('distance-days');

    // adding class to distance container
    distanceDetails.classList.add('distance');

    // adding class to days container
    daysDetails.classList.add('days');

    // create planet name value
    planetName.innerHTML = `${data[index].name}`;

    // create planet description value
    planetDescription.innerHTML = `${data[index].description}`;

    // create distance paragraph value
    avgDistance.innerHTML = 'AVG. DISTANCE';
    avgDistanceValue.innerHTML = `${data[index].distance}`;

    // create days paragraph value 
    days.innerHTML = 'EST. TRAVEL TIME';
    daysValue.innerHTML = `${data[index].travel}`;

    // append distaance paragraph value to distance container
    distanceDetails.appendChild(avgDistance);
    distanceDetails.appendChild(avgDistanceValue);

    // append days paragraph value to days container
    daysDetails.appendChild(days);
    daysDetails.appendChild(daysValue);

    // append distance and days details to distanceDaysContainer
    distanceDaysContainer.appendChild(distanceDetails);
    distanceDaysContainer.appendChild(daysDetails);

    // append planet name to planet details wrapper 
    planetDetailsWrapper.appendChild(planetName);

    // append planet name to planet details wrapper 
    planetDetailsWrapper.appendChild(planetDescription);

    // append horizontalLine to planet details wrapper 
    planetDetailsWrapper.appendChild(horizontalLine);

    // append distance days container to planet details wrapper 
    planetDetailsWrapper.appendChild(distanceDaysContainer);

    // append planet details wrapper to planet details container
    planetDetailsContainer.appendChild(planetDetailsWrapper);

}

// handling responsive navbar section

// grabbing sections containing menu links
const menuContainer = document.querySelector('.links-container');
// grabbing menu bars icon
const menuBars = document.querySelector('.menu');
// grabbing close menu icon
const closeMenu = document.querySelector('.close-menu');

// function handling showing menu section container
const showMenu = () => {
    menuContainer.classList.remove('toggle-menu');
}

// function handling hiding menu section container
const hideMenu = () => {
    menuContainer.classList.add('toggle-menu');
}

// add event listener to icons
menuBars.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);

