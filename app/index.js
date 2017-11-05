var bookstore = angular.module("bookstore", []);
bookstore.service('serviceComp' , function(){
    this.cart=[]
    this.add=function(x){
        this.cart.push(x);
        console.log(this.cart)
    }
    this.getItemsCart=function(){
        return JSON.stringify(this.cart)
    }
})
bookstore.service('orderservice' , function(){
    this.placeorder=function(user,books){
        console.log(user);
        console.log(books)
    }
    

})



bookstore.controller('book1', function ($scope,serviceComp) {
    $scope.bookarray = [
        new book('igrot moshe', 'igrot-moshe.gif',123),
        new book('mishne brura', 'misnabrura.jpg',345),
        new book ('tanach','tanach.jpg',678)

    ]

    function book(name, img ,isbn) {
        this.name = name;
        this.img = { img:img,
                     width:'500px' }
        this.isbn = isbn 
        
    }
    $scope.add =function(isbn){
        serviceComp.add(isbn)

    }
});
bookstore.controller('showCart',function showCartCtrl($scope,serviceComp){
    $scope.showCart=function(){
        $scope.isbns=serviceComp.getItemsCart();
    }
})
bookstore.controller('placeOrder',function($scope,serviceComp,orderservice){
    $scope.user={
        firstname:"",
        lastname:""
    }
    $scope.order=function(){
        orderservice.placeorder($scope.user,serviceComp.getItemsCart())
    }
})

