const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
});

const save = () => {
    let employee1 = new EmployeePayRollData();
    employee1.name = document.getSelectedValues('[name=name]');
    employee1.profilePic = document.getSelectedValues('[name=profile]');
    employee1.gender = document.getSelectedValues('[name=gender]');
    // employee1.department = document.querySelector('#department');
    employee1.salary = document.getSelectedValues('[name=salary]');
    // employee1.startDate = document.getSelectedValues('[name=salary]');
    employee1.note = document.getSelectedValues('[name=Notes]');

    alert(employee1.toString());
}

const getSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}


