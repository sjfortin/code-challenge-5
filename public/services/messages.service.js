app.service('MessageService', ['$http', function ($http) {

    // Object to store the messages
    self.messages = {
        list: []
    };

    // GET messages request to the server
    self.getMessages = function () {
        $http.get('/messages').then(function (response) {
            self.messages.list = response.data;
        });
    };

    // POST request to the server
    self.addMessage = function (newMessage) {
        $http.post('/messages', newMessage).then(function (response) {
            console.log('post request has been hit', response);
        });
    };


}]);