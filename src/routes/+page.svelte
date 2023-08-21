<script lang="ts">
	var x: number = 8;
</script>

<h1>
	SVS <button on:click={() => x++}>{x}</button>
</h1>

<style lang="scss">
	h1 {
		text-shadow: 1px 1px 3px black;
		button {
			all: unset;
			display: inline-block;
			color: rgb(151, 67, 67);
			cursor: pointer;
		}
		button:hover {
			color: rgb(138, 90, 90);
		}
		button:active {
			color: rgb(138, 136, 90);
		}
	}
</style>
