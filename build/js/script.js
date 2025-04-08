const imageMap = {
  // Case
  "NZXT H510": "https://iqq6kf0xmf.gjirafa.net/images/8edfe423-330f-4147-bc14-2d0ea31fc127/8edfe423-330f-4147-bc14-2d0ea31fc127.webp?w=400",
  "Corsair 4000D": "https://iqq6kf0xmf.gjirafa.net/images/d283af16-3d2a-44f1-9ea0-4d56d925d847/d283af16-3d2a-44f1-9ea0-4d56d925d847.webp?w=400",
  "Cooler Master NR600": "https://iqq6kf0xmf.gjirafa.net/images/22cc5e6f-774e-4047-b68a-0b7736c0ad6d/22cc5e6f-774e-4047-b68a-0b7736c0ad6d.webp?w=400",
  "Lian Li PC-O11": "https://iqq6kf0xmf.gjirafa.net/images/5a2abb32-d836-403a-8337-d5f65b43e975/5a2abb32-d836-403a-8337-d5f65b43e975.webp?w=400",
  "Fractal Design Meshify C": "https://iqq6kf0xmf.gjirafa.net/images/5aa69e5b-7391-4396-a162-720397a5400c/5aa69e5b-7391-4396-a162-720397a5400c.webp?w=400",
  "Phanteks Eclipse P400A": "https://iqq6kf0xmf.gjirafa.net/images/208cca17-99b7-43a4-b19f-179240c3b47e/208cca17-99b7-43a4-b19f-179240c3b47e.webp?w=400",
  "Be Quiet! Pure Base 500DX": "https://iqq6kf0xmf.gjirafa.net/images/62699654-ac37-4592-a8ab-f08387d7f2f1/62699654-ac37-4592-a8ab-f08387d7f2f1.webp?w=400",
  "Thermaltake V250": "https://iqq6kf0xmf.gjirafa.net/images/f54652c7-eba4-4716-882e-7fc302aa3429/f54652c7-eba4-4716-882e-7fc302aa3429.webp?w=400",
  "DeepCool Macube 310": "https://iqq6kf0xmf.gjirafa.net/images/a2ee49b7-a533-418e-b2f2-36601a8a0abf/a2ee49b7-a533-418e-b2f2-36601a8a0abf.webp?w=400",
  "Cooler Master HAF 500": "https://iqq6kf0xmf.gjirafa.net/images/2dbecb15-718d-4347-9e41-942ba281b412/2dbecb15-718d-4347-9e41-942ba281b412.webp?w=400"
};


$('#pcBuilderForm').on('submit', function (e) {
  e.preventDefault();
  const parts = {
    "Case": $('#case').val(),
    "Motherboard": $('#motherboard').val(),
    "CPU": $('#cpu').val(),
    "RAM": $('#ram').val(),
    "GPU": $('#gpu').val(),
    "SSD": $('#ssd').val()
  };

  let isValid = true;
  for (let key in parts) {
    if (!parts[key]) isValid = false;
  }

  if (!isValid) {
    $('#result').html('<div class="alert alert-danger">Ju lutem zgjidhni të gjitha pjesët!</div>');
    return;
  }

  let resultHtml = `
    <div class="container my-4">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <!-- Foto dhe të dhënat brenda një div -->
              <div class="text-center">
                <img src="${imageMap[parts['Case']] || 'https://via.placeholder.com/300x150?text=Case'}" class="card-img-top part-image" alt="${parts['Case']}">
                <h5 class="card-title mt-3">${parts['Case']}</h5>
              </div>
              <!-- Lista e specifikave poshtë fotos -->
              <ul class="list-group mt-3">
                <li class="list-group-item"><strong>Motherboard:</strong> ${parts["Motherboard"]}</li>
                <li class="list-group-item"><strong>CPU:</strong> ${parts["CPU"]}</li>
                <li class="list-group-item"><strong>RAM:</strong> ${parts["RAM"]}</li>
                <li class="list-group-item"><strong>GPU:</strong> ${parts["GPU"]}</li>
                <li class="list-group-item"><strong>SSD:</strong> ${parts["SSD"]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  $('#result').html(resultHtml);
});

