const elements = document.querySelectorAll('.element')
const boxes = document.querySelectorAll('.box')

let draggedElement = null

for(let i = 0; i< elements.length; i++)
{
    let item = elements[i]

    item.addEventListener('dragstart',()=>{
        console.log('dragstarted')
        draggedElement = item
        setTimeout(()=>{
            item.style.display = "none"
        },0)
    })

   item.addEventListener('dragend', ()=>{
       
       setTimeout(()=>{
        draggedElement.style.display = "block"
        draggedElement = null
       },0)
   })
     

    for(let j=0;j<boxes.length;j++){
         let box = boxes[j] 

         box.addEventListener('dragenter',(e)=>{
             e.preventDefault()
             box.style.backgroundColor = "blue"
         })
         box.addEventListener('dragover',(e)=>{
            e.preventDefault()
        })
        box.addEventListener('dragleave',(e)=>{
            box.style.backgroundColor = 'rgb(122, 122, 11)'
        })
        
         box.addEventListener('drop',()=>{
             box.appendChild(draggedElement)
             box.style.backgroundColor = 'rgb(122, 122, 11)'
         })
    }
}
