//Varibles 🪺
let ImagesArray=[];
let arrayWithSprites=[];
const body = document.getElementById("body");
const screenDiv = document.getElementById("Screen");
const outp= document.getElementById("out");
const scratchScreenHeightPixels=360;
const scratchScreenWidthPixels=480;
//Funtions
function CreateArayFromFoulder(foulder, FileType="png",size) {
    let arr=[];
    for(i=0;i<size;i++)
    {
        arr.push(`${foulder}\\${i}.${FileType}`);
    }
    console.log("Completed creating");
    return arr;
    
}

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



//  Sprite 🤖
class Sprite
{
    constructor(Name, Image, WidthAndHeight, pos=[100,100], index = 0, size = 100) 
        {        
        this.name = Name;
        this.visibility = true;
        this.ImageIndex = index;
        this.size = size;
        this.heightAndWidth=WidthAndHeight;
        this.x = pos[0];
        this.y = pos[1];
        this.imageArray = [];
        for(let element in Image) {
           this.imageArray.push(element); 
        };
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
        this.image.style.position="absolute";

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
        console.log(this.imageArray)
        this.image.src=this.imageArray[this.index];
    }
    ChangeIndexPlus(x)
    {
        this.index+=x;
        if(this.index>=this.imageArray.length())
        {
            this.index=0;
        }
        
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
    constructor(tileLevel)
    {
        this.tileLevel=tileLevel
    }
    TileCountY=13;
    TileCountX=16;
    CreateTile(tile)
    {  
        console.log(tile) 
        this.tiles=tile;
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
                index++;
                x++;
                this.ArrayWithTiles.push(new Tile(x, this.tiles, [16,16], [tileX,tileY], this.tileLevel[i+j], 200));
                this.ArrayWithTiles[this.ArrayWithTiles.length-1].CreateChild();
                this.ArrayWithTiles[this.ArrayWithTiles.length-1].index=index;
                    console.log(index)
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
const frogRun = [
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
    "Images\\NinjaFrog\\row-1-column-12.png"]

const tiles = CreateArayFromFoulder("codeAndImage_1\\Images\\Tiles","png",145);
let level1 = new Level([1,1,1,1,1,1,1,1,1,1,1,1,1,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,1,1,1,1,1,1,1,1,1,1,1,1,1]);
level1.CreateTile(tiles)

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
        player.ChangeIndexPlus();
    }
    

}
setInterval(walkingLoop,15)
