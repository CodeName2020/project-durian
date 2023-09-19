'use client'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase";
import React, { useEffect, useState } from "react";

const ReadToCFirestore = ({ farmId }) => {
    const [ numOfFruit, setNOF ] = useState(null);

    useEffect(() => {
        const readData = async () => {
            try {

                const farmRef = doc(db, "farm-name", farmId);
                const farmDoc = await getDoc(farmRef);
    
                if (farmDoc.exists()) {
                    const data = farmDoc.data();
                    setNOF(data.numoffruit)
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }

        readData();
    }, [farmId])
    
    return numOfFruit;
}

export default ReadToCFirestore