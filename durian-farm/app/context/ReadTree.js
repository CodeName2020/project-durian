'use client'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase";
import React, { useEffect, useState } from "react";

const ReadTreeCF = ({ farmId }) => {
    const [ numOfTree, setNOTree ] = useState(null);

    useEffect(() => {
        const readData = async () => {
            try {

                const farmRef = doc(db, "farm-name", farmId);
                const farmDoc = await getDoc(farmRef);
    
                if (farmDoc.exists()) {
                    const data = farmDoc.data();
                    setNOTree(data.numoftree)
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
    
    return numOfTree;
}

export default ReadTreeCF