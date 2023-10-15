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
sbtBtn.addEventListener('click', (e) => {
    const eml = document.querySelector("#email");
    let vry = confirm('Are sure to Submit');
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    e.preventDefault();
    if (emailPattern.test(eml.value)) {
        if (vry) {
            reset();
            alert('form submitted successfully');
        }
    }
    else {
        alert('wrong email');
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