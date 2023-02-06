
// get all tech content switching buttons
const techContentSwitchingBtn = document.querySelectorAll('.tech-content-switching-area div');



const switchTechContentFunction = () => {

    techContentSwitchingBtn.forEach((btn, index) => {
        if(btn.classList.contains('active-tech-content')) {
            planetData(index);
        }
        function switchActiveContentBtn() {
            if(!btn.classList.contains('active-tech-content')) {
                let activeContentBtn = document.querySelector('.active-tech-content');
                activeContentBtn.classList.remove('active-tech-content');
                btn.classList.add('active-tech-content');
                planetData(index);
            }  
        }
        btn.addEventListener('click', switchActiveContentBtn);
    
    })
}
switchTechContentFunction();



async function planetData(index) {

    const Url = '../starter-code/data.json';
    const request = new Request(Url);

    const getData = await fetch(request);
    const data = await getData.json();

    functionHandlingTechTextContent(data.technology, index)
    functionHandlingTechImg(data.technology, index)
}

// get tech img content container
let techImgContentContainer = document.querySelector('.tech-content-img-section');

const functionHandlingTechImg = (data, index) => {
    let getActiveTechImg = document.querySelector('.active-tech-image');
    if(getActiveTechImg) getActiveTechImg.remove();

    const techImageWrapper = document.createElement('div');
    const techImg = document.createElement('img');

    techImg.src = `./starter-code/${data[index].images.portrait}`;

    // add class to tech image wrapper
    techImageWrapper.classList.add('active-tech-image');

    // append img to tech image wrapper
    techImageWrapper.appendChild(techImg);

    // append tech img wrapper to tech img content container
    techImgContentContainer.appendChild(techImageWrapper);
}


// get text content area
let techTextContentArea = document.querySelector('.tech-content-text-area');

// function handling tech page text content
const functionHandlingTechTextContent = (data, index) => {
    // active tech text content is removed if exists
    let getActiveTextContent = document.querySelector('.active-tech-text');
    if(getActiveTextContent) getActiveTextContent.remove();

    // create text content wrapper
    const techTextAreaWrapper = document.createElement('div');

    // create terminology text p tag
    const terminologyPtag = document.createElement('p');

    // create tech name
    const techName = document.createElement('h1');

    // create tech description
    const techDescription = document.createElement('p');

    // add classes to text content wrapper
    techTextAreaWrapper.classList.add('tech-text-area-wrapper');
    techTextAreaWrapper.classList.add('active-tech-text');

    // create terminology text in p tag
    terminologyPtag.innerHTML = 'THE TERMINOLOGY ...';

    // get tech name from json file
    techName.innerHTML = `${data[index].name}`;

    // get tech description from json file
    techDescription.innerHTML = `${data[index].description}`;

    // append created element to text content wrapper
    techTextAreaWrapper.appendChild(terminologyPtag);
    techTextAreaWrapper.appendChild(techName);
    techTextAreaWrapper.appendChild(techDescription);

    // append text content wrapper to text content area
    techTextContentArea.appendChild(techTextAreaWrapper);
}

