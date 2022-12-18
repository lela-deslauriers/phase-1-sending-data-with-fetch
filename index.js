function submitData (userName, userEmail) { 
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })   
    .then(function (response) {
        return response.json();
      })
    .then(function(object) {
        document.body.innerHTML = object["id"];
    })
    .catch(function (error) {
        document.body.innerHTML = error["message"];
    });


    // .then(renderOneUser (object) {
    //     newParagraph = document.createElement('p');
    //     element = newParagraph.textContent = `User ID: ${object.id}`;
    //     document.body.append(element);

    //   });
    
    }
