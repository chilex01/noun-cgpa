function addRow() {
    const div = document.createElement('div');
    div.className = 'course-row';
    div.innerHTML = `
        <input type="text" placeholder="Code" class="course-code">
        <input type="number" placeholder="Units" class="course-units">
        <select class="course-grade"><option value="5">A</option><option value="4">B</option><option value="3">C</option><option value="2">D</option><option value="1">E</option><option value="0">F</option></select>`;
    document.getElementById('course-list').appendChild(div);
}

function calculate() {
    let units = document.querySelectorAll('.course-units');
    let grades = document.querySelectorAll('.course-grade');
    let totalP = 0, totalU = 0;

    units.forEach((u, i) => {
        let val = parseFloat(u.value);
        if (val > 0) {
            totalP += val * parseFloat(grades[i].value);
            totalU += val;
        }
    });

    let res = totalU > 0 ? (totalP / totalU).toFixed(2) : 0;
    document.getElementById('gpa-out').innerText = "CGPA: " + res;
}
