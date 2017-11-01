var bookstore = angular.module("bookstore", []);

bookstore.controller('book1', function ($scope) {
    $scope.bookarray = [
        new book('igrot moshe', 'igrot-moshe.gif'),
        new book('mishne brura', 'misnabrura.jpg')
    ]

    function book(name, img) {
        this.name = name;
        this.img = img
    }


});

