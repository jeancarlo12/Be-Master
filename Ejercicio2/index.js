
                         //Codigo único
                         
function f(x, y, z) { //La función f() toma tres parámetros: x, y y z.
    let a = x + y;    //La variable a se inicializa con la suma de los valores de x y y.
    let b = a * z;    //La variable b se inicializa con el producto de los valores de a y z.
    let c = Math.sin(b);  //La variable c se inicializa con el seno del valor de b.
    return c; //La función f() devuelve el valor de c.
  }

                       //Código con nombres de variables descriptivos
  
  function f(x, y, z) {  //a función f() toma tres parámetros: x, y y z.
    let suma = x + y;    //La variable suma se inicializa con la suma de los valores de x y y.
    let producto = suma * z;  //La variable producto se inicializa con el producto de los valores de suma y z.
    let seno = Math.sin(producto);  //La variable seno se inicializa con el seno del valor de producto.
    return seno; //La función f() devuelve el valor de seno.
  }
  
  console.log(f(1, 2, 3))