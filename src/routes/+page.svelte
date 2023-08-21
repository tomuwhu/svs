<script lang="ts">
	var x: number = 8;
</script>

<h1>
	SVS <button on:click={() => x++}>{x}</button>
</h1>

<style lang="scss">
	$number_norm: rgb(151, 67, 67);
	$number_hover: rgb(138, 90, 90);
	$number_active: rgb(138, 136, 90);
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
</style>
