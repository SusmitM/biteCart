import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../apis/fakefetch";

const MenuContext=createContext();

export const MenuContextProvider=( {children})=>{
    const [Menu,setMenu]=useState([]);
    const [filters,setFilters]=useState({
        searchInput:"",
        checkbox:[],
        radiobutton:null
    })

    const getData=async ()=>{
       try{
        const response=await fakeFetch("https://example.com/api/menu");
        setMenu(response.data.menu);
       }
       catch(error){
        console.log(error);
       }
    }

    useEffect(()=>{
        getData();
    },[])
    
    //function to update the checkbox item of the filter

    const handelCheckboxFilter=(value)=>{
        filters.checkbox.includes(value) ?
        setFilters({...filters,checkbox:filters.checkbox.filter(item=>item!==value)}) :
        setFilters({...filters,checkbox:[...filters.checkbox,value]})

    }

    //function to update the search item of the filter
    
    const handelSearchFilter=(inputText)=>{
        setFilters({...filters,searchInput:inputText})

    }


    // function to update the radio item of the filter
    const handelRadioFilter=(sortType)=>{
        setFilters({...filters,radiobutton:sortType})
    }

//Updating the Menu items array on the basis of filters Applied
      
    //Applying checkbox filter
    const checkboxFilteredData=filters.checkbox.length>0 ? 
    Menu.filter(item=>
        filters.checkbox.every(checkboxFilter=>item[checkboxFilter]))
        :
        Menu;

    //Applying search filter
    
    const searchFilteredData=filters.searchInput.length>0 ?
        checkboxFilteredData.filter(({name})=>name.toLowerCase().includes(filters.searchInput.toLowerCase()))
        :
        checkboxFilteredData;

    //Applying radiobox filter    
    
     const radioFilteredData=filters.radiobutton ?
      searchFilteredData.sort((item1,item2)=>
      filters.radiobutton=="HtL" ?
      item2.price -item1.price :
      item1.price-item2.price) 
      :
      searchFilteredData  
      



    return(
        <>
        <MenuContext.Provider value={{radioFilteredData, handelCheckboxFilter,handelSearchFilter,handelRadioFilter}} >
            {children}
        </MenuContext.Provider>
        </>
    )
}

export const useMenuContext=()=>useContext(MenuContext);