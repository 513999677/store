export const topx = function(rpx){
	let num = String(rpx).replace("rpx","")
	return num + 'px';
}

export const torpx = function(px){
	let num = String(px).replace("px","")
	return num + 'rpx';
}

export const getMenuButtonInfo = function(px){
	return uni.getMenuButtonBoundingClientRect()
}
