let ol = document.querySelector("ol");
let lastChild = ol.lastElementChild;
ol.insertBefore(lastChild, ol.firstElementChild);


let main = document.querySelector("main");

secondSection = main.children[1];
thirdSection = main.children[2];

titleTwo = secondSection.querySelector("h2");
titleThree = thirdSection.querySelector("h2");

secondSection.appendChild(titleThree);
thirdSection.appendChild(titleTwo);

let firstElement = secondSection.children[0];
secondSection.insertBefore(titleThree, firstElement); 

thirdSection.insertBefore(titleTwo, thirdSection.children[0]);

main.removeChild(thirdSection);