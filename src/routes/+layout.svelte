<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import '$lib/styles/style.css'
</script>

<Header />

<header>I am the header from layout.svelte</header>

<main> 
    <slot/>
</main>

<footer>I am the footer from layout.svelte</footer>

<Footer />
