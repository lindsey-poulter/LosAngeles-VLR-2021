<script>

export let direction;

let arrow = direction == "next" ? ">"  : "<";

</script>

<div id="circle">
    {arrow}
</div>


<style>


#circle {
    background-color: var(--white);
    border-radius: 50%;
    box-shadow: var(--card-shadow);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid var(--button-border);
    color: var(--primary-color);
}

#circle:hover{
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
}

@media only screen and (max-width: 640px) {
    #circle:hover{
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

}
</style>