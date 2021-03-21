<template>

    <div class="container">

        <div class="rect1" id="rect1"> Rect1 </div>
        <div class='rect2' id="rect2">Rect 2</div>
        <div class='point' id="A">A</div>


    </div>   

</template>

<script>
export default {
    data:{
        rectangle1:'',
        rectangle:'',
        point:''
    },

    methods:{
        getSides: function(){
            var rectangle1 = document.getElementById('rect1')
            var rectangle2 = document.getElementById('rect2')

            rwidth = rectangle1.clientWidth;
            rheight = rectangle2.clientWidth;
            console.log(rwidth)
            var point = document.getElementById('A')
            this.point = point.getBoundingClientRect()
            console.log(point.top, point.right, point.bottom, point.left);


        }
    }   
}
</script>


<style scoped>
.point{
    border-radius: 1px;
    width: 1px;
    height: 1px;
    background: black;
}

.rect1{
    height:100px;
    width:200px;
    border: black;
    background: blue;
    font-size: 20px; 
    color: rgb(255, 255, 255);
    align-content: center;
    text-align: center;
    margin-left: 30%;
}
.rect2{
        position: absolute;
    height:100px;
    width:100px;
    border: black;
    background: red;
    color: rgb(255, 255, 255);
    border:200px;
    text-align: center;
    margin-left: 50px;
    margin: 20px;
    align-items: center;
    margin-left: 300px;

}

.container{
    margin-top: 50px;
    align-items: center;
    height: 400px;
    width: 800px;
    border-width: 20px;
    border: black;
    border-style: dashed;
}

</style>