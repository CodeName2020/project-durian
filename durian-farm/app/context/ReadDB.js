'use client'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// export const ReadFarmName = ({ farmId }) => {
//     const [farm_name, setName] = useState(null);

//     useEffect(() => {
//         const readData = async () => {
//             try {
//                 const farmRef = doc(db, 'Farm', farmId);
//                 const farmDoc = await getDoc(farmRef);

//                 if (farmDoc.exists()) {
//                     const data = farmDoc.data();
//                     setName(data.farm_name)
//                 } else {
//                     console.log("No such document!");
//                 }
//             } catch (error) {
//                 console.log(error);
//                 alert(error);
//             }
//         };

//         readData();
//     }, [farmId]);

//     return farm_name;
// };

export const ReadFarmData = async ({ farmId }) => {
    try {
        const farmRef = doc(db, 'Farm', farmId);
        const farmDoc = await getDoc(farmRef);

        if (farmDoc.exists()) {
            const data = farmDoc.data();
            return data;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.log(error);
        alert(error);
        return null;
    }
};





