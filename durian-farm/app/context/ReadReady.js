'use client'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase";
import React, { useEffect, useState } from "react";

const ReadCollecting = ({ farmId }) => {
    const [ numCollecting, setCollecting ] = useState(null);

    useEffect(() => {
        const readData = async () => {
            try {

                const farmRef = doc(db, "farm-name", farmId);
                const farmDoc = await getDoc(farmRef);
    
                if (farmDoc.exists()) {
                    const data = farmDoc.data();
                    setCollecting(data.collecting)
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
    
    return numCollecting;
}

export default ReadCollecting