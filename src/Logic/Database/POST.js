import axios from 'axios';

let PostRequest = (input) => {
    console.log('input recieved', input);


    axios({
        method: 'post',
        url: '/history',
        data: input,
    }).then((response) => {
        console.log(response);
        const planets = response.data.results;
        console.log(planets);
    }).catch(function (error) {
        console.log(error);
    });
}

export default PostRequest