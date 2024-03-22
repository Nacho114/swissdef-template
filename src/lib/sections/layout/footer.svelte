<script>
  import { _ } from "svelte-i18n";
  import Container from "$lib/components/container.svelte";
  import CircularButton from "$lib/components/circular_button.svelte";
  import Facebook from "virtual:icons/gg/facebook";
  import Twitter from "virtual:icons/ant-design/twitter-outlined";
  import Instagram from "virtual:icons/ant-design/instagram";
  import Location from "virtual:icons/typcn/location";
  import Phone from "virtual:icons/solar/phone-linear";
  import Email from "virtual:icons/iconamoon/email";
</script>

<Container style="background-color: #040707;">
  <div class="footer">
    <div class="left">
      <h3>
        {$_("section_footer_left_title")}
      </h3>
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

    <div class="right">
      <div class="sub-div">
        <h4>
          {$_("section_footer_quick_links")}
        </h4>
        <a href="/">
          <p>
            {$_("section_general_home")}
          </p>
        </a>
        <a href="/contact">
          <p>
            {$_("section_general_contact")}
          </p>
        </a>
        <a href="/products">
          <p>
            {$_("section_general_products")}
          </p>
        </a>
      </div>

      <div class="sub-div">
        <h4>
          {$_("section_footer_support_and_services")}
        </h4>
        <a href="/maintenance">
          <p>
            {$_("section_general_maintenance")}
          </p>
        </a>
        <a href="/training">
          <p>
            {$_("section_general_training")}
          </p>
        </a>
        <a href="/warranty_and_returns">
          <p>
            {$_("section_general_warranty_and_returns")}
          </p>
        </a>
      </div>

      <div class="sub-div">
        <h4>
          {$_("section_footer_contact_us")}
        </h4>
        <div class="contactContainer">
          <CircularButton bgColor="#363939" scale=".8">
            <Location />
          </CircularButton>
          <div class="addressText">
            <p>Route de l'Aiglon <br /> 1854 - Switzerland</p>
          </div>
        </div>
        <div class="contactContainer">
          <CircularButton link="tel:+41794412406" bgColor="#363939" scale=".8">
            <Phone />
          </CircularButton>
          <div class="addressText">
            <a href="tel:+41794412406"><p>+41 79 441 24 06</p></a>
          </div>
        </div>
        <div class="contactContainer">
          <CircularButton
            link="mailto:info@swissdefibrillator.ch"
            bgColor="#363939"
            scale=".8"
          >
            <Email />
          </CircularButton>
          <div class="addressText">
            <a href="mailto:info@swissdefibrillator.ch"
              ><p>info@swissdefibrillator.ch</p></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>
<div class="endContainer">
  <hr class="gray-line" />

  <div class="divider">
    <span>
      <a href="/terms_and_conditions">
        {$_("section_general_terms_and_conditions")}
      </a>
    </span>
    <span>
      <a href="/privacy_policy">
        {$_("section_general_privacy_policy")}
      </a>
    </span>
  </div>
</div>

<style>
  a {
    display: block; /* Makes the entire area clickable */
    text-decoration: none; /* Removes underline from links */
    text-align: left;
    color: white; /* White text color */
  }

  .footer {
    display: flex;
    color: white;
    align-items: top;
    gap: 15vw;
    padding-top: 3.5vw;
    padding-bottom: 3vw;
  }

  .left {
    display: flex;
    flex-direction: column;
  }

  .left h3 {
    width: 17vw;
    text-align: left;
  }

  .right {
    display: flex;
    flex-direction: row;
    gap: 2vw;
  }

  /* Media query for smaller screens (adjust the breakpoint as needed) */
  @media (max-width: 600px) {
    .footer {
      flex-direction: column; /* Stack vertically on smaller screens */
      padding-left: var(--main-padding-sides-mobile);
      padding-right: var(--main-padding-sides-mobile);
    }

    .right {
      text-align: left;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .left h3 {
      width: 70vw;
    }
  }

  .contactContainer {
    display: flex;
    gap: 0.7vw;
    align-items: center;
    margin-bottom: 0.7vw;
  }

  .addressText p {
    margin: 0;
  }

  .right p {
    color: #b9b9b9;
    font-size: 12px;
  }

  .icon {
    display: flex;
    gap: 20px;
  }

  .endContainer {
    background-color: #040707;
  }

  .gray-line {
    margin: 0;
    color: #363939;
  }

  .divider {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5vw;
    justify-content: center;
    padding: 12px;
    color: #b9b9b9;
  }
</style>
