let employees=[];


function addEmployee(){
    let name=document.getElementById("name").value;
    let empId=document.getElementById("empId").value;
    let salary=parseFloat(document.getElementById("salary").value);
    let dept=document.getElementById("dept").value;

    if (name==="" || empId==="" || isNaN(salary) || dept==="") {
        alert("Please fill in all fields correctly.");
        return;
    }

    let employee={
        name:name,
        empId:empId,
        salary:salary,
        dept:dept
    }

    employees.push(employee);

    document.getElementById("output").innerHTML="Employee Added Successfully";

    document.getElementById("name").value="";
    document.getElementById("empId").value="";
    document.getElementById("salary").value="";
    document.getElementById("dept").value="";
}


function displayEmployee(){
    let output="";

    if(employees.length===0){
        output="No employees added.";
    }
    else{
        employees.forEach(emp=>{
            output+=`
            Name: ${emp.name} |
            ID: ${emp.empId} |
            Salary: ${emp.salary} |
            Department: ${emp.dept} <br>
            `;
        });
    }

    document.getElementById("output").innerHTML=output;
}


function fliterSalary(){
    let filtered=employees.filter(emp=>emp.salary>500000);

    let output="<h3>Employees with Salary > 500000</h3>";

    if(filtered.length===0){
        output+="No employees found.";
    }
    else{
        filtered.forEach(emp=>{
            output+=`
            Name: ${emp.name} |
            ID: ${emp.empId} |
            Salary: ${emp.salary} |
            Department: ${emp.dept} <br>
            `;
        });
    }

    document.getElementById("output").innerHTML=output;
}


function totalSalary(){
    let total=employees.reduce((sum,emp)=>sum+emp.salary,0);

    document.getElementById("output").innerHTML=
    "<h3>Total Salary: "+total+"</h3>";
}


function averageSalary(){
    if(employees.length===0){
        document.getElementById("output").innerHTML="No employees available.";
        return;
    }

    let total=employees.reduce((sum,emp)=>sum+emp.salary,0);
    let avg=total/employees.length;

    document.getElementById("output").innerHTML=
    "<h3>Average Salary: "+avg.toFixed(2)+"</h3>";
}


function countDepartment(){
    let deptCount={};

    employees.forEach(emp=>{
        if(deptCount[emp.dept]){
            deptCount[emp.dept]++;
        }
        else{
            deptCount[emp.dept]=1;
        }
    });

    let output="<h3>Department Counts</h3>";

    for(let dept in deptCount){
        output+=dept+" : "+deptCount[dept]+"<br>";
    }

    document.getElementById("output").innerHTML=output;
}