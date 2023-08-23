<script lang="ts">
	import { base } from '$app/paths'
	var x: number = 0
</script>

<h1>
	SVS <button on:click={() => x++}>{x}</button>
</h1>
<br />
<a href="{base}/link">link</a>

<style lang="scss">
	$number_norm: rgb(45, 83, 101);
	$number_hover: rgb(138, 90, 90);
	$number_active: rgb(151, 67, 67);
	h1 {
		text-shadow: 1px 1px 3px black;
		button {
			all: unset;
			display: inline-block;
			color: $number_norm;
			cursor: pointer;
		}
		button:hover {
			color: $number_hover;
		}
		button:active {
			color: $number_active;
		}
	}
	a {
		all: unset;
		cursor: pointer;
	}
</style>
