<script lang="ts">
  import { base } from '$app/paths'
  import serverurl from './../serverurl.js'
  import { onMount } from 'svelte'
  import axios from 'axios'
  var mydata: { un: any } = { un: null }
  var ServerURL: string = serverurl
  interface Appdata {
    un: string
    name: string
    web: string
    mail: string
    git: string
    err: unknown
  }
  var appdata: Appdata[] = []
  onMount(async () => {
    mydata.un = localStorage.getItem('un') || ''
    try {
      const res = await axios.get(ServerURL + 'req.php')
      appdata = res.data
    } catch (e: unknown) {
      console.log(e)
    }
  })
</script>

<div class="menu">
  <a href="{base}/stream/">Oktatási csatorna</a><a href="{base}/">Vissza a főoldalra</a>
</div>
<h1>Honlapok</h1>
{#each appdata as elem}
  <div class="e">
    {elem.name}
    <hr />
    <a
      class="hl"
      href={elem.web.slice(0, 4) == 'http' ? elem.web : `http://${elem.web}`}
      target="_blank">Honlap</a
    >
    <a
      class="g"
      href={elem.git.slice(0, 4) == 'http' ? elem.git : `http://${elem.git}`}
      target="_blank">&nbsp; &nbsp; Git &nbsp; &nbsp;</a
    >
  </div>
{/each}

<style lang="scss">
  $hover: rgb(143, 162, 175);
  $active: rgb(169, 123, 106);
  $bc: rgb(16, 49, 75);
  a {
    all: unset;
    cursor: pointer;
    border: solid 1px $bc;
    font-size: 11px;
    padding: 2px;
    box-shadow: 1px 1px 2px rgb(37, 36, 36);
    color: $bc;
    text-shadow: 1px 1px 2px gray;
    border-radius: 4px;
  }
  h1 {
    text-shadow: 1px 1px 3px black;
  }
  div {
    color: rgb(55, 70, 76);
    font-size: 20px;
    text-shadow: 1px 1px 3px gray;
  }
  .menu {
    text-align: right;
    background-color: black;
    a {
      background-color: rgb(54, 30, 30);
      display: inline-block;
      padding: 2px;
      font-size: 13px;
      color: white;
      padding-left: 6px;
      padding-right: 6px;
      margin-right: 10px;
      margin-bottom: 6px;
    }
  }
  a:hover {
    background-color: $hover;
  }
  a:active {
    background-color: $active;
  }
  div.e {
    display: inline-block;
    font-size: 12px;
    border: solid 1px black;
    padding: 6px;
    margin: 6px;
    border-radius: 6px;
    background-color: aquamarine;
  }
  a.hl {
    background-color: rgb(202, 190, 122);
  }
  a.hl:hover {
    background-color: rgb(144, 135, 83);
  }
  a.hl:active {
    background-color: rgb(171, 154, 59);
  }
  a.g {
    background-color: black;
    color: white;
  }
  a.g:hover {
    background-color: rgb(76, 76, 76);
    color: white;
  }
  a.g:active {
    background-color: rgb(255, 254, 254);
    color: rgb(0, 0, 0);
  }
</style>
