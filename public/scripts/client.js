var app = angular.module('MessageApp', []);

app.controller('MessageController', ['MessageService', function(MessageService){

    var self = this;

    self.messages = MessageService.messages;

    MessageService.getMessages();

}]);