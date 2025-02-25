
// const CATEGORY = new Map([[
//     "DORM", { name: "Dorm", imgSrc: "https://img.icons8.com/?size=100&id=O5nrjV4hQ6c3&format=png&color=000000" }], [
//     "FLAT", { name: "Flat", imgSrc: "https://img.icons8.com/?size=100&id=Kl7geddyn2ql&format=png&color=000000" }], [
//     "APARTMENT", { name: "Apartment", imgSrc: "https://img.icons8.com/?size=100&id=0JrIGuVzvy38&format=png&color=000000" }], [
//     "CONDO", { name: "Condo", imgSrc: "https://img.icons8.com/?size=100&id=Mhoj6BcsXFRw&format=png&color=000000" }], [
//     "HOME", { name: "Home", imgSrc: "https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=000000" }],

//   ])



class Category {

    constructor(name, imgSrc, color = "000000") {
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgSrcWithColor = imgSrc + color;
        // this.size=size;
        this.color = color;
    }
    getImgSrcWithColor() {
        return this.imgSrcWithColor;
    }
    customColor(newColor) {
        return this.imgSrc + newColor;
    }
}


export default Category;
export const CATEGORY = new Map([[
    "DORM", new Category("Dorm", "https://img.icons8.com/?size=100&id=O5nrjV4hQ6c3&format=png&color=")], [
    "FLAT", new Category("Flat", "https://img.icons8.com/?size=100&id=Kl7geddyn2ql&format=png&color=")], [
    "APARTMENT",new Category("Apartment", "https://img.icons8.com/?size=100&id=0JrIGuVzvy38&format=png&color=")], [
    "CONDO",new Category("Condo", "https://img.icons8.com/?size=100&id=Mhoj6BcsXFRw&format=png&color=")], [
    "HOME",new Category("Home", "https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=")],

])
