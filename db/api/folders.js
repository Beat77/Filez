import express from "express";
const router = express.Router();
export default router;
import { getFolders } from "#db/queries/folders";
import { getFoldersByFileId } from "#db/queries/folders";

router.route("/").get(async (req, res) => {
  const folders = await getFolders();
  res.send(folders);
});
router.param("id", async (req, res, next, id) => {
  const folders = await getFoldersById(id);
  if (!folder) return res.status(404).send("Folder not found.");

  req.folder = folder;
  next();
});
router.route("/:id").get((req, res) => {
  res.send(req.folders);
});
router.route("/:id/files").get(async (req, res) => {
  const files = await getFoldersByFileId(req.file.id);
  res.send(appointments);
});