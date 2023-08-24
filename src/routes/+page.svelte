<script lang="ts">
	import { base } from '$app/paths'
	import { Stack, Space, Button, Title } from '@svelteuidev/core'
	import { onMount } from 'svelte'
	var x: number = 0
	var mounted = false
	onMount(() => (mounted = true))
</script>

{#if mounted}
	<Space h={30} />
	<Title align="center">SvelteUi Base</Title>
	<Space h={30} />
	<Stack align="center">
		<Button class="animation-bounce" on:click={() => x++}>Szám: {x}</Button>
		<Button color="orange" href="{base}/link">Link</Button>
	</Stack>
	<Space h={30} />
{/if}
