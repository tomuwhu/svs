<script lang="ts">
  import { base } from '$app/paths'
  import serverurl from './serverurl.js'
  var ServerURL: string = serverurl
  var un: string
  var pw: string
  $: loggedin = appdata.un && appdata.name
  import { onMount } from 'svelte'
  import axios from 'axios'
  import md5 from 'md5'
  interface Appdata {
    un: string
    name: string
    err: unknown
    msg: string
  }
  const appdata: Appdata = { un: '-', name: '...', err: null, msg: '' }
  onMount(async () => {
    appdata.un = localStorage.getItem('un') || ''
    try {
      const res = await axios.post(ServerURL, appdata.un)
      appdata.un = res.data.un
      appdata.name = res.data.name
    } catch (e: unknown) {
      appdata.err = e
    }
  })
  function login(e: any) {
    try {
      const res = axios.post(ServerURL + 'login.php', { un, pw: md5(pw) }).then((res) => {
        appdata.un = res.data.un
        if (appdata.un == null) {
          appdata.msg = 'Hibás felhasználónév vagy jelszó!'
          setInterval(() => (appdata.msg = ''), 1000)
        }
        appdata.name = res.data.name
        localStorage.setItem('un', appdata.un)
      })
    } catch (e: unknown) {
      appdata.err = e
    }
  }
  function logout(e: any) {
    try {
      const res = axios.post(ServerURL + 'logout.php', appdata.un).then((res) => {
        appdata.un = ''
        appdata.name = '...'
        localStorage.removeItem('un')
      })
    } catch (e: unknown) {
      appdata.err = e
    }
  }
</script>

<div class="menu">
  {#if !loggedin}<a href="{base}/reg/">regisztráció</a>{:else}<a href="./honlapok/">honlaplista</a
    >{/if}
</div>
<h1>SOB Intranet</h1>
{#if !loggedin}
  <input type="text" placeholder="Felhasználónév" bind:value={un} />
  <br /><br />
  <input type="password" placeholder="Jelszó" bind:value={pw} />
  <br /><br />
  {#if un && pw}
    <button on:click={login}>Login</button>
  {:else}
    <div class="button">Beküld</div>
  {/if}
  <br /><br />
{:else if !appdata.err}
  <div>{appdata.name}</div>
  <br />
  <br />
  <button on:click={logout}>Logout</button>
{:else}
  <span>{appdata.err}</span>
  <br />
{/if}
<span>{appdata.msg}</span>

<style lang="scss">
  $hover: rgb(143, 162, 175);
  $active: rgb(169, 123, 106);
  $bc: rgb(16, 49, 75);
  button,
  .button,
  a {
    all: unset;
    cursor: pointer;
    border: solid 1px $bc;
    padding: 6px;
    box-shadow: 1px 1px 3px black;
    color: $bc;
    text-shadow: 1px 1px 2px gray;
  }
  .button {
    color: rgb(122, 122, 119);
    cursor: default;
  }
  h1 {
    text-shadow: 1px 1px 3px black;
  }
  span {
    color: red;
    font-size: 18px;
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
  button:hover,
  a:hover {
    background-color: $hover;
  }
  button:hover,
  a:active {
    background-color: $active;
  }
  input {
    all: unset;
    text-align: left;
    width: 300px;
    border-bottom: solid 5px rgb(141, 117, 117);
    padding: 4px;
    background-color: rgb(226, 206, 206);
    box-shadow: 1px 1px 3px inset gray;
  }
</style>
