<template>
    <div class="one-diary">
        <h1>{{this.row.title}}</h1>
        <P>{{this.row.content}}</p>
    </div>
</template>

<script>

export default {
    name: "OneDiary",
    props: ['row'],
}
</script>

<style>
.one-diary {
    margin: 5px;
    background-color: aqua;
}
</style>