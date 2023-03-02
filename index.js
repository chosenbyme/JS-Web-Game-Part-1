function newImage(url,left,bottom ){
    let Image = document.createElement('img') 
    Image.src = url
    Image.style.position = 'fixed'
    Image.style.left = left
    Image.style.bottom = bottom
    document.body.append(Image)
    return Image
}

newImage('assets/green-character.gif','100px','100px')
newImage('assets/pine-tree.png','450px','200px')
newImage('assets/tree.png','200px','300px')
newImage('assets/pillar.png','350px','100px')
newImage('assets/crate.png','150px','200px')
newImage('assets/well.png','500px','425px')

function newItem(url,left,bottom){
    let Item = document.createElement('img')
    Item.src = url
    Item.style.position = 'fixed'
    Item.style.left = left
    Item.style.bottom = bottom
    document.body.append(Item)

    Item.addEventListener('click', function(){
        Item.remove()
})
}

newItem('assets/sword.png','500px','405px')
newItem('assets/sheild.png','165px','185px')
newItem('assets/staff.png','600px','100px')

function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

