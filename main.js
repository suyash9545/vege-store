let carts = document.querySelectorAll('.btn');
let products =[
    {
        name:'CAPSICUM',
        prise:'99',
        Incart: 0
    },
    {
        name:'STRAWBERRY',
        prise:'199',
        Incart: 0
    },
    {
        name:'GREEN BEANS',
        prise:'40',
        Incart: 0
    },
    {
        name:'PURPLE CABBAGE',
        prise:'30',
        Incart: 0
    },
    {
        name:'TOMATOE',
        prise:'39',
        Incart: 0
    },
    {
        name:'BROCOLLI',
        prise:'50',
        Incart: 0
    },
    {
        name:'CARROTS',
        prise:'129',
        Incart: 0
    },
    {
        name:'FRUIT JUICE',
        prise:'80',
        Incart: 0
    },
    {
        name:'ONION',
        prise:'69',
        Incart: 0
    },
    {
        name:'APPLE',
        prise:'30',
        Incart: 0
    },
    {
        name:'GARLIC',
        prise:'99',
        Incart: 0
    },
    {
        name:'RED CHILLI',
        prise:'99',
        Incart: 0
    },
    {
        name:'BLACK URAD DAL',
        prise:'99',
        Incart: 0
    },
    {
        name:'MASOOR DAL',
        prise:'199',
        Incart: 0
    },{
        name:'MOONG DAL',
        prise:'159',
        Incart: 0
    },{
        name:'TUR DAL',
        prise:'130',
        Incart: 0
    },{
        name:'URAD DAL',
        prise:'127',
        Incart: 0
    },{
        name:'DRY-FRUITS',
        prise:'200',
        Incart: 0
    },

]


for(let i=0; i<carts.length;i++)
{
    carts[i].addEventListener('click', () => {


       cartNumbers(products[i]);
       totalCost(products[i]);
    })
}
function onload(){
    let productNumbers = localStorage.getItem('cartNumbers');
if (productNumbers)
{
    document.querySelector('.navbar  span').textContent = productNumbers;
}

}
function cartNumbers(product)
{  
    let productNumbers = localStorage.getItem('cartNumbers');
   
   
    productNumbers = parseInt(productNumbers);

    if(productNumbers)
    {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.navbar  span').textContent = productNumbers + 1;


    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.navbar span').textContent = 1;

    }
    setItems(product);
}

function setItems(product)
{
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null)
    {
        if(cartItems[product.name] == undefined)
        {
            cartItems={
                ...cartItems,
                [product.name]:product
            }
        }
        cartItems[product.name].Incart += 1;
    }else{

        product.Incart = 1;

        cartItems={
            [product.name]:product
        }
    }
   
    
    localStorage.setItem("productInCart",JSON.stringify(cartItems));
}
function totalCost(product)
{
    let cartCost = localStorage.getItem('totalCost');
  
   

    
    if(cartCost!=null)
    {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost" , cartCost + parseInt(product.prise));
    }
    else{
        localStorage.setItem("totalCost" , parseInt(product.prise));

    }
}

function displayCart()
{
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
console.log(cartItems);

let productConitainer= document.querySelector(".productConitainer");
if(cartItems && productConitainer)
{
    productConitainer.innerHTML = '';
    Object.values(cartItems).map(item =>{
      
        productConitainer.innerHTML+=`
        
        <table style="margin-left: 200px; color: black;">
        <tbody>
          <tr class="text-center">
            <td class="product-remove"><a href="#"><span class="ion-ios-close"></span></a></td>

            <td>
              <div class="image">
                <img src="cart/${item.name}.jpg" width="145px" height="125px" style="padding-left: 6em;">
              </div>
            </td>

            <td style="padding-right: 6em; padding-left: 10em; text-align: center;">
              <h3 style="color: black; text-align: center;">${item.name}</h3>
              <p style="color: gray;" style="padding-right: 15px;">Far far away, <br>behind the word mountains,<br> far
                from the countries</p>
            </td>

            <td style="color: black; padding-right: 2em; font-weight: 700;">Rs ${item.prise}.00</td>

            <td>
              <div class="input-group mb-3">
                <input type="text" style="padding: 10px; color: black; text-align: center;" name="quantity"
                  class="quantity form-control input-number" value="${item.Incart}" min="1" max="100">
              </div>
            </td>

            <td style="color: black; padding-left: 4em; font-weight: 700;" class="total">Rs ${item.prise * item.Incart}.00</td>

          </tr><!-- END TR-->
        </tbody>
      </table>
    
        
        
        `


    })    
}





}
onload();
displayCart();