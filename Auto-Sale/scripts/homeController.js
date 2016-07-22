'use strict';
angular.module('autoSales').controller('homeController',[ '$scope',
    function ($scope) {
    $scope.selectedCar ={};
    $scope.carMake= {
        "Honda":[{id:1, name:"Civic"},{id:2, name:"Accord"},{id:2, name:"CR-V"},{id:2, name:"HR-V"},{id:2, name:"Fit"}],
        "Audi":[{id:1, name:"A3"},{id:2, name:"A4"},{id:2, name:"Q3"},{id:2, name:"Q7"},{id:2, name:"RS8"}],
        "Ford":[{id:1, name:"Fiesta"},{id:2, name:"Focus"},{id:2, name:"Fusion"},{id:2, name:"Mustang"},{id:2, name:"C-Max"}],
        "Chevy":[{id:1, name:"Spark"},{id:2, name:"Beat"},{id:2, name:"Sail"},{id:2, name:"Tavera"},{id:2, name:"Cruze"}]
    };
    $scope.car = {
        punchLine: "The Cars of Your Dreams is Only a Click Away!",
        make:Object.keys($scope.carMake),
        price:['$21,000','$31,000','$41,000','$51,000','$61,000']
    };
    $scope.carDetails = [
        {   name:"Honda Cars and SUVs",
            info:"Explore hundreds of our storied creations in this 360° immersive experience. Get the most from your car and enjoy special benefits",
            imageurl1:"images/honda1.jpeg",
            imageurl2:"images/honda2.jpeg",
            dataContent1:"Honda Civic",
            dataContent2:"Honda CR-V"
        },
        {
            name:"Audi Cars and SUVs",
            info:"Explore hundreds of our storied creations in this 360° immersive experience. Get the most from your car and enjoy special benefits",
            imageurl1:"images/audi1.jpg",
            imageurl2:"images/audi2.jpg",
            dataContent1:"Audi R8",
            dataContent2:"Audi Q5"
        },
        {
            name:"Ford Cars, Trucks, and SUVs",
            info:"Explore hundreds of our storied creations in this 360° immersive experience. Get the most from your car and enjoy special benefits",
            imageurl1:"images/ford1.jpeg",
            imageurl2:"images/ford2.jpg",
            dataContent1:"Ford Fiesta",
            dataContent2:"Ford SUV"
        },
        {   name:"Chevy Cars, Trucks, and SUVs",
            info:"Explore hundreds of our storied creations in this 360° immersive experience. Get the most from your car and enjoy special benefits",
            imageurl1:"images/chevy1.jpg",
            imageurl2:"images/chevy2.jpg",
            dataContent1:"Chevy Cruze",
            dataContent2:"Chevy Malibu"
        },
        {   name:"BMW Cars and SUVs",
            info:"Explore hundreds of our storied creations in this 360° immersive experience. Get the most from your car and enjoy special benefits",
            imageurl1:"images/bmw1.jpg",
            imageurl2:"images/bmw2.jpg",
            dataContent1:"BMW 320i",
            dataContent2:"BMW X5"
        }
        ];
}]);