function Phone(brand, price, color, memory, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.memory = memory;
	this.camera = camera;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + "The phone has" + this.memory + "GB memory and camera with" + this.camera + "mpx.");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 32, 13);
var SamsungGalaxyS6 = new Phone("Samsung", 1900, "black", 64, 13);
var OnePlusOne = new Phone("OnePlus", 1500, "white", 32, 8);
var HuaweiP10 = new Phone("Huawei", 2500, "blue", 64, 18);

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
HuaweiP10.printInfo();
