import PouchDB from "pouchdb";
const db = new PouchDB("mydatabase9006");

export async function saveName(myId, name)
{
    await db.put({_id: myId, user: name });
}

export async function updateName(name)
{
    try {
        var doc = await db.get("username");
        var response = await db.put({
          _id: "username",
          _rev: doc._rev,
          user: name
        });
      } catch (err) {
        console.log(err);
      }
}

export async function getName(name)
{
    const namey = await db.get(name);
    return namey; 
}

export async function removeName(name) {
    try {
        var doc = await db.get("username");
        var response = await db.remove(doc);
      } catch (err) {
        console.log(err);
      }
  }

  