import React from 'react';
const sidebarlist = [
    {
        "name":"Home"
    },
    {
        "name":"People"
    },
    {
        "name":"Academics"
    },
    {
        "name":"Research"
    },
    {
        "name":"Events"
    },
    {
        "name":"Contact us"
    },
    {
        "name":"Login"
    },
    {
        "name":"Home"
    },
    {
        "name":"Home"
    },
    {
        "name":"Home"
    },

]

const Sidebar = () => {
    
    return (
        <div style={{backgroundColor:"#636E72"}} className="w-4/12 hidden lg:block mt-1 mx-1 rounded">
            {
                sidebarlist.map(item=>
                    <div className="text-center text-white text-lg p-2 b border-b-2">{item?.name}</div>
                )
            }
          

            
        </div>
    );
}

export default Sidebar;
