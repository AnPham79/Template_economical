var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
    })
    .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'HomeController',
    })
    .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'HomeController',
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'HomeController',
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'HomeController',
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'HomeController',
    })
    .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'HomeController',
    }).when('/mail-welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'HomeController',
    })
    .otherwise({
        template : "404 không tìm thấy file"
    });
})