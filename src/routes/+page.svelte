<script lang="ts">
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

<h1>SOB Intranet</h1>
{#if !loggedin}
  <input type="text" placeholder="Felhasználónév" bind:value={un} />
  <br /><br />
  <input type="password" placeholder="Jelszó" bind:value={pw} />
  <br /><br />
  {#if un && pw}
    <button on:click={login}>Login</button>
  {/if}
  <br /><br />
{:else if !appdata.err}
  <div>{appdata.name}</div>
  <br />
  <br />
  <button on:click={logout}>Logout</button>
{/if}
{#if appdata.err}
  <span>{appdata.err}</span>
  <br />
{/if}
<span>{appdata.msg}</span>

<style lang="scss">
  h1 {
    text-shadow: 1px 1px 3px black;
  }
  span {
    color: red;
  }
  div {
    color: rgb(55, 70, 76);
    font-size: 20px;
    text-shadow: 1px 1px 3px gray;
  }
</style>
