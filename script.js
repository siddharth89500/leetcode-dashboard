document.addEventListener('DOMContentLoaded', function() {
 
     const searchButton = document.getElementById('search_btn');
     const usernameInput = document.getElementById('user_input');
     const statusContainer = document.querySelector('.stats_container');
     const easyProgressCircle =  document.querySelector('.easy_prograsse');   
     const mediumProgressCircle =  document.querySelector('.medium_prograsse');
     const hardProgressCircle =  document.querySelector('.hard_prograsse');
     const easyLabel =  document.getElementById('easy_label');
     const mediumLabel =  document.getElementById('medium_label');
     const hardLabel =  document.getElementById('hard_label');
     const cardStatusContainer  = document.querySelector('.stats_cards');
     

      //return true or false if the username is valid
     function validateUserName(username) {
         if(username.trim()===""){
              alert("User name should not be Empty");
                return false;
         }

         const regex = /^[a-zA-Z0-9_]{1,15}$/;
         const isMatching =  regex.test(username);
         if(!isMatching){
             alert("User name should be 1 to 15 characters long and contain only letters, numbers and underscores.");
         }
         return isMatching;

     }
     //fetch user details from the  api
     async function fetchUserDetails(username) {
        
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try {

            searchButton.textContent = 'Searching...';
            searchButton.disabled = true;
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error('Failed to fetch user details');
            }
            const data = await response.json();
            // extracting the desire data from the response
            const easy = data.easySolved;
            const medium = data.mediumSolved;
            const hard = data.hardSolved;
            const rank = data.ranking;
            const totaleasy = data.totalEasy;
            const totalmedium = data.totalMedium;
            const totalhard = data.totalHard;
            const totalquestions = data.totalQuestions;
            const totalsolved = data.totalSolved;
           

           
            // easyProgressCircle.style = `--prograss-degree: ${easy}%`;

            //calling the function to find the percentage
            const p_easy = percentage(totaleasy,easy);
            const p_medium = percentage(totalmedium,medium);
            const p_hard = percentage(totalhard,hard);

            //calling the update progress circle function
            updateProgressCircle(easyProgressCircle,p_easy);
            updateProgressCircle(mediumProgressCircle,p_medium);
            updateProgressCircle(hardProgressCircle,p_hard);

            updateCircleLabel(easyLabel,p_easy);
            updateCircleLabel(mediumLabel,p_medium);
            updateCircleLabel(hardLabel,p_hard);


            //updating 
            showPrograsse();
            updateDetails(rank,totalquestions,totalsolved);
            

            
                 
            console.log(data);
        
           
            
        } catch(error) {
            // alert('Failed to fetch user details');
            statusContainer.innerHTML = `<p> no data found </p>`

        } 
         //search button reset after fetching data
        finally {
            searchButton.textContent = 'Search';
            searchButton.disabled = false;
        }

     }
     //calculating the percentage
    function percentage(total,num){
        return (num/total)*100;
    }
    //updating the progress circle
    function updateProgressCircle(circle,percentage){
        circle.style = `--prograss-degree: ${percentage}%`;
    }
    //updating the circle label
    function updateCircleLabel(label,percentage){
        // label.innerHTML ="0%";
        label.innerHTML = `${percentage.toFixed(2)}%`;
    }
    function showPrograsse() {
        document.querySelector('.prograsse').style.visibility = 'visible';
    }
    function updateDetails(rank,total,solved){
        const totalunsolved = total - solved;
        document.getElementById("rank_label").innerHTML = ` '${ rank}'`;
        document.getElementById("total_questions").innerHTML = ` '${ total}'`;
        document.getElementById("total_solved").innerHTML = ` '${ solved}'`;
        document.getElementById("total_unsolved").innerHTML = ` '${ totalunsolved}'`;
    }




    // buttun funtionality
    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        if(validateUserName(username)) {

            fetchUserDetails(username);
        }
        



    });

});    