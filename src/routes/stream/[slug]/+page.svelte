<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data: { name?: string }
  import { base } from '$app/paths'
  import serverurl from './../../serverurl.js'
  import { onMount } from 'svelte'
  import Md from 'markdown-it'
  import mathjax3 from 'markdown-it-mathjax3'
  import mhl from 'markdown-it-highlightjs'
  import axios from 'axios'
  import { updated } from '$app/stores'
  var tzoffset = new Date().getTimezoneOffset() * 60000
  var localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, -1)
  var most = localISOTime.split('.')[0].replace('T', ' ')
  $: ma = most.split(' ')[0]
  const md = new Md()
  md.use(mathjax3)
  md.use(mhl, { auto: true })
  var mydata: {
    un?: any
    name?: string
    text?: string
    hl: {
      currtime: any
      un: string
      name: string | undefined
      id: string
      user: string | undefined
      msg: string | undefined
    }[]
  } = { hl: [] }
  var ServerURL: string = serverurl
  setInterval(() => {
    tzoffset = new Date().getTimezoneOffset() * 60000
    localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, -1)
    most = localISOTime.split('.')[0].replace('T', ' ')
  }, 1000)
  onMount(async () => {
    mydata.un = localStorage.getItem('un') || ''
    try {
      var eventSource = new EventSource(ServerURL + 'try.php')
      eventSource.onmessage = (es) => {
        mydata.hl = JSON.parse(es.data)
        mydata.hl.forEach((v) => {
          if (mydata.un == v.un) {
            mydata.name = v.user
            if (data.name != mydata.name) data.name = `<i>${mydata.name}</i>`
          }
        })
      }
    } catch (e: unknown) {
      console.log(e)
    }
  })
  const rest: { insert: Function; update: Function } = {
    insert() {
      axios
        .post(ServerURL + 'insert.php', mydata)
        .then((res: { data: {} }) => {
          if (res.data) {
            mydata.hl.unshift({
              currtime: most,
              un: mydata.un,
              name: mydata.name,
              user: mydata.name,
              id: most,
              msg: mydata.text
            })
            console.log(mydata.hl)

            mydata.text = ''
          }
        })
        .catch((e: any) => {})
    },
    update() {}
  }
</script>

<div class="menu">
  <a href="{base}/honlapok/">Honlaplista</a><a href="{base}/">Vissza a főoldalra</a>
</div>
<h2>Oktatási csatorna</h2>
<div class="code zz">
  <textarea bind:value={mydata.text} cols="30" rows="10" />
  <div class="ci">
    {#if mydata.text}
      <button class="bk" on:click={rest.insert}>Beküld</button>
    {/if}
    <span class="bk">&nbsp;</span>
    <span class="user">{@html data.name}</span>
    <span class="ip">{most.split(' ')[1]}</span>
  </div>
  {#if mydata.text}
    <div class="cc"><code>{@html md.render(mydata.text || '&nbsp;')}</code></div>
  {:else}
    <div class="bottom" />
  {/if}
</div>
<br />
{#each mydata.hl as row}
  <div class="code">
    <div class="ci">
      {#if row.user == mydata.name}
        <button>Módosít</button>
      {/if}
      <span class="user">{row.user}</span>
      <span class="ip">{row.id.split(' ')[0] == ma ? row.id.split(' ')[1] : row.id}</span>
    </div>
    <div class="cc"><code>{@html md.render(row.msg || 'Empty post')}</code></div>
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
  h2 {
    text-shadow: 1px 1px 3px rgb(91, 98, 103);
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
        padding-right: 8px;
        padding-top: 5px;
        color: rgb(226, 186, 186);
        display: inline-block;
        width: 630px;
        text-align: right;
      }
      .ip {
        font-size: 10px;
        color: rgb(223, 223, 164);
        display: inline-block;
        text-align: right;
        width: 90px;
        margin-right: 5px;
        padding-right: 5px;
        background-color: rgb(34, 72, 93);
        border-radius: 4px;
        border: solid 0.3px yellow;
      }
    }
  }
  div.cc {
    background-color: $bc;
    padding: 4px;
    code {
      color: rgb(234, 234, 165);
      font-size: 11px;
      font-family: Courier;
      border: solid 5px $bc;
      background-color: rgb(44, 86, 104);
      display: inline-block;
      width: 765px;
      padding-left: 25px;
      box-shadow: 1px 1px 3px inset black;
      border: solid 2px orange;
      border-radius: 11px;
    }
  }
  textarea {
    all: unset;
    margin: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    font-family: monospace;
    color: rgb(10, 75, 10);
    width: 780px;
    height: 120px;
  }
  div.zz {
    background-color: antiquewhite;
  }
  div.ci {
    text-align: right;
  }
  button {
    all: unset;
    box-shadow: 1px 1px 3px inset rgb(255, 255, 255);
    cursor: pointer;
    color: rgb(219, 190, 190);
    border: solid 0.5px rgb(180, 119, 119);
    padding-left: 6px;
    padding-right: 6px;
    background-color: rgb(62, 24, 24);
    border-radius: 4px;
  }
  button:hover {
    background-color: rgb(177, 43, 43);
  }
  button:active {
    background-color: rgb(19, 68, 19);
  }
  span.bk {
    display: inline-block;
    width: 2px;
  }
  div.bottom {
    background-color: $bc;
    height: 4px;
  }
</style>
