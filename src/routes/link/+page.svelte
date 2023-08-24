<script lang="ts">
	import { base } from '$app/paths'
	import { Space, Center, Button, Title, Divider } from '@svelteuidev/core'
	import { onMount } from 'svelte'
	var mounted = false
	onMount(() => (mounted = true))
</script>

{#if mounted}
	<Space h={30} />
	<Center>
		<Title color="darkblue">A link mögött</Title>
	</Center>
	<Space h={70} />
	<Divider />
	<Center>
		<Button variant="outline" color="cyan" href="{base}/">Vissza</Button>
	</Center>
{/if}
