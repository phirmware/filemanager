const { moveAllFilesInDirectory, moveSelectedFilesInADirectory } = require('../lib/files.lib');

exports.moveAllFiles = (req, res) => {
    const { folderPath, destination } = req.body;
    if (!folderPath || folderPath.length < 1) {
        return res.status(404).json({ message: 'Folder containing files missing in your input' });
    }

    if (!destination || destination.length < 1) {
        return res.status(404).json({ message: 'Destination Folder missing in your input' });
    }

    moveAllFilesInDirectory(folderPath, destination, err => {
        if (err) {
            res.status(300).json({ message: 'An error occured' });
        } else {
            res.json({ message: 'Files moved successfully' });
        }
    });
};

exports.moveSomeFiles = (req, res) => {
    const { folderPath, destination, files } = req.body;
    moveSelectedFilesInADirectory(folderPath, destination, files, err => {
        if (err) {
            res.status(300).json({ message: 'An error occured' });
        } else {
            res.json({ message: 'Files moved Successfully' });
        }
    })
}
