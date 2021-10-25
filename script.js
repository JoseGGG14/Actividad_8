const app = new Vue({
    el:'#main',

    data:{
        produ:[
            {nombre:'Proteina Muscletech', cantidad:5, precioUnitario:869, total:0},
            {nombre:'Burst BodyPerformance', cantidad:2, precioUnitario:349, total:0}
        ],
        //nuevaFruta='',
        //nuevaCantidad=0,
        //nuevoPrecio=0.0,
        total2:0,
        total:0,
        subtotal:0,
        iva:0,
    },
    methods:{
        //agregar:function(){  
        //},
        montoProdu:function(i){
            this.produ[i].total=this.produ[i].cantidad * this.produ[i].precioUnitario;
            return this.produ[i].total;
        }
    },
    computed:{
        sumarProdu(){
            return this.total2;
        },
        calculoSubtotal(){
            this.subtotal=0;
            for(fruta of this.produ){
                this.subtotal += fruta.total;
            }
            return this.subtotal;
        },
        calculoIva(){
            this.iva=0;
            this.iva=this.subtotal * 0.16;
            return this.iva.toFixed(2);
        },
        calculoTotal(){
            return (this.subtotal + this.iva).toFixed(2);
        },
    }
})