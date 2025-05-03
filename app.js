angular.module('dashboardApp', [])
  .controller('DashboardController', function($scope) {
    $scope.cards = [
      { title: 'Sucesso', value: 560, color: 'success' },
      { title: 'Erro Negocial', value: 28, color: 'danger' },
      { title: 'Erro de Infraestrutura', value: 5, color: 'danger' },
      { title: 'Timeout', value: 9, color: 'danger' },
      { title: 'Total de Requisições', value: 602, color: 'secondary' }
    ];
  });