// make DOM
const colorSections = Array.from(document.getElementsByClassName("colorSection"));
const colorChips = Array.from(document.getElementsByClassName("colorChip"));
const colorCodes = [];
for(const [i, colorSection] of colorSections.entries()){
    colorCodes.push(colorSection.getElementsByClassName("colorCode")[0].innerHTML);
}

// var
let colorChipSelected = {arr: Array.from({length: colorSections.length}, ()=>{false}), selectedIdx: undefined};

// update colorChips' color
for(const [i, colorSection] of colorSections.entries()){
    colorChips[i].style.backgroundColor = colorCodes[i];
}

// functions to control color
function changeBackgroundColor(colorCode){
    console.log(colorCode, typeof colorCode);
    document.body.style.backgroundColor = colorCode;
}

function makeChipBorder(colorChip){
    for(const tmp of colorChips){
        tmp.style.border = "none";
    }
    colorChip.style.border = "2px white solid";
}

function resizeChip(colorChip){
    for(const tmp of colorChips){
        tmp.style.width = "100px";
        tmp.style.height = "100px";
    }
    colorChip.style.width = "130px";
    colorChip.style.height = "130px";
}

function changeTextColor(whiteOrBlack){
    for(const [i, colorSection] of colorSections.entries()){
        colorSection.getElementsByClassName("colorCode")[0].style.color = whiteOrBlack;
    }
}

function changeSelectedChip(idx){
    if(colorChipSelected.selectedIdx){
        colorChipSelected.arr[colorChipSelected.selectedIdx] = false;
    }
    colorChipSelected.arr[idx] = true;
    colorChipSelected.selectedIdx = idx;
}

// onclick event
for(const [i, colorChip] of colorChips.entries()){
    colorChip.addEventListener('click', function(){
        changeBackgroundColor(colorCodes[i]);
        makeChipBorder(colorChip);
        resizeChip(colorChip);
        changeTextColor("white");
        changeSelectedChip(i);
    });
}
