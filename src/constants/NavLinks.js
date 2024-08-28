
const NavLinks = {
    NavInfo:[{
        name:"Home",
        path:"/",
        type:"link"
    },
{
    name:"Articles",
    path:"/Articles",
    type:"link"
},
    {
        name:"Pages",
        type:"dropdown",
        items:[{
            name:"About",
            path:"/about",
            type:"link"
        },{
            name:"Contact",
            path:"#contact",
            type:"link"
        }]
    },{
        name:"FAQs",
        path:"/faqs",
        type:"link"
    }]
}
 export default NavLinks;
 