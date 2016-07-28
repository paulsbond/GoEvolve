var app = angular.module('app', []);

app.controller('Controller', ['$scope', function($scope) {
  $scope.pokemon = [
    {number:1, name:'Bulbasaur', cost:25},
    {number:2, name:'Ivysaur', cost:100},
    {number:4, name:'Charmander', cost:25},
    {number:5, name:'Charmeleon', cost:100},
    {number:7, name:'Squirtle', cost:25},
    {number:8, name:'Wartortle', cost:100},
    {number:10, name:'Caterpie', cost:12},
    {number:11, name:'Metapod', cost:50},
    {number:13, name:'Weedle', cost:12},
    {number:14, name:'Kakuna', cost:50},
    {number:16, name:'Pidgey', cost:12},
    {number:17, name:'Pidgeotto', cost:50},
    {number:19, name:'Rattata', cost:25},
    {number:21, name:'Spearow', cost:50},
    {number:23, name:'Ekans', cost:50},
    {number:25, name:'Pikachu', cost:50},
    {number:27, name:'Sandshrew', cost:50},
    {number:29, name:'Nidoran ♀', cost:25},
    {number:30, name:'Nidorina', cost:100},
    {number:32, name:'Nidoran ♂', cost:25},
    {number:33, name:'Nidorino', cost:100},
    {number:35, name:'Clefairy', cost:50},
    {number:37, name:'Vulpix', cost:50},
    {number:39, name:'Jigglypuff', cost:50},
    {number:41, name:'Zubat', cost:50},
    {number:43, name:'Oddish', cost:25},
    {number:44, name:'Gloom', cost:100},
    {number:46, name:'Paras', cost:50},
    {number:48, name:'Venonat', cost:50},
    {number:50, name:'Diglett', cost:50},
    {number:52, name:'Meowth', cost:50},
    {number:54, name:'Psyduck', cost:50},
    {number:56, name:'Mankey', cost:50},
    {number:58, name:'Growlithe', cost:50},
    {number:60, name:'Poliwag', cost:25},
    {number:61, name:'Poliwhirl', cost:100},
    {number:63, name:'Abra', cost:25},
    {number:64, name:'Kadabra', cost:100},
    {number:66, name:'Machop', cost:25},
    {number:67, name:'Machoke', cost:100},
    {number:69, name:'Bellsprout', cost:25},
    {number:70, name:'Weepinbell', cost:100},
    {number:72, name:'Tentacool', cost:50},
    {number:74, name:'Geodude', cost:25},
    {number:75, name:'Graveler', cost:100},
    {number:77, name:'Ponyta', cost:50},
    {number:79, name:'Slowpoke', cost:50},
    {number:81, name:'Magnemite', cost:50},
    {number:84, name:'Doduo', cost:50},
    {number:86, name:'Seel', cost:50},
    {number:88, name:'Grimer', cost:50},
    {number:90, name:'Shellder', cost:50},
    {number:92, name:'Gastly', cost:25},
    {number:93, name:'Haunter', cost:100},
    {number:96, name:'Drowzee', cost:50},
    {number:98, name:'Krabby', cost:50},
    {number:100, name:'Voltorb', cost:50},
    {number:102, name:'Exeggcute', cost:50},
    {number:104, name:'Cubone', cost:50},
    {number:109, name:'Koffing', cost:50},
    {number:111, name:'Rhyhorn', cost:50},
    {number:116, name:'Horsea', cost:50},
    {number:118, name:'Goldeen', cost:50},
    {number:120, name:'Staryu', cost:50},
    {number:129, name:'Magikarp', cost:400},
    {number:133, name:'Eevee', cost:25},
    {number:138, name:'Omanyte', cost:50},
    {number:140, name:'Kabuto', cost:50},
    {number:147, name:'Dratini', cost:25},
    {number:148, name:'Dragonair', cost:100},
  ];

  $scope.selected = [];
  $scope.toAdd = $scope.pokemon[0];
  $scope.addPokemon = function(mon) {
    $scope.selected.push(mon);
    $scope.pokemon.splice($scope.pokemon.indexOf(mon), 1);
    $scope.toAdd = $scope.pokemon[0];
  }

  $scope.transfer = function(mon) {
    if (mon.count == undefined || mon.candy == undefined) return;
    var transfer = (mon.cost*mon.count - mon.count - mon.candy + 1) / mon.cost;
    if (transfer < 0) return 0;
    var ans = Math.ceil(transfer);
    return ans;
  };

  $scope.evolve = function(mon) {
    if (mon.count == undefined || mon.candy == undefined) return;
    return mon.count - $scope.transfer(mon);
  };

  $scope.total = function() {
    var total = 0;
    $scope.selected.forEach(function(mon) {
      total += $scope.evolve(mon) || 0;
    });
    return total;
  };

}]);
