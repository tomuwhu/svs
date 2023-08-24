<script lang="ts">
	import { base } from '$app/paths'
	import { Center, Button, Title, Divider } from '@svelteuidev/core'
	import { onMount } from 'svelte'
  var mounted = false
  onMount(() => mounted = true)
</script>

{#if mounted}
<Center>
  <Title color="darkblue">A link mögött</Title>
</Center>
<Divider />
<Center>
  <Button variant="outline" color="cyan" href="{base}/">Vissza</Button>
</Center>
{/if}

