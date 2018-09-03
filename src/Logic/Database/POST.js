import axios from 'axios';

// Recieves new entry and sends to history.router.js
let PostRequest = (input) => {
    // console.log('input recieved', input);

    // Sends request to history.router.js
    axios({
        method: 'post',
        url: '/history',
        data: input,
    }).then((response) => {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export default PostRequest