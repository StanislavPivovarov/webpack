<template>
    <div>
        {{mainText}}
    </div>
</template>
<style>
    body{
        background-color:#000;
    }
</style>
<script>
    export default{
        props: ['childParam'],
        computed :
        {
           mainText: function () {
            return this.childParam
            //@TODO NOT WORK WHY () => this.childParam
           }
        }
    }
</script>
