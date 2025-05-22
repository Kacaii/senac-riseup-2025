// script-logs.js

document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector('.btn-gray');
  
    filterButton.addEventListener('click', () => {
      alert('Funcionalidade de filtro ainda não implementada.');
    });
  
    // Exemplo: Atualizar a data "Hoje, HH:MM" automaticamente
    const dateCells = document.querySelectorAll('.logs-table tbody tr td:last-child');
    const now = new Date();
    const hora = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
    dateCells.forEach(cell => {
      cell.textContent = `Hoje, ${hora}`;
    });
  });
  