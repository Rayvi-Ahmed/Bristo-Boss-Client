import React, { useEffect, useState } from 'react';

const useMenu = () => {

const [menus,setMenus]=useState([])
const [loading,setLoading]=useState(false)

    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{

       
            setMenus(data)
            setLoading(true)
 
        })
    },[menus])

    return [menus,loading]
};  

export default useMenu;