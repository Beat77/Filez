import db from "#db/client";
import {createFiles} from "#db/queries/files";
import { createFolders } from "./queries/folders";


await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seedFiles() {
  for (let i = 0; i< 5; i++) {
    const files = {
      name: "Files" + i,
      size: "1",
      folder_id: "1"
    };
    await createFiles(files);
  }
}
async function seedFolders() {
  for (let i = 0; i< 3; i++) {
    const folders = {
      name: "Folders" 
    };
    await createFolderss(folders);}}
