const fs = require('fs');

// Library wrapper
const file_manipulator = {};

file_manipulator.seeFilesInDirectory = (path, callback) => {
    fs.readdir(path, (err, files) => {
        callback(err, files);
    });
}

// *************  COPY LOGIC *************** //

file_manipulator.copyAllFilesInDirectory = (path, destination, callback) => {
    fs.readdir(path, (err, files) => {
        if (err) {
            callback(err, null);
        } else {
            // Find a fix for this later
            files.map(file => {
                fs.readFile(`${path}/${file}`, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        fs.writeFile(`${destination}/${file}`, data, err => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('done');
                            }
                        });
                    }
                });
            });
            callback(null, 'Success');
        }
    });
}

file_manipulator.copySelectedFilesInDirectory = (path, destination, files, callback) => {
    files.map(file => {
        fs.readFile(`${path}/${file}`, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                fs.writeFile(`${destination}/${file}`, data, err => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('done');
                    }
                });
            }
        });
    });
    callback(null);
};


// ********** MOVE LOGIC ************* //

file_manipulator.moveAllFilesInDirectory = (path, destination, callback) => {
    fs.readdir(path, (err, files) => {
        if (err) {
            callback('An error occured');
        } else {
            // fix this later
            files.map(file => {
                fs.readFile(`${path}/${file}`, (err, data) => {
                    if (err) {
                        console.log('An error occured');
                    } else {
                        fs.writeFile(`${destination}/${file}`, data, err => {
                            if (err) {
                                console.log(err);
                            } else {
                                fs.unlink(`${path}/${file}`, err => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log('File deleted successfully');
                                    }
                                });
                            }
                        });
                    }
                });
            });
            callback(null);
        }
    });
}

file_manipulator.moveSelectedFilesInADirectory = (path, destination, files, callback) => {
    files.map(file => {
        fs.readFile(`${path}/${file}`, (err, data) => {
            if (err) {
                console.log('An error occured');
            } else {
                fs.writeFile(`${destination}/${file}`, data, err => {
                    if (err) {
                        console.log(err);
                    } else {
                        fs.unlink(`${path}/${file}`, err => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('File deleted successfully');
                            }
                        });
                    }
                });
            }
        });
    });
    callback(null);
};

file_manipulator.getFileContent = (path, callback) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

module.exports = file_manipulator;
