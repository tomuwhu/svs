<script lang="ts">
  import { base } from '$app/paths'
  import serverurl from './../serverurl.js'
  var ServerURL: string = serverurl
  var un: string,
    pw: string,
    name: string,
    mail: string,
    web: string,
    git: string,
    accept: boolean = false
  import { onMount } from 'svelte'
  import axios from 'axios'
  import md5 from 'md5'
  function send(e: any) {
    try {
      const res = axios
        .post(ServerURL + 'reg.php', { un, pw: md5(pw), name, mail, web, git })
        .then((res) => {
          if (res.data) {
            localStorage.setItem('un', un)
            accept = true
          }
        })
    } catch (e: unknown) {}
  }
</script>

<div class="menu"><a href="./../">belépés</a></div>
<h1>SOB Intranet regisztráció</h1>
{#if !accept}
  <input type="text" placeholder="Felhasználónév" id="un" bind:value={un} />
  <br /><br />
  <input type="text" placeholder="Név" id="name" bind:value={name} />
  <br /><br />
  <input type="text" placeholder="Email-cím" id="mail" bind:value={mail} />
  <br /><br />
  <input type="text" placeholder="Weboldal" id="web" bind:value={web} />
  <br /><br />
  <input type="text" placeholder="Git" id="git" bind:value={git} />
  <br /><br />
  <input type="password" placeholder="Jelszó" id="pw" bind:value={pw} />
  <br /><br />
  {#if un && pw && name}
    <button on:click={send}>Regisztrál</button>
  {:else}
    <div class="button">Beküld</div>
  {/if}
{:else}
  Sikeres regisztráció!
  <br />
  <br />
  <a href="{base}/">vissza a főoldalra</a>
{/if}

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
