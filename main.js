canvas=new fabric.Canvas("myCanavs");
 block_y=1;
 block_x=1;
image_width = 350;
image_height = 430;
var block_image_object= "";

function new_image(getimage)
{
	fabric.Image.fromURL("getimage",function (Img){
block=Img;
block.scaleToWidth(image_width);
block.scaleToHeight(image_height);
playerimg.set({
top:block_y,
left:blocdk_x
});
canvas.add(playerimg);
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
	new_image=("rr1.png");	
	console.log("red");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	}
	
}

