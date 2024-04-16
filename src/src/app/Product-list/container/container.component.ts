import { Component, Input } from '@angular/core';
import { Product } from '../../Model/product';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {


product = [
  {
    id: "001",
    name: "T-Shirt",
    description: "Cotton t-shirt with crew neck",
    brand: "XYZ Clothing",
    gender: "Unisex",
    category: "Clothing",
    size: "M",
    color: "Black",
    price: "$19.99",
    inventory: 100,
    items_remain: 80,
    image_Url: "assets/images/t-shirt-girl.jpg"
  },
  {
    id: "002",
    name: "Jeans",
    description: "Slim-fit denim jeans",
    brand: "ABC Denim",
    gender: "Male",
    category: "Clothing",
    size: "32",
    color: "Blue",
    price: "$49.99",
    inventory: 50,
    items_remain: 30,
    image_Url: "assets/images/jeans.jpg"
  },
  {
    id: "003",
    name: "Sneakers",
    description: "Canvas sneakers with rubber sole",
    brand: "DEF Footwear",
    gender: "Female",
    category: "Footwear",
    size: "7",
    color: "White",
    price: "$29.99",
    inventory: 80,
    items_remain: 60,
    image_Url: "assets/images/sneaker.jpg"
  },
  {
    id: "004",
    name: "Hoodie",
    description: "Fleece pullover hoodie with kangaroo pocket",
    brand: "GHI Apparel",
    gender: "Unisex",
    category: "Clothing",
    size: "L",
    color: "Gray",
    price: "$39.99",
    inventory: 70,
    items_remain: 40,
    image_Url: "assets/images/hoodie.jpg"
  },
  {
    id: "005",
    name: "Dress",
    description: "Floral print sundress with spaghetti straps",
    brand: "JKL Fashion",
    gender: "Female",
    category: "Clothing",
    size: "S",
    color: "Pink",
    price: "$59.99",
    inventory: 60,
    items_remain: 20,
    image_Url: "assets/images/dress.jpg"
  },
  {
    id: "006",
    name: "Sunglasses",
    description: "Classic aviator sunglasses with metal frame",
    brand: "MNO Eyewear",
    gender: "Unisex",
    category: "Accessories",
    size: "One Size",
    color: "Gold",
    price: "$14.99",
    inventory: 120,
    items_remain: 10,
    image_Url: "assets/images/sunglass.jpg"
  },
  {
    id: "007",
    name: "Backpack",
    description: "Nylon backpack with multiple compartments",
    brand: "PQR Bags",
    gender: "Unisex",
    category: "Bags",
    size: "One Size",
    color: "Black",
    price: "$34.99",
    inventory: 90,
    items_remain: 70,
    image_Url: "assets/images/backpack.jpg"
  },
  {
    id: "008",
    name: "Jacket",
    description: "Waterproof windbreaker jacket with hood",
    brand: "STU Outerwear",
    gender: "Male",
    category: "Clothing",
    size: "XL",
    color: "Green",
    price: "$79.99",
    inventory: 40,
    items_remain: 10,
    image_Url: "assets/images/jacket.jpg"
  },
  {
    id: "009",
    name: "Leggings",
    description: "High-waisted athletic leggings",
    brand: "VWX Sports",
    gender: "Female",
    category: "Clothing",
    size: "XS",
    color: "Black",
    price: "$24.99",
    inventory: 110,
    items_remain: 90,
    image_Url: "assets/images/leggins.jpg"
  },
  {
    id: "010",
    name: "Beanie",
    description: "Knit beanie with fold-over cuff",
    brand: "YZA Accessories",
    gender: "Unisex",
    category: "Accessories",
    size: "One Size",
    color: "Navy",
    price: "$9.99",
    inventory: 150,
    items_remain: 20,
    image_Url: "assets/images/beanie.jpg"
  },
  {
    id: "011",
    name: "Shorts",
    description: "Cargo shorts with multiple pockets",
    brand: "BCD Apparel",
    gender: "Male",
    category: "Clothing",
    size: "34",
    color: "Khaki",
    price: "$39.99",
    inventory: 75,
    items_remain: 50,
    image_Url: "assets/images/shorts.jpg"
  },
  {
    id: "012",
    name: "Sweatpants",
    description: "Jogger-style sweatpants with drawstring waist",
    brand: "EFG Activewear",
    gender: "Unisex",
    category: "Clothing",
    size: "M",
    color: "Gray",
    price: "$29.99",
    inventory: 85,
    items_remain: 60,
    image_Url: "assets/images/sweatpants.jpg"
  },
  {
    id: "013",
    name: "Tank Top",
    description: "Ribbed tank top with racerback",
    brand: "HIJ Clothing",
    gender: "Female",
    category: "Clothing",
    size: "L",
    color: "White",
    price: "$14.99",
    inventory: 95,
    items_remain: 70,
    image_Url: "assets/images/tank_top.jpg"
  },
  {
    id: "014",
    name: "Sweater",
    description: "Chunky knit sweater with cable detailing",
    brand: "KLM Knitwear",
    gender: "Unisex",
    category: "Clothing",
    size: "S",
    color: "Beige",
    price: "$54.99",
    inventory: 65,
    items_remain: 40,
    image_Url: "assets/images/sweater.jpg"
  },
  {
    id: "015",
    name: "Sandals",
    description: "Leather sandals with adjustable straps",
    brand: "NOP Footwear",
    gender: "Unisex",
    category: "Footwear",
    size: "9",
    color: "Brown",
    price: "$49.99",
    inventory: 55,
    items_remain: 30,
    image_Url: "assets/images/sandles.jpg"
  },
  {
    id: "016",
    name: "Watch",
    description: "Analog wristwatch with leather strap",
    brand: "QRS Watches",
    gender: "Unisex",
    category: "Accessories",
    size: "One Size",
    color: "Silver",
    price: "$69.99",
    inventory: 105,
    items_remain: 80,
    image_Url: "assets/images/watch.jpg"
  },
  {
    id: "017",
    name: "Scarf",
    description: "Cashmere scarf with fringe trim",
    brand: "TUV Accessories",
    gender: "Unisex",
    category: "Accessories",
    size: "One Size",
    color: "Red",
    price: "$39.99",
    inventory: 80,
    items_remain: 50,
    image_Url: "assets/images/scarf.jpg"
  },
  {
    id: "018",
    name: "Tie",
    description: "Silk necktie with paisley print",
    brand: "VWX Accessories",
    gender: "Male",
    category: "Accessories",
    size: "One Size",
    color: "Blue",
    price: "$24.99",
    inventory: 70,
    items_remain: 40,
    image_Url: "assets/images/tie.jpg"
  },
  
  {
    id: "019",
    name: "T-Shirt",
    description: "Cotton t-shirt with crew neck",
    brand: "XYZ Clothing",
    gender: "Unisex",
    category: "Clothing",
    size: "M",
    color: "Black",
    price: "$19.99",
    inventory: 100,
    items_remain: 80,
    image_Url: "assets/images/t-shirt.jpg"
  },
  {
    id: "020",
    name: "Jeans",
    description: "Slim-fit denim jeans",
    brand: "ABC Denim",
    gender: "Male",
    category: "Clothing",
    size: "32",
    color: "Blue",
    price: "$49.99",
    inventory: 50,
    items_remain: 30,
    image_Url: "assets/images/jeans.jpg"
  },
  {
    id: "021",
    name: "Sneakers",
    description: "Canvas sneakers with rubber sole",
    brand: "DEF Footwear",
    gender: "Female",
    category: "Footwear",
    size: "7",
    color: "White",
    price: "$29.99",
    inventory: 80,
    items_remain: 60,
    image_Url: "assets/images/sneaker.jpg"
  },
  {
    id: "022",
    name: "Hoodie",
    description: "Fleece pullover hoodie with kangaroo pocket",
    brand: "GHI Apparel",
    gender: "Unisex",
    category: "Clothing",
    size: "L",
    color: "Gray",
    price: "$39.99",
    inventory: 70,
    items_remain: 40,
    image_Url: "assets/images/hoodie.jpg"
  },
  {
    id: "023",
    name: "Dress",
    description: "Floral print sundress with spaghetti straps",
    brand: "JKL Fashion",
    gender: "Female",
    category: "Clothing",
    size: "S",
    color: "Pink",
    price: "$59.99",
    inventory: 60,
    items_remain: 20,
    image_Url: "assets/images/dress.jpg"
  },
  {
    id: "024",
    name: "Sunglasses",
    description: "Classic aviator sunglasses with metal frame",
    brand: "MNO Eyewear",
    gender: "Unisex",
    category: "Accessories",
    size: "One Size",
    color: "Gold",
    price: "$14.99",
    inventory: 120,
    items_remain: 10,
    image_Url: "assets/images/sunglass.jpg"
  },
  {
    id: "025",
    name: "Backpack",
    description: "Nylon backpack with multiple compartments",
    brand: "PQR Bags",
    gender: "Unisex",
    category: "Bags",
    size: "One Size",
    color: "Black",
    price: "$34.99",
    inventory: 90,
    items_remain: 70,
    image_Url: "assets/images/backpack.jpg"
  },
  {
    id: "026",
    name: "Jacket",
    description: "Waterproof windbreaker jacket with hood",
    brand: "STU Outerwear",
    gender: "Male",
    category: "Clothing",
    size: "XL",
    color: "Green",
    price: "$79.99",
    inventory: 40,
    items_remain: 10,
    image_Url: "assets/images/jacket.jpg"
  },
  {
    id: "027",
    name: "Leggings",
    description: "High-waisted athletic leggings",
    brand: "VWX Sports",
    gender: "Female",
    category: "Clothing",
    size: "XS",
    color: "Black",
    price: "$24.99",
    inventory: 110,
    items_remain: 90,
    image_Url: "assets/images/leggins.jpg"
  },
  {
    id: "028",
    name: "Beanie",
    description: "Knit beanie with fold-over cuff",
    brand: "YZA Accessories",
    gender: "Unisex",
    category: "Accessories",
    size: "One Size",
    color: "Navy",
    price: "$9.99",
    inventory: 150,
    items_remain: 20,
    image_Url: "assets/images/beanie.jpg"
  },
  {
    id: "029",
    name: "Shorts",
    description: "Cargo shorts with multiple pockets",
    brand: "BCD Apparel",
    gender: "Male",
    category: "Clothing",
    size: "34",
    color: "Khaki",
    price: "$39.99",
    inventory: 75,
    items_remain: 50,
    image_Url: "assets/images/shorts.jpg"
  },
  {
    id: "030",
    name: "Sweatpants",
    description: "Jogger-style sweatpants with drawstring waist",
    brand: "EFG Activewear",
    gender: "Unisex",
    category: "Clothing",
    size: "M",
    color: "Gray",
    price: "$29.99",
    inventory: 85,
    items_remain: 60,
    image_Url: "assets/images/sweatpants.jpg"
  },
  {
    id: "031",
    name: "Tank Top",
    description: "Ribbed tank top with racerback",
    brand: "HIJ Clothing",
    gender: "Female",
    category: "Clothing",
    size: "L",
    color: "White",
    price: "$14.99",
    inventory: 95,
    items_remain: 70,
    image_Url: "assets/images/tank_top.jpg"
  },
  {
    id: "032",
    name: "Sweater",
    description: "Chunky knit sweater with cable detailing",
    brand: "KLM Knitwear",
    gender: "Unisex",
    category: "Clothing",
    size: "S",
    color: "Beige",
    price: "$54.99",
    inventory: 65,
    items_remain: 40,
    image_Url: "assets/images/sweater.jpg"
  },
  {
    id: "033",
    name: "sandals",
    description: "Leather sandals with adjustable straps",
    brand: "NOP Footwear",
    gender: "Unisex",
    category: "Footwear",
    size: "9",
    color: "Brown",
    price: "$49.99",
    inventory: 55,
    items_remain: 30,
    image_Url: "assets/images/sandles.jpg"
  },
  {
    id: "034",
    name: "Watch",
    description: "Analog wristwatch with leather strap",
    brand: "QRS Watches",
    gender: "Unisex",
    category: "Accessories",
    size: "One Size",
    color: "Silver",
    price: "$69.99",
    inventory: 105,
    items_remain: 80,
    image_Url: "assets/images/watch.jpg"
  },
  {
    id: "035",
    name: "Scarf",
    description: "Cashmere scarf with fringe trim",
    brand: "TUV Accessories",
    gender: "Unisex",
    category: "Accessories",
    size: "One Size",
    color: "Red",
    price: "$39.99",
    inventory: 80,
    items_remain: 50,
    image_Url: "assets/images/scarf.jpg"
  },
  {
    id: "036",
    name: "Tie",
    description: "Silk necktie with paisley print",
    brand: "VWX Accessories",
    gender: "Male",
    category: "Accessories",
    size: "One Size",
    color: "Blue",
    price: "$24.99",
    inventory: 70,
    items_remain: 40,
    image_Url: "assets/images/tie.jpg"
  } 
]

allProducts  = this.product.length
InStockProducts   = this.product.filter( p =>  p.inventory >= 70).length
OutOfStockProducts  = this.product.filter (p =>  p.inventory < 70).length

onFilter:string = 'all'

SelectedProduct:Product;

filterChanging(value : string){
  this.onFilter = value
}

@Input()
valueGained : string


}
