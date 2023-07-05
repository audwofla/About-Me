window.onload = function() {
    callAPI();
}

function callAPI() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        let name = document.createElement('div');
        name.textContent = 'Name: ' + data.results[0].name.first + ' ' + data.results[0].name.last;

        let loc = document.createElement('div');
        loc.textContent = 'Location: '  + data.results[0].location.street.number + ' ' 
                                        + data.results[0].location.street.name + ', ' 
                                        + data.results[0].location.city + ', '
                                        + data.results[0].location.state + ', '
                                        + data.results[0].location.postcode + ', '
                                        + data.results[0].location.country;
            
        let email = document.createElement('div');
        email.textContent = 'Email: ' + data.results[0].email;

        let cell = document.createElement('div');
        cell.textContent = 'Cellphone: ' + data.results[0].cell;

        let user = document.createElement('div');
        user.textContent = 'Username: ' + data.results[0].login.username;
            
        let dob = document.createElement('div');
        dob.textContent = 'Date of Birth: ' + data.results[0].dob.date;
            
        let game = document.querySelector('.rando');
        game.appendChild(name);
        game.appendChild(loc);
        game.appendChild(email);
        game.appendChild(cell);
        game.appendChild(user);
        game.appendChild(dob);

        


      })
}

