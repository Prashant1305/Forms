const inp = document.querySelectorAll('input');
let data = {
    name: "",
    email: "",
    password: "",
    age: null,
    comments: ""
}
const preData = JSON.parse(localStorage.getItem('data'));

// code to reset
const rstBtn = document.querySelector("#Reset");
rstBtn.addEventListener('click', () => {
    let vry = confirm('Do you want to reset');
    if (vry) {
        reset();
    }
})

const sbtBtn = document.querySelector('#Submit');
sbtBtn.addEventListener('click', () => {
    let vry = confirm('Are sure to Submit');
    if (vry) {
        reset();
        alert('form submitted successfully');
    }
})

// retriving values
if (preData) {
    for (let i of inp) {
        i.value = preData[i.id];
    }
    data = { ...preData };
}

// storing values
for (let i of inp) {
    i.addEventListener('input', (e) => {
        let key = e.target.id;
        data[key] = e.target.value;
        // console.log(data);
        localStorage.setItem('data', JSON.stringify(data));
    })
}

function reset() {
    localStorage.removeItem('data');
    for (let i of inp) {
        i.value = "";
    }
    data = {
        name: "",
        email: "",
        password: "",
        age: null,
        comments: ""
    }
}