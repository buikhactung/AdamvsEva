let Apple = function (weight) {
    this.weight = weight;
    this.isEmpty = false;
    this.getWeight = weight;
}
let Human = function (name,gender,weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.isMale = function () {
        return true;
    }
    this.checkApple = function (apple) {
        return apple.weight
    }
    this.eatApple = function (apple) {
        if (apple.weight > 0) {
            this.weight++;
            apple.weight--;
        }
    }
    this.say = function () {
        if (this.gender == true) {
            alert("Ông giáo đang trộm táo đấy ak")
        } else
            alert("Tôi, Dậu đây")
        this.getName = function () {
            return this.Name
        }
    }

    this.getWeight = function () {
        return this.weight
    }
};
let adam = new Human('Nam',true,80);
let eva = new Human('Hoang',false,50);
let apple = new Apple(10);
adam.eatApple(apple);
eva.eatApple(apple);
