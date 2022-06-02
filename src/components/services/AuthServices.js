import axios from 'axios';


let AuthURL = "https://hostingbackendresearchproject.herokuapp.com/user/auth/";



export async function auth(token) { 
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return await axios.get(AuthURL,config);
}




