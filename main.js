let table = document.querySelector("#table_body")

let table_data = [
    
{
    lecture:"1",
    title:"Overview of Operating Systems",
    reading : "OSC Ch1 and Ch2",
    sup_material : "The UNIX Time- Sharing System by Ritchie and Ken Thompson",
    remarks_events : "Lecture Delivered"
},

{
    lecture:"2",
    title:"Operating Systems : Structure and  History",
    reading : "OSC Ch1 and Ch2",
    sup_material : "On Building Systems That Will Fail by  FJ Corbató",
    remarks_events : "Lecture Delivered"
},

{
    lecture:"3",
    title:"Threads and Concurrency",
    reading : "OSC Ch4",
    sup_material : "",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"4",
    title:"Thread Protection and Cooperating Threads",
    reading : "OSC Ch3",
    sup_material : "The structure of the “THE”-multiprogramming system by Dijkstra",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"5",
    title:"Processes and Life Cycle of a Process",
    reading : "OSC Ch3",
    sup_material : "",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"6",
    title:"Synchronization",
    reading : "OSC Ch5",
    sup_material : "Medical Devices: The Therac-25 by Nancy Leveson",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"7",
    title:"Mutual Exlusion, Critical Section and Locks",
    reading : "OSC Ch5",
    sup_material : "",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"8",
    title:"Semaphores and Monitors",
    reading : "OSC Ch5",
    sup_material : "An Introduction to Programming with Threads by Andrew D. Birrell",
    remarks_events : "Lecture Pending"
},
{
    lecture:"9",
    title:"Resource Contention and Deadlocks",
    reading : "OSC Ch7",
    sup_material : "",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"10",
    title:"Deadlocks : Handling and Avoidance",
    reading : "OSC Ch7",
    sup_material : "Deadlock avoidance with a modified banker's algorithm by Ferenc Belik",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"11",
    title:"Scheduling FCFS, RR, Priority",
    reading : "OSC Ch6",
    sup_material : "",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"12",
    title:"Scheduling  SJF, STRF, Lottery",
    reading : "OSC Ch6",
    sup_material : "",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"13",
    title:"Memory Virtualization and Address Translation",
    reading : "OSC Ch8",
    sup_material : "Xen and The Art of Virtualization by Paul Barham",
    remarks_events : "Lecture Delivered"
},
{
    lecture:"14",
    title:"Segmentation and Paging",
    reading : "OSC Ch8 and Ch9",
    sup_material : "",
    remarks_events : "Online Meeting 1"
},
{
    lecture:"15",
    title:"Caching and Demand Paging",
    reading : "OSC Ch9",
    sup_material : "Virtual Memory Management in the VAX/VMS Operating Systems by Lipman,",
    remarks_events : "Online Meeting 2"
},
{
    lecture:"16",
    title:"Page Replacement Algorithms",
    reading : "OSC Ch9",
    sup_material : "",
    remarks_events : "Online Meeting 3"
},
{
    lecture:"17",
    title:"I/O and Disks",
    reading : "OSC Ch10",
    sup_material : "",
    remarks_events : "Online Meeting 4"
},
{
    lecture:"18",
    title:"File Systems",
    reading : "OSC Ch11 and Ch12",
    sup_material : "A Fast File System for UNIX by M. McKusick",
    remarks_events : "Online Meeting 5"
},
{
    lecture:"19",
    title:"Buffer Lecture",
    reading : "Online",
    sup_material : "",
    remarks_events : "Online Meeting 6"
},
{
    lecture:"20",
    title:"Optional Lecture : Distributed File Systems",
    reading : "OSC Ch17",
    sup_material : "",
    remarks_events : "To Be Decided"
},
{
    lecture:"21",
    title:"Optional Lecture : Cloud Computing / IoT",
    reading : "Online",
    sup_material : "",
    remarks_events : "To Be Decided"
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
       <a href="">  ${table_row.sup_material} </a>
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