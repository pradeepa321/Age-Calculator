
    // function age(){
        // let input =document.getElementById("date").value;
		// let para=document.getElementById("para").value;
        // let userdate = new Date(input);
        // let currentdate = new Date();
        // let day = userdate.getDate() - currentdate.getDate();
        // let month = (userdate.getMonth()+1) - (currentdate.getMonth()+1);
        // let year = userdate.getYear() - currentdate.getYear();
        
		// if(month < 0 || (month === 0 && day <0)){
			// year--;
			// month +=12;
			// if (day <0){
				// let days = new Date(currentdate.getFullYear(), currentdate.getMonth(), 0).getDate();
				// day +=days;
				// months--;
			// }
		// }
        // para.innerText =`Age: ${year} year, ${month} month, and ${day} day`;
    // }
	
	let form1= document.querySelector("#form");
	let input=document.getElementById("date");
	let btn=document.getElementById("btn");
	let para=document.getElementById("para");
	
	form1.addEventListener("submit", function(e){
		e.preventDefault();
		 let userdate = new Date(input.value);
        let currentdate = new Date();
        let year = userdate.getYear() - currentdate.getYear();
        let month = (userdate.getMonth()+1) - (currentdate.getMonth()+1);
        let day = userdate.getDate() - currentdate.getDate();
		let hour =userdate.getHours() - currentdate.getHours();
		
		
		if(month < 0 || (month === 0 && day <0)){
			year--;
			month +=12;
			if (day <0){
				let days = new Date(currentdate.getFullYear(), currentdate.getMonth(), 0).getDate();
				day +=days;
				month--;
			}
		}
        para.innerText =`Age: ${year} year, ${month} month, and ${day} day ${hour} hour`;
       
		
	});