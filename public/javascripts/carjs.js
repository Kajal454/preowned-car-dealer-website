


    
    // {/* var cars = <%= JSON.stringify(cars) %>; */}
    
    
    // cars.forEach(function(car) {
    //     var carCard = document.createElement('div');
    //     carCard.classList.add('car-card');
        
    //     carCard.innerHTML = 
    //         <h2>${car.carName}</h2>
    //         <p>Model: ${car.carModel}</p>
    //         <p>Year: ${car.year}</p>
    //         <p>Price: ${car.price}</p>
    //         <p>Fuel Type: ${car.fuelType}</p>
    //         <p>Type: ${car.type}</p>
    //         <div class="car-images">
    //             ${car.carImages.map(imageUrl => `<img src="../images/${imageUrl}" alt="Car Image">`).join('')}
    //         </div>
    //     ;
        
    //     document.querySelector('.car-list').appendChild(carCard);
    // });



    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('carForm');
        
        form.addEventListener('submit', function(event) {
          event.preventDefault();
          
          // You can add further processing here, such as form validation, AJAX submission, etc.
          
          // For example, you can display a success message or redirect the user.
          alert('Car submitted successfully!');
          // window.location.href = '/success';
        });
      });


      

      