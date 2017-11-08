'use strict'
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
bookstore.filter('nameToUpper',function(){

     function stringToUpper(string){
          let a = string.toUpperCase()
          return a;
     }
    

       return function(input){
           for(let i=0; i<input.length; i++){
               input[i].name = stringToUpper(input[i].name)
           }
           return input

       }
})
bookstore.filter('bestseller',function(){
    
       
        
    
           return function(input,isbn){

            for(let i=0; i<input.length; i++){
                  if (input[i].isbn == isbn) {
                      input[i].note='best seller'
                  }
               }
               return input
    
           }
    })
    bookstore.filter('changeImgSize',function(){
        
           
            
        
               return function(input,isbn){
    
                for(let i=0; i<input.length; i++){
                      if (input[i].isbn == isbn) {
                          input[i].img.width = '176';
                          input[i].img.height = '176';
                      }
                   }
                   return input
        
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
                     }
        this.isbn = isbn, 
        this.note;
        
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

