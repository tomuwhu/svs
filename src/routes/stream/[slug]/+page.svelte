<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data:{name?: string}
  import { base } from '$app/paths'
  import serverurl from './../../serverurl.js'
  import { onMount } from 'svelte'
  import Md from 'markdown-it'
  import mathjax3 from 'markdown-it-mathjax3'
  import mhl from 'markdown-it-highlightjs'
  const md = new Md()
  md.use(mathjax3)
  md.use(mhl, { auto: true })
  var mydata: {
    un?: any
    hl: { id?: string | undefined; user?: string | undefined; msg?: string | undefined }[]
  } = { hl: [] }
  var ServerURL: string = serverurl
  onMount(async () => {
    mydata.un = localStorage.getItem('un') || ''
    try {
      var eventSource = new EventSource(ServerURL + 'try.php')
      eventSource.onmessage = (es) => {
        mydata.hl = JSON.parse(es.data)
      }
    } catch (e: unknown) {
      console.log(e)
    }
  })
</script>

<div class="menu">
  <a href="{base}/honlapok/">Honlaplista</a><a href="{base}/">Vissza a főoldalra</a>
</div>
<h6>{data.name}</h6>
<h1>Oktatási csatorna</h1>
{#each mydata.hl as row}
  <div class="code">
    <div><span class="user">{row.user}</span><span class="ip">{row.id}</span></div>
    <code>{@html md.render(row.msg || 'Empty post')}</code>
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
  div.code {
    margin: 6px;
    box-shadow: 1px 1px 4px black;
    border: solid 1px $bc;
    display: inline-block;
    width: 800px;
    color: rgb(211, 212, 194);
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: left;
    div {
      font-size: 11px;
      background-color: $bc;
      .user {
        padding-left: 8px;
        padding-top: 5px;
        color: rgb(226, 186, 186);
        display: inline-block;
        width: 392px;
      }
      .ip {
        color: rgb(223, 223, 164);
        display: inline-block;
        text-align: right;
        width: 392px;
      }
    }
    code {
      font-size: 11px;
      font-family: Courier;
      border: solid 5px $bc;
      background-color: rgb(79, 96, 103);
      display: inline-block;
      width: 765px;
      padding-left: 25px;
    }
  }
</style>