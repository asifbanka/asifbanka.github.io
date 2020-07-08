let table = document.querySelector("#table_body")

let table_data = [
    
{
    lecture:"1",
    title:"Overview",
    reading : "LA Ch 1 ",
    //sup_material : "The UNIX Time- Sharing System by Ritchie and Ken Thompson",
    remarks_events : "Online Meeting 01"
},

{
    lecture:"2",
    title:"Unix System Structure",
    reading : "The UNIX Time- Sharing System by Ritchie and Ken Thompson",
   // sup_material : "On Building Systems That Will Fail by  FJ Corbató",
    remarks_events : "Online Meeting 02"
},

{
    lecture:"3",
    title:"Linux Distributions and Standards",
    reading : "LA Ch 1",
   // sup_material : "",
    remarks_events : "Online Meeting 03"
},
{
    lecture:"4",
    title:"Installation and Documentation",
    reading : "LA Ch 2 & 3",
    //sup_material : "The structure of the “THE”-multiprogramming system by Dijkstra",
    remarks_events : "Online Meeting 04"
},
{
    lecture:"5",
    title:"File System and Hierarchy",
    reading : "LA Ch 5 & 7",
    //sup_material : "",
    remarks_events : "Online Meeting 05"
},
{
    lecture:"6",
    title:"Filters",
    reading : "UPE Ch 4",
    //sup_material : "Medical Devices: The Therac-25 by Nancy Leveson",
    remarks_events : "Online Meeting 06"
},
{
    lecture:"7",
    title:"Devices",
    reading : "LA Ch 5",
   // sup_material : "",
    remarks_events : "Online Meeting 07"
},
{
    lecture:"8",
    title:"Processes and Users",
    reading : "LA Ch 4",
    //sup_material : "An Introduction to Programming with Threads by Andrew D. Birrell",
    remarks_events : "Online Meeting 08"
},
{
    lecture:"9",
    title:"Networking DNS",
    reading : "LA Ch 12, 16",
    //sup_material : "",
    remarks_events : "Online Meeting 09"
},
{
    lecture:"10",
    title:"SMTP, IMAP/POP",
    reading : "LA Ch 19 & 20",
    //sup_material : "Deadlock avoidance with a modified banker's algorithm by Ferenc Belik",
    remarks_events : "Online Meeting 10"
},
{
    lecture:"11",
    title:"NFS and Distributed File System",
    reading : "LA Ch 22",
    //sup_material : "",
    remarks_events : "Online Meeting 11"
},
{
    lecture:"12",
    title:"Security and SSH",
    reading : "LA Ch 21",
    //sup_material : "",
    remarks_events : "Online Meeting 12"
},
{
    lecture:"13",
    title:"Print Server and CUPS",
    reading : "LA Ch 27",
    //sup_material : "Xen and The Art of Virtualization by Paul Barham",
    remarks_events : "Online Meeting 13"
},
{
    lecture:"14",
    title:"Virtualization",
    reading : "LA Ch 29",
    //sup_material : "",
    remarks_events : "Online Meeting 14"
},
{
    lecture:"15",
    title:"Backups",
    reading : "LA Ch 30",
    //sup_material : "Virtual Memory Management in the VAX/VMS Operating Systems by Lipman,",
    remarks_events : "Online Meeting 15"
},
{
    lecture:"16",
    title:"Shell Programming",
    reading : "UPE Ch 5",
    //sup_material : "Virtual Memory Management in the VAX/VMS Operating Systems by Lipman,",
    remarks_events : "Online Meeting 16"
},
{
    lecture:"17",
    title:"Additional Lecture I",
    reading : "",
    //sup_material : "Virtual Memory Management in the VAX/VMS Operating Systems by Lipman,",
    remarks_events : "Online Meeting 17"
},
{
    lecture:"18",
    title:"Additional Lecture II",
    reading : "",
    //sup_material : "Virtual Memory Management in the VAX/VMS Operating Systems by Lipman,",
    remarks_events : "Online Meeting 18"
}
]


function renderTableData(){
    let tableHTML = ""

    table_data.forEach((table_row)=>{
        tableHTML += `

        <tr>
        <td>
         ${table_row.lecture}
        </td>

        <td>
         ${table_row.title}
        </td>

        <td>
         ${table_row.reading}
        </td>
        <td>
        ${table_row.remarks_events}
        </td>
      </tr>

        

        `
    })

    table.innerHTML = tableHTML
}


renderTableData()
