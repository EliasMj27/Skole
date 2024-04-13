//Varibles 🪺
let ImagesArray=[];
let arrayWithSprites=[];
const body = document.getElementById("body");
const screenDiv = document.getElementById("Screen");
const outp= document.getElementById("out");
const scratchScreenHeightPixels=360;
const scratchScreenWidthPixels=480;
//Controls

//Key 🔑
class Key
{
    constructor()
    {
        this.up= false;
        this.down= false;
        this.left= false;
        this.right= false;
    }
}
//Screen 🖥️
class Screen 
{
    constructor()
    {
        this.vekst=480/360;
        this.isHeightWidthCorect;
        this.CheckWindowProportions();
        this.CreateScreen();
        this.borderLenW=window.innerWidth-window.innerWidth/100*25
        this.borderLenH=(window.innerWidth-window.innerWidth/100*25)/this.vekst
    }
    CheckWindowProportions()
    {
        if(window.innerWidth<=window.innerHeight*this.vekst)
        {
            this.isHeightWidthCorect=true;
        }
        else
        {
            this.isHeightWidthCorect=false;
        }
    }
    CreateScreen()
    {
        this.ReSizeScreen();
        screenDiv.style.position="absolute"
        screenDiv.style.border="solid";
        screenDiv.style.border="black";
        screenDiv.style.border="1px solid black";
        screenDiv.style.left="50%";
        screenDiv.style.transform="translate(-50%, 0)";
    }
    ReSizeScreen()
    {
        if(this.isHeightWidthCorect)
        {
            screenDiv.style.width=`${window.innerWidth-window.innerWidth/100*25}px`;
            screenDiv.style.height=`${(window.innerWidth-window.innerWidth/100*25)/this.vekst}px`;
        }
        else
        {
            screenDiv.style.width=`${(window.innerHeight-window.innerHeight/100*25)*this.vekst}px`;
            screenDiv.style.height=`${window.innerHeight-window.innerHeight/100*25}px`;
        }
    }

}

//Images 🖼️
class imageList
{
    imageIndex
    constructor(arrayWithImages)
    {
        ImagesArray.push(this)
        this.images=arrayWithImages;
        this.imageIndex=0;
        
    }
    GetIndex()
    {
        return this.imageIndex;
    }
    ChangeIndex(x=1)
    {
        this.imageIndex+=x;
        if (this.imageIndex>=this.images.length)
        {
            this.imageIndex=0;
        }
    }
}

//  Sprite 🤖
class Sprite
{
    constructor(Name, Image, WidthAndHeight, pos=[100,100], index = 0, size = 100) 
        {
        
        this.name = Name;
        this.visibility = true;
        this.imageArray = Image;
        this.ImageIndex = index;
        this.size = size;
        this.heightAndWidth=WidthAndHeight;
        this.x = pos[0];
        this.y = pos[1];
        arrayWithSprites.push(this);
        }
    Hide(){
        this.visibility = false;
    }
    Show()
    {
        this.visibility = true;
    }
    ChangeX(movment = 10)
    {
        this.x+=movment;
        this.SetPosition();
    }
    SetPosition()
    {
        this.image.style.left=`${this.ConvertPixelToPrecentagesX(this.x)}%`;
        this.image.style.top=`${this.ConvertPixelToPrecentagesY(this.y)}%`;
    }
    ConvertPixelToPrecentagesX(pixel)
    {
        return 100/scratchScreenWidthPixels*pixel;
    }
    ConvertPixelToPrecentagesY(pixel)
    {
        return 100/scratchScreenHeightPixels*pixel;
    }
    ChangeY(Movment)
    {
        this.y+=Movment;
        this.SetPosition();
    }
    CreateChild()
    {
        
        this.image = document.createElement("img");
        this.SetImageToChild();
        this.image.style.position="fixed";
        
        //this.image.classList.add("Spirte");
        screenDiv.appendChild(this.image);
        this.SetSize();
        this.SetPosition(); 

    }
    SetSize()
    {
        this.image.style.width=`${this.ConvertPixelToPrecentagesX(this.heightAndWidth[1]*(this.size/100))}%`;
        this.image.style.height=`${this.ConvertPixelToPrecentagesY(this.heightAndWidth[0]*(this.size/100))}%`;
    }
    SetImageToChild()
    {
        this.image.src=this.imageArray.images[this.imageArray.GetIndex()];
    
    }
}
//Background class
class background
{
    constructor()
    {
        
    }
}
class Level
{
    TileCountY=13;
    TileCountX=16;
    CreateTile(tiles)
    {
        this.tiles=tiles;
        this.height
        this.width
        let index=1;
        let tileX=0;
        this.ArrayWithTiles=[];
        let x=0;
        for(let i=0; i<this.TileCountX;i++)
        {
            let tileY=0;
            for(let j=0;j<this.TileCountY;j++)
            {
                x++;
                this.ArrayWithTiles.push(new Tile(x, ImagesArray[1], [16,16], [tileX,tileY], 2, 200));
                this.ArrayWithTiles[this.ArrayWithTiles.length-1].CreateChild();
                this.ArrayWithTiles[this.ArrayWithTiles.length-1].index=index;
                tileY+=32;   
            }
            tileX+=32;

        }
        alert(x)
    }
    PositionTiles()
    {
        for(i in this.ArrayWithTiles)
        {

        }
    }
}
class Tile extends Sprite
{
    
    UpdatePosition()
    {
        if(false)
        {

        }
    }
    GetCords()
    {
        return [this.TileX, this.TileY];
    }
}  
//Player 🎮
class Player extends Sprite
{
}


