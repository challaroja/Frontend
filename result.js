function Save() 
{
    alert("Successfully saved!!!");
}

function GetResult()
{
    var rollNo = document.getElementById("rollNo").value;
    document.getElementById('result').innerText='Loading...';

    var data = {
            "subject":['English','Telugu','Maths','Science','Social Science'],
            "marks":[70,80,90,80,75]
        }
        
        var result ='<table border="1"><th>Subject</th><th>Marks</th><th>Class</th>';
        var className='';
        var totalSubject = data.subject.length;
        for(var i=0; i<5; i++)
        {
            result += '<tr><td>'+data.subject[i]+'</td><td>'+data.marks[i]+'</td>';
                if(data.marks[i]>60 && data.marks[i]<75)
                    className = 'First Class';
                else
                if(data.marks[i]>75 && data.marks[i]<85)
                    className = 'Distinction';
                else
                if(data.marks[i]>85 && data.marks[i]<100)
                    className = 'Topper';
            result += '<td>'+className+'</td></tr>';
        }
        document.getElementById('result').innerHTML=result; 
}