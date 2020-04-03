function crowLetterFlip() {
    const letterFront = document.getElementById('crow-letter-text-front');
    const letterBack = document.getElementById('crow-letter-text-back');
    if (letterFront.style.display === 'none') {
        document.getElementById('crow-letter-text-front').style.display = 'block';
        document.getElementById('crow-letter-text-back').style.display = 'none';
    } else {
        document.getElementById('crow-letter-text-front').style.display = 'none';
        document.getElementById('crow-letter-text-back').style.display = 'block';
    }
}