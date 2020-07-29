const fs = require('fs')
const path = require('path')
const join = path.join
const resolve = (dir) => path.join(__dirname, '../', dir)

module.exports = {
    resolve,
    getComponentEntries(path) {
        let files = fs.readdirSync(resolve(path));
        const componentEntries = files.reduce((ret, item) => {
            const itemPath = join(path, item);
            const isDir = fs.statSync(itemPath).isDirectory();
            if (isDir) {
                ret[item] = resolve(join(itemPath, 'index.ts'));
            } else {
                const [name] = item.split('.');
                ret[name] = resolve(`${itemPath}`);
            }
            return ret;
        }, {});
        return componentEntries;
    }
}
