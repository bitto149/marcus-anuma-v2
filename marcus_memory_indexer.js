// Marcus Memory Indexer
// Scansiona e indicizza tutte le memorie contenute in marcus_memories/
// Ritorna un array JSON di meta-informazioni

const fs = require('fs');
const path = require('path');

function indexMemories(dirPath = './marcus_memories') {
    let index = [];
    if (!fs.existsSync(dirPath)) return [];

    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
            index.push({
                name: file,
                size: stats.size,
                modified: stats.mtime
            });
        }
    });

    return index;
}

module.exports = indexMemories;
