export default function getPersonList() {
  return new Promise((resolve, reject) => {
    fetch('https://willowtreeapps.com/api/v1.0/profiles')
        .then(response => {
            if (response.status !== 200) {
                reject(new Error("Error!"));
            }

            response.json().then(imageList => {
                resolve(imageList);
            });
        });
    });
}