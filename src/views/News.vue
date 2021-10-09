<template>
    <main class="content">
        <SearchBar></SearchBar>
        <NewsList></NewsList>
    </main>
</template>
<script>


import SearchBar from '../components/SearchBar'
import NewsList from '../components/NewsList'

export default {
    name: 'News',
    components: {
        SearchBar,
        NewsList
    }
}
</script>