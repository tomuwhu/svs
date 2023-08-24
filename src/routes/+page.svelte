<script lang="ts">
	import { base } from '$app/paths'
	import { Space, Center, Button, Title, Divider } from '@svelteuidev/core'
	import { onMount } from 'svelte'
	var x: number = 0
	var mounted = false
	onMount(() => (mounted = true))
</script>

{#if mounted}
	<Space h={30} />
	<Center><Title color="brown">SvelteUi Base</Title></Center>
	<Space h={70} />
	<Divider />
	<Center>
		<Button class="animation-bounce" on:click={() => x++}>Szám: {x}</Button>
	</Center>
	<Divider />
	<Center>
		<Button variant="light" color="orange" compact href="{base}/link">link</Button>
	</Center>
{/if}
