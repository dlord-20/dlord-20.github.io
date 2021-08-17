// Skills opacity changer

// Getting closer but still needs some work

let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

let skillIcons = document.getElementsByClassName('icons');

skillIcons[0].addEventListener('mouseover', (event) => {
    let target = event.target;
    //Change sibling opacity
    if(document.getElementById(target.id) === null) {
        //Making sure we are not tarketing objects without ids
    } else {
        let parent = document.getElementById(target.id).parentNode;

        let currentSiblings = getSiblings(parent);
        for(let i = 0; i < currentSiblings.length; i++) {
            currentSiblings[i].style.opacity = '.8';
        }

        document.getElementById('skills-header').innerHTML = `Skills | ${target.id}`;
    }
});

skillIcons[0].addEventListener('mouseout', (event) => {
    let target = event.target;
    //Reset sibling opacity
    if(document.getElementById(target.id) === null) {
        //Making sure we are not tarketing objects without ids
    } else {
        let parent = document.getElementById(target.id).parentNode;
        let currentSiblings = getSiblings(parent);
        for(let i = 0; i < currentSiblings.length; i++) {
            currentSiblings[i].style.opacity = '';
        }

        document.getElementById('skills-header').innerHTML = `Skills`;
    }
});