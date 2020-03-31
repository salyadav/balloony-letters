let page = 1;
function onPreviousClick() {
    document.getElementById('page-'+page).style.display = 'none';
    page--;
    console.log('previous clicked: ' + page);
    if(page<15) {
        document.getElementById('next-button').style.visibility = 'visible';
    }
    if(page==1) {
        document.getElementById('previous-button').style.visibility = 'hidden';
    }
    document.getElementById('page-'+page).style.display = 'block';
}

function onNextClick() {
    document.getElementById('page-'+page).style.display = 'none';
    page++;
    console.log('next clicked: ' + page);
    if(page>1) {
        document.getElementById('previous-button').style.visibility = 'visible';
    }
    if(page==15) {
        document.getElementById('next-button').style.visibility = 'hidden';
    }
    document.getElementById('page-'+page).style.display = 'block';
}

function crowLetterFlip() {
    console.log('crow letter flipped');
    const letterFront = document.getElementById('crow-letter-text-front');
    const letterBack = document.getElementById('crow-letter-text-back');
    if (letterFront.style.display === 'none') {
        letterFront.style.display = 'block';
        letterBack.style.display = 'none';
    } else {
        letterFront.style.display = 'none';
        letterBack.style.display = 'block';
    }
}