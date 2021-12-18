const getData = () => {
  return fetch('https://test-project-f8ab0-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
      return response.json();
    })


};

export default getData;