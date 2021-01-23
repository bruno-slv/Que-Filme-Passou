const selector = (qry) => document.querySelector(qry);

function returnDate() {
    return selector('#date').value.split("-");
}
function displayMovie() {
    selector('.container').style.display = 'none';
    selector('.return').style.display = 'block';
    selector('#movieInfo').style.display = 'block';
}

function goBack() {
    selector('.container').style.display = 'flex';
    selector('.return').style.display = 'none';
    selector('#movieInfo').style.display = 'none';
}