var app = angular.module('MessageApp', []);

app.controller('MessageController', ['MessageService', function (MessageService) {

    console.log('MessageController loaded');

    var self = this;

    // Send new message to the Message service to handle POST 
    // newMessage is an object created on the DOM via ng-model
    self.addMessage = function () {
        MessageService.addMessage(self.newMessage);
        self.newMessage = {}
    }

    // Link variable in message service to be used on the DOM
    self.messages = MessageService.messages;
    
    // Have the service get the messages on init load
    MessageService.getMessages();

}]);