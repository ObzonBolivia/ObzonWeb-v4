import { app } from './config'
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { writeUserData } from './utils'

import imageCompression from 'browser-image-compression';

const storage = getStorage(app)

//--------------------------- Firebase Storage ---------------------------
async function uploadIMG(ruteDB, fileName, file, db) {
    const imagesRef = ref(storage, ruteDB);

    const options = {
        maxWidthOrHeight: 500,
        maxSizeMB: 0.07,
        alwaysKeepResolution: true,
        useWebWorker: true,
        maxIteration: 300,
        fileType: 'image/webp'
    }

    const compressedFile = file.type != 'image/gif'  ? await imageCompression(file, options) : file
    uploadBytes(imagesRef, compressedFile).then(async (snapshot) => {
        getDownloadURL(ref(storage, snapshot.metadata.fullPath))
            .then((url) => {
                let obj = {
                    url,
                }

                console.log(db)
              // writeUserData(`/usersCollage/${user.uid}`, { image, dataUrl }, null)
             //  uploadIMG(`/usersCollage/${user.uid}/${i}`, i, image.i.file, image.i)

                return writeUserData(ruteDB, {...db, ...obj, }, null, null)
            })
            .catch((error) => {
            });
    });
}

let object = {}
export { uploadIMG }