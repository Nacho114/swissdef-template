<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import CircularButton from "$lib/components/circular_button.svelte";
  import Facebook from "virtual:icons/gg/facebook";
  import Twitter from "virtual:icons/ant-design/twitter-outlined";
  import Instagram from "virtual:icons/ant-design/instagram";
  import Location from "virtual:icons/typcn/location";
  import Phone from "virtual:icons/solar/phone-linear";
  import Email from "virtual:icons/iconamoon/email";
</script>

<div class="contact-info">
  <div class="header">
    <h1>Contact us</h1>
    <p class="subtitle">Don't hesitate to contact us</p>
  </div>

  <div class="sub-div">
    <div class="contactContainer">
      <CircularButton bgColor="#363939" scale=".8">
        <Location />
      </CircularButton>
      <div class="addressText">
        <p>Iggy Street <br /> 1000 - Switzerland</p>
      </div>
    </div>
    <div class="contactContainer">
      <CircularButton bgColor="#363939" scale=".8">
        <Phone />
      </CircularButton>
      <div class="addressText">
        <p>+41 21 311 25 38</p>
      </div>
    </div>
    <div class="contactContainer">
      <CircularButton bgColor="#363939" scale=".8">
        <Email />
      </CircularButton>
      <div class="addressText">
        <p>info@swissdefibrillator.ch</p>
      </div>
    </div>
  </div>

  <div class="closing-text">
    <p>Talk soon!</p>
  </div>

  <div class="icon">
    <CircularButton>
      <Facebook />
    </CircularButton>
    <CircularButton>
      <Twitter />
    </CircularButton>
    <CircularButton>
      <Instagram />
    </CircularButton>
  </div>
</div>

<style>
  .contact-info {
    text-align: center;
    color: #fff; /* White text */
    margin: 2rem;
    text-align: left;
  }

  .subtitle {
    margin-bottom: 1rem;
    color: #fff; /* White text */
    font-size: 1.2em;
  }

  .contactContainer {
    display: flex;
    gap: 0.7vw;
    align-items: center;
    margin-bottom: 0.7vw;
  }

  .closing-text {
    margin-top: 2rem;
    font-style: italic;
    color: #fff; /* White text */
  }

  .icon {
    display: flex;
    gap: 20px;
  }
</style>
