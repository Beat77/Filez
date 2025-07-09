import db from "#db/client";
import 
export async function createFolders( {name}) {
    const sql = `
    INSERT INTO folders
    (name)
    VALUES
    ($1)
    RETURNING *`;}
    const {
        rows: [folders],
    } = await db.query(sql,[name]);
    return folders;

    export async function getFolders() {
    const sql =`
    SELECT * FROM folders`;
    const {rows: folders} = await db.query (sql);
    return folders;}

    export async function getFoldersByFileId(id) {
        const sql =`
        SELECT* 
        FROM files
        WHERE folder_id = $1`;
    const {rows: files} = await db.query(sql, [id]);
    return files;
    }