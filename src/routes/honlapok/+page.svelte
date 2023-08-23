<div class="menu"><a href="./../">Vissza a főoldalra</a></div>
{#if false}<button class="button" />{/if}
<h1>Honlapok</h1>

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
</style>
