<script setup>
import { ref, computed} from "vue";

const producto = ref('');
const precio =  ref('');
const carrito = ref([]);

function agregarProducto(){
    if(producto.value === '' || precio.value === ''){
        alert("Complete los campos")
        return
    }

    carrito.value.push({
        nombre: producto.value,
        precio: Number(precio.value)
    })

    producto.value = ''
    precio.value = ''
}
const total= computed(()=> {
    return carrito.value.reduce((suma, item) => suma + item.precio, 0)
})
function eliminarProducto(index){
    carrito.value.splice(index, 1)
}


</script>

<template>
    <div class="container">
        <h2>Carrito </h2>
        <input v-model="producto" type="text"  placeholder="Producto">
        <input v-model="precio" type="number" placeholder="Precio">
        <button @click="agregarProducto">Agregar</button>
        <p v-if="carrito.length === 0">El carrito está vacío</p>


        <ul>
            <li v-for="(item, index) in carrito" :key="index">{{ item.nombre }} - ${{ item.precio }}</li>
            <button class="btn-eliminar" @click="eliminarProducto(index)">Eliminar</button>
        </ul>

        <h3 class="total" :class="{ totalAlto: total > 100 }" v-if="carrito.length > 0">Total: ${{  total }}</h3>

    </div>

</template>