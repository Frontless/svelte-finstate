<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import routes from "~/routes/index.js";
    import Router, {location} from "svelte-spa-router";
    import {fade} from 'svelte/transition'
    import Dashboard from "./components/Dashboard.svelte";
</script>

<Header></Header>

{#key $location}
    <div in:fade>
        <Router {routes} restoreScrollState={true}></Router>
    </div>
{/key}
<Footer></Footer>