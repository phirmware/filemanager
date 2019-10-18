const { copyAllFilesInDirectory, copySelectedFilesInDirectory } = require('../lib/files.lib');

exports.copyAllFiles = (req, res) => {
    const { folderPath, destination } = req.body;
    if (!folderPath || folderPath.length < 1) {
        return res.status(404).json({ message: 'Folder containing files missing in your input' });
    }

    if (!destination || destination.length < 1) {
        return res.status(404).json({ message: 'Destination Folder missing in your input' });
    }

    copyAllFilesInDirectory(folderPath, destination, (err, done) => {
        if (err) return res.status(400).json({ message: 'An error occured, could not copy the files' });
        return res.json({ message: done });
    });
}

exports.copySomeFiles = (req, res) => {
    const { folderPath, destination, files } = req.body;
    copySelectedFilesInDirectory(folderPath, destination, files, err => {
        if (err) {
            console.log(err);
        } else {
            res.json({ message: 'Successfull' });
        }
    });
}

