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

let siblings = getSiblings(document.getElementsByClassName('.icon3'));
siblingText = siblings.map(e => e.style.opacity = .85);
console.log(siblingText);

let highlight = function() {
    siblings.map(e => e.style.opacity = .85);
}

// document.getE.addEventListener('hover', highlight);

