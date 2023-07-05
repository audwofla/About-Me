window.onload = function() {
    callAPI();
}

function callAPI() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
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
            
        let rando = document.querySelector('.rando');
        rando.appendChild(name);
        rando.appendChild(loc);
        rando.appendChild(email);
        rando.appendChild(cell);
        rando.appendChild(user);
        rando.appendChild(dob);

        $.ajax({
          url: 'https://randomuser.me/api/',
          method: 'GET',
          dataType: 'json',
          success: function(data) {       
            let name = $('<div>').text('Name: ' + data.results[0].name.first + ' ' + data.results[0].name.last);
            let loc = $('<div>').text('Location: ' + data.results[0].location.street.number + ' ' 
                                                   + data.results[0].location.street.name + ', ' 
                                                   + data.results[0].location.city + ', ' 
                                                   + data.results[0].location.state + ', ' 
                                                   + data.results[0].location.postcode + ', ' 
                                                   + data.results[0].location.country);
            let email = $('<div>').text('Email: ' + data.results[0].email);
            let cell = $('<div>').text('Cellphone: ' + data.results[0].cell);
            let user = $('<div>').text('Username: ' + data.results[0].login.username);
            let dob = $('<div>').text('Date of Birth: ' + data.results[0].dob.date);
            
            $('.random').append(name, loc, email, cell, user, dob);
          },
        });


      })
}

