import axios from 'axios';

let PostRequest = (input) => {
    console.log('input recieved', input);


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