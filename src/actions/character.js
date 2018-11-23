import request from 'superagent';             //api de ajax
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/';

function generateCredentials(){
  let publicKey = "6e3bc12cde9e2761e35988919d326aff";
  let privateKey = "280e592d5291c8aefbb91150582424e120d915c0";
  let timestamp = +new Date(); // same new Date().getTime()
  let hash = md5(`${timestamp}${privateKey}${publicKey}`);
  return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
}

export function getCharacters(name = ""){
  let search = "";
  if(name){
    search = `&nameStartsWith=${name}`;
  }
  return dispatch => {
    request.get(`${baseUrl}characters${generateCredentials()}${search}`).end(
      (error, response) => {
        if(!error) {
          dispatch({ type: `GET_CHARACTERS`, characters: response.body.data.results});
        }
      }
    );
  };
}
