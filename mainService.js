angular.module('userProfiles').service('mainService', function() {
    var data =
        [{
            "id": 1,
            "isFavorite": false,
            "first_name": "george",
            "last_name": "bluth",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        },
        {
            "id": 2,
            "isFavorite": false,            
            "first_name": "lucille",
            "last_name": "bluth",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        },
        {
            "id": 3,
            "isFavorite": false,
            "first_name": "oscar",
            "last_name": "bluth",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        }];
    this.getUsers = function() {
        return data;
    }
    
    this.toggleFavorite = function(index) {
        data[index-1].isFavorite = !data[index-1].isFavorite;
    }
        
})