// Create objects 🗃️
let key = new Key();
const screen = new Screen();
const frogRun = new imageList([
    "Images\\NinjaFrog\\row-1-column-1.png", 
    "Images\\NinjaFrog\\row-1-column-2.png",
    "Images\\NinjaFrog\\row-1-column-3.png", 
    "Images\\NinjaFrog\\row-1-column-4.png",  
    "Images\\NinjaFrog\\row-1-column-5.png",
    "Images\\NinjaFrog\\row-1-column-6.png",
    "Images\\NinjaFrog\\row-1-column-7.png",
    "Images\\NinjaFrog\\row-1-column-8.png",
    "Images\\NinjaFrog\\row-1-column-9.png",
    "Images\\NinjaFrog\\row-1-column-10.png",
    "Images\\NinjaFrog\\row-1-column-11.png",
    "Images\\NinjaFrog\\row-1-column-12.png"])
const tiles = new imageList(
    [
        "Images\\Tiles\\row-1-column-1.png",
        "Images\\Tiles\\row-1-column-2.png",
        "Images\\Tiles\\row-1-column-3.png",
        "Images\\Tiles\\row-1-column-4.png",
        "Images\\Tiles\\row-1-column-5.png",
        "Images\\Tiles\\row-1-column-6.png",
        "Images\\Tiles\\row-1-column-7.png",
        "Images\\Tiles\\row-1-column-8.png",
        "Images\\Tiles\\row-1-column-9.png",
        "Images\\Tiles\\row-1-column-10.png",
        "Images\\Tiles\\row-1-column-11.png",
        "Images\\Tiles\\row-1-column-12.png",
        "Images\\Tiles\\row-1-column-13.png",
        "Images\\Tiles\\row-1-column-14.png",
        "Images\\Tiles\\row-1-column-15.png",
        "Images\\Tiles\\row-1-column-16.png",
        "Images\\Tiles\\row-1-column-17.png",
        "Images\\Tiles\\row-1-column-18.png",
        "Images\\Tiles\\row-1-column-19.png",
        "Images\\Tiles\\row-1-column-20.png",
        "Images\\Tiles\\row-1-column-21.png",
        "Images\\Tiles\\row-1-column-22.png",
        "Images\\Tiles\\row-2-column-1.png",
        "Images\\Tiles\\row-2-column-2.png",
        "Images\\Tiles\\row-2-column-3.png",
        "Images\\Tiles\\row-2-column-4.png",
        "Images\\Tiles\\row-2-column-5.png",
        "Images\\Tiles\\row-2-column-6.png",
        "Images\\Tiles\\row-2-column-7.png",
        "Images\\Tiles\\row-2-column-8.png",
        "Images\\Tiles\\row-2-column-9.png",
        "Images\\Tiles\\row-2-column-10.png",
        "Images\\Tiles\\row-2-column-11.png",
        "Images\\Tiles\\row-2-column-12.png",
        "Images\\Tiles\\row-2-column-13.png",
        "Images\\Tiles\\row-2-column-14.png",
        "Images\\Tiles\\row-2-column-15.png",
        "Images\\Tiles\\row-2-column-16.png",
        "Images\\Tiles\\row-2-column-17.png",
        "Images\\Tiles\\row-2-column-18.png",
        "Images\\Tiles\\row-2-column-19.png",
        "Images\\Tiles\\row-2-column-20.png",
        "Images\\Tiles\\row-2-column-21.png",
        "Images\\Tiles\\row-2-column-22.png",
        "Images\\Tiles\\row-3-column-1.png",
        "Images\\Tiles\\row-3-column-2.png",
        "Images\\Tiles\\row-3-column-3.png",
        "Images\\Tiles\\row-3-column-4.png",
        "Images\\Tiles\\row-3-column-5.png",
        "Images\\Tiles\\row-3-column-6.png",
        "Images\\Tiles\\row-3-column-7.png",
        "Images\\Tiles\\row-3-column-8.png",
        "Images\\Tiles\\row-3-column-9.png",
        "Images\\Tiles\\row-3-column-10.png",
        "Images\\Tiles\\row-3-column-11.png",
        "Images\\Tiles\\row-3-column-12.png",
        "Images\\Tiles\\row-3-column-13.png",
        "Images\\Tiles\\row-3-column-14.png",
        "Images\\Tiles\\row-3-column-15.png",

    ]
)
let level1 = new Level();
level1.CreateTile()

let player = new Player("Player", frogRun, [32,32], [100,100]);
player.CreateChild();


let int=0;


//eventlistner📆
body.addEventListener("keydown", function(e) {
  if (e.key === 'd') 
  {
    key.right=true;

  }
  if (e.key==='a')
  {
    key.left=true;
  }
});
body.addEventListener("keyup",function(e)
{
    if(e.key==='d')
    {
        key.right=false;
    }
    if(e.key==='a')
    {
        key.left=false;
    }
})
body.addEventListener("keydown",function(e)
{

});
body.addEventListener("keydown",function(e)
{
    if (e.key==='k')
    {
        player.SetImageToChild(frogRun);
        player.ChangeY(-10)
    }
});

//loop ♻️
const walkingLoop= ()=>
{
    if(key.right){    
        
        player.SetImageToChild(frogRun);
        player.ChangeX(3)
    }
    if(key.left){    
        
        player.SetImageToChild(frogRun);
        player.ChangeX(-3)
    }
    if(key.left^key.right)
    {
        frogRun.ChangeIndex();
    }
    

}
setInterval(walkingLoop,15)
