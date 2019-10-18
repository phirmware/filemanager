const { seeFilesInDirectory, getFileContent } = require('../lib/files.lib');

exports.getBaseDir = (req, res) => {
    const fileDir = __dirname;
    const dirArray = fileDir.split('/').slice(0, 3).join('/');
    res.json({ directory: dirArray });
}

exports.seeAllFiles = (req, res) => {
    seeFilesInDirectory(req.body.folderPath, (err, files) => {
        if (err) {
            res.status(300).json({ message: 'An error occured reading the files' });
        } else {
            res.json(files);
        }
    });
};

exports.seeFileContents = (req, res) => {
    getFileContent(req.body.path, (err, data) => {
        if (err) {
            return res.status(300).json({ message: 'Something went wrong' });
        } else {
            return res.json({ data });
        }
    });
}
