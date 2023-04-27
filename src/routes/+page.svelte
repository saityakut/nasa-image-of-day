<script>
    export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<main>
    <article>
        <header>{data.date} - {data.title}</header>
        <img src={data.hdurl} alt={data.title}>
        <footer>{data.explanation}</footer>
    </article>
</main>

