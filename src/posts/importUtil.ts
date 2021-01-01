
const importAll = (r: __WebpackModuleApi.RequireContext) => {
    return r.keys().map((fileName: string) => {
        return ({
            name: fileName.substr(2).replace(/\/index\.mdx$/, ''),
            title: fileName.replace(/\/index\.mdx$/, '').substring(13, fileName.indexOf('.post')),
            staticUrl: r(fileName).default
        })
    })
}

// 전체 리스트
const list = importAll(require.context("./", false, /\.post$/)).reverse();

// 페이징 리스트
export const fetchMdList = (offset: number, limit: number) => {
    return list.slice(offset, limit)
}

// 디테일   
export const fetchMd = (id: string) => {
    const result = list.filter((i) => i.name == id);
    return new Promise<string>((resolve, reject) => {
        if (result.length == 0) reject("not found")
        result.map((i) => fetch(i.staticUrl).then((resp) => resolve(resp.text())).catch(reject));
    })
}