<script lang="ts">
	import { base } from '$app/paths'
	import { Center, Button, Title, Divider } from '@svelteuidev/core'
	import { onMount } from 'svelte'
	var x: number = 0
	var mounted = false
	onMount(() => (mounted = true))
</script>

{#if mounted}
	<Center><Title color="brown">SvelteUi Base</Title></Center>
	<Divider />
	<Center>
		<Button class="animation-bounce" on:click={() => x++}>{x}</Button>
	</Center>
	<Divider />
	<Center>
		<Button variant="light" color="orange" compact href="{base}/link">link</Button>
	</Center>
{/if}
