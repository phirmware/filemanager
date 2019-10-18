const submitFilePathBtn = document.querySelector('#filePathBtn');
const filePathInput = document.querySelector('#filePath');

(function fetchBaseFiles() {
    fetch('/api/files/dir')
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .then(data => {
            const path = data.directory;
        })
        .catch(err => {
            console.log(err);
        });
})();

submitFilePathBtn.addEventListener('click', () => {
    const obj = {folderPath: filePathInput.value};
    fetch('/api/files', {
        method: 'post',
        body: JSON.stringify(obj),
        'Content-Type': 'application/json'
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    })
});
