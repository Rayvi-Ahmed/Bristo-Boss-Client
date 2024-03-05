import React, { useEffect, useState } from 'react';

const useMenu = () => {

const [menus,setMenus]=useState([])
const [loading,setLoading]=useState(false)

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMenus(data)
            setLoading(true)
 
        })
    },[menus])

    return [menus,loading]
};

export default useMenu;