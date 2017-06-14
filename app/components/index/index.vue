<template>
    <div id="main" class="main">
        <div class="scroll">
            <div class="content">img</div>
        </div><div class="text">
            <div class="content">text</div>
        </div>
    </div>
</template>


<script>
    /*--------script----------*/

</script>


<style>
    /*---------style-----------*/
    #main{
        margin-top:1rem;
    }
    #main>div{
        box-sizing:border-box;
        display:inline-block;
        vertical-align: top;
        width:50%;
        font-size:0;
        height:39rem;

    }

    #main .scroll{
        padding-right:1rem
    }
    #main .text{
    }

    #main .content{
        width:100%;
        height:100%;
        background:#333;
        opacity: 0.6;
    }

</style>