Swal.fire({
    title: "Queres cargar informacion? pokemons?",
    showDenyButton: true,
    confirmButtonText: "Cargar data",
    background: "#ddd"
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */

    if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: "Cargando pokemons",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: async () => {
            clearInterval(timerInterval);
            const response = await fetch("https://rickandmortyapi.com/api/character/2")
            const data = await response.json();
            console.log(data)
        //    axios.get("https://rickandmortyapi.com/api/character/2").then(({data}) => {
        //     console.log(data)
        //    })
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });

        
    } 
     if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });

// if(!localStorage.getItem("viewPromotions")){    
//     setTimeout(() => {
//         Toastify({
//             text: "Ver promociones de hoy con -%30",
//             duration: 3000,
//             close: true,
//             gravity: "bottom", // `top` or `bottom`
//             position: "right", // `left`, `center` or `right`
//             stopOnFocus: false, // Prevents dismissing of toast on hover
//             style: {
//                 background: "linear-gradient(to right, #00b09b, #96c93d)",
//             },
//             onClick: function(){
//                 // ejecuto funcion que suma la metrica de mi web
//                 localStorage.setItem("viewPromotions", true)
//             } // Callback after click
//         }).showToast();
//     },2000)
    
// }

// Promesa parte con el estado pending!
// estado resolve
// estado reject