
// get all crew switching dots
const dots = document.querySelectorAll('.dot');
// console.log(dots.length);


const switchDotFunction = () => {

    dots.forEach((dot, index) => {
        if(dot.classList.contains('active-dot')) {
            planetData(index);
        }
        function switchActiveDot() {
            if(!dot.classList.contains('active-dot')) {
                let activeDot = document.querySelector('.active-dot');
                activeDot.classList.remove('active-dot');
                dot.classList.add('active-dot');
                planetData(index);
            }  
        }
        dot.addEventListener('click', switchActiveDot);
    
    })
}
switchDotFunction();



async function planetData(index) {

    const Url = '../starter-code/data.json';
    const request = new Request(Url);

    const getData = await fetch(request);
    const data = await getData.json();

    functionHandlingCrewPics(data.crew, index)
    functionHandlingCrewDetails(data.crew, index)
}


// function handling crew member image
let crewMemberImageContainer = document.querySelector('.crew-member-img');

const functionHandlingCrewPics = (data, index) => {
    let getActiveMemberImage = document.querySelector('.active-member-img');
    if(getActiveMemberImage) getActiveMemberImage.remove();

    const crewMemberImageWrapper = document.createElement('div');
    const crewMemberImage = document.createElement('img');

    crewMemberImage.src = `./starter-code/${data[index].images.png}`;

    crewMemberImageWrapper.classList.add('active-member-img');

    crewMemberImageWrapper.appendChild(crewMemberImage);
    crewMemberImageContainer.appendChild(crewMemberImageWrapper);
}


// function handling crew member details
let roleNameBioContaner = document.querySelector('.role-name-bio');

const functionHandlingCrewDetails = (data, index) => {

    let activeDetails = document.querySelector('.active-member-details');
    if(activeDetails) activeDetails.remove();

    // create wrappere container for role name and bio for members
    const activeMemberDetails = document.createElement('div');
    // create h1 tag for crew member role
    const crewMemberRole = document.createElement('h1');
    // create h2 tag for crew member name
    const crewMemberName = document.createElement('h2');
    // create p tag for crew member bio
    const crewMemberBio = document.createElement('p');

    // add member role value
    crewMemberRole.innerHTML = `${data[index].role}`;

    // add member name value
    crewMemberName.innerHTML = `${data[index].name}`;

    // create member bio value
    crewMemberBio.innerHTML = `${data[index].bio}`;


    // add active member class to div
    activeMemberDetails.classList.add('active-member-details');

    activeMemberDetails.appendChild(crewMemberRole);
    activeMemberDetails.appendChild(crewMemberName);
    activeMemberDetails.appendChild(crewMemberBio);

    roleNameBioContaner.appendChild(activeMemberDetails);
}