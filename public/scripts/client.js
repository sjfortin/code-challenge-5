var app = angular.module('MessageApp', []);

app.controller('MessageController', ['MessageService', function (MessageService) {

    console.log('MessageController loaded');
    
    var self = this;

    self.newMessage = {}

    self.addMessage = function() {
        MessageService.addMessage(self.newMessage);
        self.newMessage = {}
    }

    // self.messages = MessageService.messages;
    // MessageService.getMessages();

}]);