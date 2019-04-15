class Camera {
    constructor() {
        this.lens = true;
        this.flash = true;
        this.sdCard = true;
    }

    takePictureWithFlash() {
        return "You are now blind";
    }

    takePictureWithoutFlash() {
        return "It's blurry"
    }

    getLens() {
        return this.lens;
    }

    getFlash() {
        return this.flash;
    }

    getSdCard() {
        return this.sdCard;
    }
}

module.exports = Camera;