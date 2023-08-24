<script lang="ts">
	import { base } from '$app/paths'
	import { Center, Button, Title, Divider } from '@svelteuidev/core'
  import { onMount } from 'svelte'
	var x: number = 0
  var mounted = false
  onMount(() => mounted = true)
</script>
{#if mounted}
<Center><Title>SvelteUi Base</Title></Center>
<Divider />
<Center>
  <Button class="animation-bounce" on:click={() => x++}>{x}</Button>
</Center>
<Divider />
<Center>
  <Button href="{base}/link">link</Button>
</Center>
{/if}
