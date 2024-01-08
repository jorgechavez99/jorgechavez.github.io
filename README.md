# Práctica maquetación css y html

---
## Introducción

Esta pagina web esta elaborado para poder dar a conocer el funcionamiento de HTML con CSS,los cuales van de la mano para que pueda el usuario tener una mejor experiencia a nivel visual, al igual los buscadores deacuerdo a las etiquetas semanticas, para que estos puedan tener una mejor compresion de esta pagina web.

---

##Tecnologias aplicadas

.HTML

.CSS

---
##Funcionamiento

Podemos observar que la pagina es Responsiva a diferentes tamaños esto gracias al metodo FIRST MOBILE el cual junto a las medias queries podemos mostrar nuestro trabajo en diferentes dispositivos , las cuales fueron las siguientes 

*First Mobile = ( Celulares con pantalla menor a 778px)


*Media 768px = ( tablets )
```css
/* ============== 768px=======*/
@media screen and (min-width:768px) {

    section {
        padding: 30px;
    }

    .containerViajesReco,
    .containerViajesBolsillo {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .viajereco {
        width: 48%;
    }

    .viajebol {
        width: 48%;
    }
    footer {
      
        display: flex;
        justify-content: space-between;
        
  
    }


}

/*768px*/
```

*Media 992px = (Ordenadores)

```css
/* ============== 992px=======*/
@media screen and (min-width:992px) {

    /*==========header========= */
    .banderas>img,
    .redes>img {
        width: 30px;
    }

    .logo {
        width: 250px;
    }

    .sitio {
        flex-direction: row;
    }

    .navegacion {
        display: flex;
        justify-content: center;
    }

    .navegacion a:hover {
        background-color: rgb(15, 140, 224);
        color: rgb(143, 152, 159);
    }

    /*header*/
    .containerViajesReco {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 5px;
    }

    .viajereco {
        width: 31%;
    }

    .viajebol {
        width: 23%;
    }
    footer {
      
        display: flex;
        justify-content: space-between;
  
    }
}

/*992px*/
```