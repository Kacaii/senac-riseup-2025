const ctx = document.getElementById('lineChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['00:00', '6:00', '12:00', '18:00', '23:00'],
    datasets: [
      {
        label: 'HTTP 200',
        borderColor: '#28a745',
        data: [120, 300, 450, 350, 400],
        fill: false
      },
      {
        label: 'Erro 4XX',
        borderColor: '#fd7e14',
        data: [60, 100, 150, 100, 80],
        fill: false
      },
      {
        label: 'Timeout',
        borderColor: '#ffc107',
        data: [20, 40, 35, 25, 30],
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



const openBtn = document.getElementById("abrir-filtros");
const closeBtn = document.getElementById("fechar-filtros");
const filtros = document.getElementById("filtros");

openBtn.addEventListener("click", () => {
  filtros.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  filtros.classList.remove("open");
});

