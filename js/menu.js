let blockBefore = document.getElementById("block_before");
let blockAfter = document.getElementById("block_after");
let blockBeforeChilds = blockBefore.children;


if( window.innerWidth <= 960 ){
	blockAfter.append(blockBeforeChilds[1]);

}