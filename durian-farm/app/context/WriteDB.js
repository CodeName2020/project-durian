import React from 'react'
import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'

// export const AddFarm = () => {

//     const genId = async () => {
//         const farmRef = collection(db, 'Farm');
//         const farmSnapshot = await getDocs(farmRef);
//         return farmSnapshot.size + 1;
//     }

//     const addfarm = async () => {
//         const nextDocId = await genId();
//         const docRef = doc(db, 'Farm', `id${nextDocId}`);

//         const data = {
//             farm_name: "farm1",
//             farm_location: "Kathu",
//             farm_province: "Phuket",
//             farm_durian_species: "Durio zibethinus",
//             farm_photo: "path",
//             farm_status: true,
//             farm_pollination_date: new Date("2023-02-01"),
//             farm_tree: 200,
//             farm_space: 50,
//             latitude: 7.905911,
//             longitude: 98.386820,
//             durian_amount: 5000
//         };

//         try {
//             await setDoc(docRef, data);
//             console.log("Document written with ID: ", docRef.id);
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         }
//     }

//     return (
//         <button onClick={addfarm}>Add Farm</button>
//     )
// }

// Farm_Table

const genId = async () => {
    const farmRef = collection(db, 'Farm');
    const farmSnapshot = await getDocs(farmRef);
    return farmSnapshot.size+1;
}

export const addFarm = async (data) => {
    const nextDocId = await genId();
    const docRef = doc(db, 'Farm', `id${nextDocId}`);

    try {
        await setDoc(docRef, data);
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

export const updateFarm = async (farmId, data) => {
    const farmRef = doc(db, 'Farm', farmId);

    try {
        await setDoc(farmRef, data);
        console.log(`Farm with ID ${farmId} updated successfully.`);
    } catch (error) {
        console.error(`Error updating farm with ID ${farmId}:`, error);
    }
};

export const deleteFarm = async (farmId) => {
    const farmRef = doc(db, 'Farm', farmId);

    try {
        await deleteDoc(farmRef);
        console.log(`Farm with ID ${farmId} deleted`);
    } catch (error) {
        console.error(`Error deleting farm with ID ${farmId}`, error);
    }
};


// Tree_Table
export const AddTree = () => {
    const genTreeId = async () => {
        const treeRef = collection(db, 'Tree');
        const treeSnapshot = await getDocs(treeRef);
        return treeSnapshot.size + 1;
    }

    const addtree = async () => {
        const nextDocId = await genTreeId();
        const docRef = doc(db, 'Tree', `id${nextDocId}`);

        const data = {
            farm_id: "id1",
            tree_collected: 1300,
            tree_ready: 300,
            tree_notReady: 200,
            created_at: new Date("2023-02-01")
        };

        try {
            await setDoc(docRef, data);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <button onClick={addtree}>Add Tree</button>
    )
}
// User_Table
export const AddUser = () => {
    const genUserId = async () => {
        const userRef = collection(db, 'User');
        const userSnapshot = await getDocs(userRef);
        return userSnapshot.size + 1;
    }

    const adduser = async () => {
        const nextDocId = await genUserId();
        const docRef = doc(db, 'User', `user_id${nextDocId}`);

        const data = {
            username: "user1",
            email: "sample@gmail.com",
            password_hash: "hash",
            created_at: new Date("2023-02-01T00:05:34"),
            user_role: "admin or user"
        };

        try {
            await setDoc(docRef, data);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <button onClick={adduser}>Add User</button>
    )
}
// Prediction_Table
export const AddPrediction = () => {
    const genPredictId = async () => {
        const predictRef = collection(db, 'Prediction');
        const predictSnapshot = await getDocs(predictRef);
        return predictSnapshot.size + 1;
    }

    const adduser = async () => {
        const nextDocId = await genPredictId();
        const docRef = doc(db, 'Prediction', `id${nextDocId}`);

        const data = {
            farm_id: "id1",
            tree_id: "id1",
            tree_ready_amount: "1500",
            tree_ready_in: new Date("2023-02-01"),
            change: 300,
            percent_change: 30,
            created_at: new Date("2023-02-01T00:05:34"),
        };

        try {
            await setDoc(docRef, data);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <button onClick={adduser}>Add Prediction</button>
    )
}
// Tree_Photo_Table
export const AddTreePhoto = () => {
    const genTreePhotoId = async () => {
        const predictRef = collection(db, 'Tree_Photo');
        const predictSnapshot = await getDocs(predictRef);
        return predictSnapshot.size + 1;
    }

    const addtreephoto = async () => {
        const nextDocId = await genTreePhotoId();
        const docRef = doc(db, 'Tree_Photo', `id${nextDocId}`);

        const data = {
            tree_id: "id1",
            tree_photo_path: "path",
            created_at: new Date("2023-02-01T00:05:34")
        };

        try {
            await setDoc(docRef, data);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <button onClick={addtreephoto}>Add Tree Photo</button>
    )
}
// Disease_Table
export const AddDisease = () => {
    const genDiseaseId = async () => {
        const disRef = collection(db, 'Disease');
        const disSnapshot = await getDocs(disRef);
        return disSnapshot.size + 1;
    }

    const adddis = async () => {
        const nextDocId = await genDiseaseId();
        const docRef = doc(db, 'Disease', `id${nextDocId}`);

        const data = {
            farm_id: "id1",
            tree_id: "id1",
            disease: "disease id to diease description",
            created_at: new Date("2023-02-01T00:05:34")
        };

        try {
            await setDoc(docRef, data);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <button onClick={adddis}>Add Disease</button>
    )
}
// User_Farm_Table
export const AddUserFarm = () => {
    const genUserFarmId = async () => {
        const userFarmRef = collection(db, 'User_Farm');
        const userFarmSnapshot = await getDocs(userFarmRef);
        return userFarmSnapshot.size + 1;
    }

    const adduserfarm = async () => {
        const nextDocId = await genUserFarmId();
        const docRef = doc(db, 'User_Farm', `user_farm_id${nextDocId}`);

        const data = {
            user_id: "id1",
            farm_id: "id1"
        };

        try {
            await setDoc(docRef, data);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <button onClick={adduserfarm}>Add User Farm</button>
    )
}