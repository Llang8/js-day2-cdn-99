fetch('./employees.json')
    .then((res) => res.json())
    .then((data) => {
        populateHTML(data.employees)
    })

function populateHTML(employees) {
    let peopleEl = document.getElementById('people')
    for (let employee of employees) {
        peopleEl.innerHTML += `
            <div class="card mb-3">
                <div class="card-body">
                    <h2 class="card-title">${employee.name}</h2>
                    <p class="card-text">${employee.jobTitle}</p>
                </div>
            </div>
        `
    }

    let featuredPersonEl = document.getElementById('featured-person')
    featuredPersonEl.innerHTML = `
        <h2>${employees[0].name}</h2>
        <p>Title: ${employees[0].jobTitle}</p>
        <h3>Skills</h3>
        <ul>
    `
    for (let skill in employees[0].skills) {
        featuredPersonEl.innerHTML += `
            <li>${skill}: ${employees[0].skills[skill]}</li>
        `
    }
}
