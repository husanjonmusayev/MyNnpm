// ochiq Apidan malumot oluvchi funcsiya 

function shelowCopy(url) {

    return fetch(url)
      .then(response => {
        
        if (!response.ok) {
          throw new Error('hatolik yuz berdi!');
        }
        return response.json();
      })
      .then(data => {
      
        return data;
      })
      .catch(error => {

        console.error('Error', error.message);
        return null;
      });
  }
