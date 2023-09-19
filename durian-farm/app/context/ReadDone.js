'use client'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase";
import React, { useEffect, useState } from "react";

const ReadCollected = ({ farmId }) => {
    const [ numCollected, setCollected ] = useState(null);

    useEffect(() => {
        const readData = async () => {
            try {

                const farmRef = doc(db, "farm-name", farmId);
                const farmDoc = await getDoc(farmRef);
    
                if (farmDoc.exists()) {
                    const data = farmDoc.data();
                    setCollected(data.collected)
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
    
    return numCollected;
}

export default ReadCollected